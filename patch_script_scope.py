import re
import os

script_path = './js/script.js'
with open(script_path, 'r', encoding='utf-8') as f:
    content = f.read()

# We want to find window.renderInvoiceSummary = async function renderInvoiceSummary(opt, data, group)
# and renderBenefitsAndConditions, and move them outside of initModals.
# Alternatively, we can just ensure they are attached to window and we don't care where they are,
# as long as we put them right at the start of initModals so they don't break if an error happens later.
# Or better yet: just duplicate them outside or assign them globally right after script.js!

# Actually, the simplest fix is to just export ALL the needed functions to `window` right at the very end of script.js securely.
# Since JavaScript hoists function declarations inside the same script block, if we place window.X = X at the bottom of the script, it wouldn't work if they are inside initModals.

# Let's extract them properly.
# The body of initModals is huge. We just need to find the definition of `window.renderInvoiceSummary = async function...` down to its closing brace (lines 352 to 536) and move it outside.
# Let's use regex to extract it if possible, or string indexing.

start_idx = content.find("    window.renderInvoiceSummary = async function renderInvoiceSummary")
if start_idx != -1:
    # Let's find where initModals ends.
    # initModals ends right before `function toggleModal(id, show)`
    end_of_initModals = content.find("function toggleModal(id, show)")
    
    if end_of_initModals != -1:
        # Move everything from start_idx to end_of_initModals outside!
        # The block we want to move includes renderBenefitsAndConditions too.
        # Actually, renderBenefitsAndConditions starts earlier.
        start_benefits = content.find("    function renderBenefitsAndConditions(data, body)")
        if start_benefits != -1:
            chunk_to_move = content[start_benefits:end_of_initModals]
            # Replace it with empty in original
            content = content[:start_benefits] + content[end_of_initModals:]
            # Append it to the very bottom
            content += "\n// --- Globally Exported Modal Logic ---\n" + chunk_to_move
            
            with open(script_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print("Extracted modal logic to global scope!")
