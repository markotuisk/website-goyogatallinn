import re

path = "shop.html"
with open(path, 'r', encoding='utf-8') as f:
    html = f.read()

new_main = """    <main class="flex-grow pt-24 pb-20">
        <!-- Shop Hero -->
        <section class="relative h-[35vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-stone-900 text-stone-100 mb-16">
            <div class="absolute inset-0 opacity-30">
                <img src="https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?q=80&w=2070&auto=format&fit=crop" alt="Boutique Shop" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-gradient-to-t from-stone-900 to-transparent"></div>
            </div>
            <div class="container-custom relative z-10 text-center animate-fade-in-slow">
                <i data-lucide="shopping-bag" class="h-10 w-10 mx-auto mb-6 text-pink-400"></i>
                <h1 class="text-4xl md:text-5xl font-serif font-medium mb-4" data-i18n="shop.title">Goyoga Boutique</h1>
                <p class="max-w-xl mx-auto text-lg text-stone-300" data-i18n="shop.subtitle">Premium wellness products and digital gift cards to elevate your practice.</p>
            </div>
        </section>

        <!-- Dynamic Shop Container -->
        <section class="container-custom">
            <!-- Categories Nav (Visual Only for now) -->
            <div class="flex flex-wrap justify-center gap-4 mb-12">
                <button class="px-6 py-2 rounded-full border border-pink-500 bg-pink-50 text-pink-700 text-sm font-medium transition-colors hover:bg-pink-100 uppercase tracking-widest">
                    Gift Cards
                </button>
                <button class="px-6 py-2 rounded-full border border-gray-200 text-gray-500 text-sm font-medium transition-colors hover:bg-gray-50 uppercase tracking-widest cursor-not-allowed hidden" disabled>
                    Apparel (Coming Soon)
                </button>
                <button class="px-6 py-2 rounded-full border border-gray-200 text-gray-500 text-sm font-medium transition-colors hover:bg-gray-50 uppercase tracking-widest cursor-not-allowed hidden" disabled>
                    Equipment (Coming Soon)
                </button>
            </div>

            <div id="shop-container" class="space-y-20">
                <!-- Javascript will inject categories and grids here -->
            </div>
        </section>
    </main>

    <!-- Unified Script -->
    <script src="js/script.js?v=8"></script>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            renderShop();
            document.addEventListener('languageChanged', renderShop);
            if (window.lucide) window.lucide.createIcons();
        });

        function renderShop() {
            const lang = window.currentLanguage || 'en';
            if (!window.shopData) return;
            const shopLangData = window.shopData[lang] || window.shopData['en'];
            const container = document.getElementById('shop-container');
            if(!container) return;
            
            container.innerHTML = '';
            
            for (const [categoryKey, categoryData] of Object.entries(shopLangData)) {
                const section = document.createElement('div');
                section.className = 'shop-category-section';
                
                // Header
                const header = document.createElement('div');
                header.className = 'text-center mb-10';
                header.innerHTML = `
                    <h2 class="text-3xl font-serif font-medium text-gray-800 mb-4">${categoryData.title}</h2>
                    <p class="text-gray-500 max-w-2xl mx-auto">${categoryData.description}</p>
                `;
                section.appendChild(header);
                
                // Grid
                const grid = document.createElement('div');
                grid.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8';
                
                categoryData.options.forEach((opt, idx) => {
                    const card = document.createElement('div');
                    card.className = 'bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group border border-gray-100 hover:-translate-y-1';
                    
                    card.innerHTML = `
                        <div class="relative w-full pt-[65%] overflow-hidden bg-stone-50">
                            <img src="${opt.image}" alt="${opt.name}" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy">
                        </div>
                        <div class="p-6 flex flex-col flex-grow">
                            <div class="flex justify-between items-start mb-2">
                                <h3 class="font-bold text-gray-800 text-lg leading-tight pr-4">${opt.name}</h3>
                                <div class="text-pink-600 font-bold bg-pink-50 px-2 py-1 rounded-md text-sm whitespace-nowrap">${opt.price}</div>
                            </div>
                            <p class="text-gray-500 text-sm mb-6 flex-grow leading-relaxed">${opt.desc}</p>
                            
                            <button class="w-full mt-auto inline-flex justify-center items-center gap-2 bg-gray-900 text-white px-4 py-3 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-gray-800 transition-colors shadow-md active:scale-95 js-shop-buy-btn" data-cat="${categoryKey}" data-idx="${idx}">
                                <i data-lucide="shopping-cart" class="h-4 w-4"></i>
                                Buy Now
                            </button>
                        </div>
                    `;
                    grid.appendChild(card);
                });
                
                section.appendChild(grid);
                container.appendChild(section);
            }
            
            if (window.lucide) window.lucide.createIcons();
            
            // Re-attach buy button listeners to trigger the checkout modal
            document.querySelectorAll('.js-shop-buy-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const cat = btn.dataset.cat;
                    const idx = btn.dataset.idx;
                    const dataObj = shopLangData[cat];
                    const optObj = dataObj.options[idx];
                    
                    if (window.renderInvoiceSummary && window.toggleModal) {
                        window.renderInvoiceSummary(optObj, dataObj, 'shop_' + cat);
                        window.toggleModal('pricing-modal', true);
                    } else if (optObj.link && optObj.link !== '#') {
                        window.open(optObj.link, '_blank');
                    }
                });
            });
        }
    </script>
</body>"""

# Replace everything from <main class="..."> to </body>
pattern = re.compile(r'<main.*?</main>.*?(?:<!-- Unified Script -->|<script src="js/script.js).*?</body>', re.DOTALL)
new_html = pattern.sub(new_main, html)

with open(path, 'w', encoding='utf-8') as f:
    f.write(new_html)
print("Updated shop.html")
