import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Change the Studio Photos button in the Studio section
html = re.sub(
    r'<a href="/rent.html#gallery"[^>]*data-i18n="studio.photos_button">Studio Photos</a>',
    r'<button onclick="openStudioGalleryModal()" class="inline-flex items-center px-8 py-3 bg-white text-gray-800 font-medium rounded-md hover:bg-gray-50 border border-gray-200 transition-colors shadow-sm" data-i18n="studio.photos_button">Studio Photos</button>',
    html
)

# 2. Add the modal html at the bottom before script tags
modal_html = """
    <!-- Studio Photos Premium Modal -->
    <div id="studio-gallery-modal" class="fixed inset-0 z-[100] hidden items-start justify-center bg-black/95 backdrop-blur-md overflow-y-auto transition-opacity duration-300 opacity-0 px-4 py-12 md:py-20 cursor-pointer" onclick="closeStudioGalleryModal()">
        
        <button onclick="closeStudioGalleryModal()" class="fixed top-6 right-6 md:top-10 md:right-10 p-3 bg-white/10 hover:bg-pink-600 text-white rounded-full backdrop-blur-md transition-all z-[110] transform hover:rotate-90 shadow-2xl border border-white/20">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        <div class="relative w-full max-w-7xl mx-auto cursor-default" onclick="event.stopPropagation()">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-serif font-medium text-white tracking-wide mb-6">Goyoga Tallinn Studio Gallery</h2>
                <div class="w-24 h-1 bg-pink-500 mx-auto rounded-full"></div>
            </div>
            
            <div class="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                <img src="assets/studio/5-goyoga-tallinn-stuudio-estonia-jooga-meditatsioon-rendi-ruumid-narvamnt7Dkorrus3-raili-maripuuu-raili-yoga-ashtanga-600w.webp" alt="Studio Gallery" class="w-full h-auto object-cover rounded-xl shadow-2xl mb-4 hover:scale-[1.02] transition-transform duration-500 border border-white/10" loading="lazy">
                <img src="assets/studio/6-goyoga-tallinn-stuudio-estonia-jooga-meditatsioon-rendi-ruumid-narvamnt7Dkorrus3-raili-maripuuu-raili-yoga-ashtanga-600w.webp" alt="Studio Gallery" class="w-full h-auto object-cover rounded-xl shadow-2xl mb-4 hover:scale-[1.02] transition-transform duration-500 border border-white/10" loading="lazy">
                <img src="assets/studio/7-goyoga-tallinn-stuudio-estonia-jooga-meditatsioon-rendi-ruumid-narvamnt7Dkorrus3-raili-maripuuu-raili-yoga-ashtanga-600w.webp" alt="Studio Gallery" class="w-full h-auto object-cover rounded-xl shadow-2xl mb-4 hover:scale-[1.02] transition-transform duration-500 border border-white/10" loading="lazy">
                <img src="assets/studio/8-goyoga-tallinn-stuudio-estonia-jooga-meditatsioon-rendi-ruumid-narvamnt7Dkorrus3-raili-maripuuu-raili-yoga-ashtanga-600w.webp" alt="Studio Gallery" class="w-full h-auto object-cover rounded-xl shadow-2xl mb-4 hover:scale-[1.02] transition-transform duration-500 border border-white/10" loading="lazy">
                <img src="assets/studio/9-goyoga-tallinn-stuudio-estonia-jooga-meditatsioon-rendi-ruumid-narvamnt7Dkorrus3-raili-maripuuu-raili-yoga-ashtanga-600w.webp" alt="Studio Gallery" class="w-full h-auto object-cover rounded-xl shadow-2xl mb-4 hover:scale-[1.02] transition-transform duration-500 border border-white/10" loading="lazy">
                <img src="assets/studio/10-goyoga-tallinn-stuudio-estonia-jooga-meditatsioon-rendi-ruumid-narvamnt7Dkorrus3-raili-maripuuu-raili-yoga-ashtanga-600w.webp" alt="Studio Gallery" class="w-full h-auto object-cover rounded-xl shadow-2xl mb-4 hover:scale-[1.02] transition-transform duration-500 border border-white/10" loading="lazy">
                <img src="assets/studio/11-goyoga-tallinn-stuudio-estonia-jooga-meditatsioon-rendi-ruumid-narvamnt7Dkorrus3-raili-maripuuu-raili-yoga-ashtanga-600w.webp" alt="Studio Gallery" class="w-full h-auto object-cover rounded-xl shadow-2xl mb-4 hover:scale-[1.02] transition-transform duration-500 border border-white/10" loading="lazy">
                <img src="assets/studio/12-goyoga-tallinn-stuudio-estonia-jooga-meditatsioon-rendi-ruumid-narvamnt7Dkorrus3-raili-maripuuu-raili-yoga-ashtanga-600w.webp" alt="Studio Gallery" class="w-full h-auto object-cover rounded-xl shadow-2xl mb-4 hover:scale-[1.02] transition-transform duration-500 border border-white/10" loading="lazy">
                <img src="assets/studio/13-goyoga-tallinn-stuudio-estonia-jooga-meditatsioon-rendi-ruumid-narvamnt7Dkorrus3-raili-maripuuu-raili-yoga-ashtanga-600w.webp" alt="Studio Gallery" class="w-full h-auto object-cover rounded-xl shadow-2xl mb-4 hover:scale-[1.02] transition-transform duration-500 border border-white/10" loading="lazy">
                <img src="assets/studio/14-goyoga-tallinn-stuudio-estonia-jooga-meditatsioon-rendi-ruumid-narvamnt7Dkorrus3-raili-maripuuu-raili-yoga-ashtanga-600w.webp" alt="Studio Gallery" class="w-full h-auto object-cover rounded-xl shadow-2xl mb-4 hover:scale-[1.02] transition-transform duration-500 border border-white/10" loading="lazy">
                <img src="assets/studio/15-goyoga-tallinn-stuudio-estonia-jooga-meditatsioon-rendi-ruumid-narvamnt7Dkorrus3-raili-maripuuu-raili-yoga-ashtanga-600w.webp" alt="Studio Gallery" class="w-full h-auto object-cover rounded-xl shadow-2xl mb-4 hover:scale-[1.02] transition-transform duration-500 border border-white/10" loading="lazy">
                <img src="assets/studio/16-goyoga-tallinn-stuudio-estonia-jooga-meditatsioon-rendi-ruumid-narvamnt7Dkorrus3-raili-maripuuu-raili-yoga-ashtanga-600w.webp" alt="Studio Gallery" class="w-full h-auto object-cover rounded-xl shadow-2xl mb-4 hover:scale-[1.02] transition-transform duration-500 border border-white/10" loading="lazy">
                <img src="assets/studio/17-goyoga-tallinn-stuudio-estonia-jooga-meditatsioon-rendi-ruumid-narvamnt7Dkorrus3-raili-maripuuu-raili-yoga-ashtanga-600w.webp" alt="Studio Gallery" class="w-full h-auto object-cover rounded-xl shadow-2xl mb-4 hover:scale-[1.02] transition-transform duration-500 border border-white/10" loading="lazy">
                <img src="assets/studio/18-goyoga-tallinn-stuudio-estonia-jooga-meditatsioon-rendi-ruumid-narvamnt7Dkorrus3-raili-maripuuu-raili-yoga-ashtanga-600w.webp" alt="Studio Gallery" class="w-full h-auto object-cover rounded-xl shadow-2xl mb-4 hover:scale-[1.02] transition-transform duration-500 border border-white/10" loading="lazy">
                <img src="assets/studio/19-goyoga-tallinn-stuudio-estonia-jooga-meditatsioon-rendi-ruumid-narvamnt7Dkorrus3-raili-maripuuu-raili-yoga-ashtanga-600w.webp" alt="Studio Gallery" class="w-full h-auto object-cover rounded-xl shadow-2xl mb-4 hover:scale-[1.02] transition-transform duration-500 border border-white/10" loading="lazy">
                <img src="assets/studio/20-goyoga-tallinn-stuudio-estonia-jooga-meditatsioon-rendi-ruumid-narvamnt7Dkorrus3-raili-maripuuu-raili-yoga-ashtanga-600w.webp" alt="Studio Gallery" class="w-full h-auto object-cover rounded-xl shadow-2xl mb-4 hover:scale-[1.02] transition-transform duration-500 border border-white/10" loading="lazy">
                <img src="assets/studio/21-goyoga-tallinn-stuudio-estonia-jooga-meditatsioon-rendi-ruumid-narvamnt7Dkorrus3-raili-maripuuu-raili-yoga-ashtanga-600w.webp" alt="Studio Gallery" class="w-full h-auto object-cover rounded-xl shadow-2xl mb-4 hover:scale-[1.02] transition-transform duration-500 border border-white/10" loading="lazy">
                <img src="assets/studio/22-goyoga-tallinn-stuudio-estonia-jooga-meditatsioon-rendi-ruumid-narvamnt7Dkorrus3-raili-maripuuu-raili-yoga-ashtanga-600w.webp" alt="Studio Gallery" class="w-full h-auto object-cover rounded-xl shadow-2xl mb-4 hover:scale-[1.02] transition-transform duration-500 border border-white/10" loading="lazy">
                <img src="assets/studio/23-goyoga-tallinn-stuudio-estonia-jooga-meditatsioon-rendi-ruumid-narvamnt7Dkorrus3-raili-maripuuu-raili-yoga-ashtanga-600w.webp" alt="Studio Gallery" class="w-full h-auto object-cover rounded-xl shadow-2xl mb-4 hover:scale-[1.02] transition-transform duration-500 border border-white/10" loading="lazy">
            </div>
            
            <!-- Global JS to control modal display directly inline -->
            <script>
                function openStudioGalleryModal() {
                    const modal = document.getElementById('studio-gallery-modal');
                    modal.classList.remove('hidden');
                    document.body.style.overflow = 'hidden';
                    setTimeout(() => {
                        modal.classList.remove('opacity-0');
                    }, 10);
                }
                function closeStudioGalleryModal() {
                    const modal = document.getElementById('studio-gallery-modal');
                    modal.classList.add('opacity-0');
                    setTimeout(() => {
                        modal.classList.add('hidden');
                        document.body.style.overflow = '';
                    }, 300);
                }
                // allow hitting Escape
                document.addEventListener('keydown', function(event) {
                    if (event.key === "Escape") {
                        const m = document.getElementById('studio-gallery-modal');
                        if (m && !m.classList.contains('hidden')) {
                            closeStudioGalleryModal();
                        }
                    }
                });
            </script>
        </div>
    </div>
"""

# Insert just before <noscript>
html = html.replace('<noscript>', modal_html + '\n<noscript>')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Modal patched.")
