function RenderItems() {

    let menuContent = document.querySelector('.menu-content');

    menuData.forEach(category => {

        let categoryName = category.title;
        let categoryNote = category.note;

        let itemsHTML = " ";

        category.items.forEach(item => {
            itemsHTML += `
        
                 <div class="dish-card">
                        <div class="dish-card-info">
                            <div class="dish-name">${item.name}</div>
                            <div class="dish-price">${item.price}</div>
                            <div class="dish-desc">${item.desc}</div>
                            <div class="dish-badges"><span class="badge ${item.badge.type}">${item.badge.text}</span></div>
                        </div>
                        <div class="dish-card-img">
                            <img alt="Wagyu"
                                src="${item.img}" />
                            <button class="dish-add-btn"  data-id = "${item.name.toLocaleUpperCase().replace(/ /g, "-")}">+</button>
                        </div>
                    </div>

        `;
        })

        menuContent.innerHTML += `
    <section class="cat-section" id="${category.id}">
                <h2 class="cat-title">${categoryName}</h2>
                <div class="cat-underline"></div>
                <p class="cat-note">${categoryNote}</p>

                <div class="dishes-grid">
                   ${itemsHTML}
                    </div>
                  
                   
            </section>

`;


    })
    menuContent.innerHTML += `
    <a class="back-to-top" href="#starters">↑ Back to top</a>
  `;

    // =========== FOR ADD TO CART
    document.querySelectorAll('.dish-add-btn').forEach(button => {

        button.addEventListener('click', () => {

            let itemId = button.dataset.id;

            let clickedItem = findItem(itemId);

            AddToCart(clickedItem)

        })

    })

    // =========== finding item
    function findItem(itemId) {

        for (let category of menuData) {

            for (let item of category.items) {

                let ItemName = item.name.toLocaleUpperCase().replace(/ /g, "-");

                if (ItemName === itemId) {
                    return item;
                }

            }

        }

    }

 

  

    // ==========================  Extra animating Functions   ==============================

    const sections = document.querySelectorAll('.cat-section');
    const navLinks = document.querySelectorAll('#sidebar-nav a');
    const navbarH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--navbar-height'));

    function onScroll() {
        let current = '';
        sections.forEach(sec => {
            const top = sec.getBoundingClientRect().top;
            if (top <= navbarH + 80) current = sec.id;
        });

        navLinks.forEach(link => {
            link.classList.remove('is-active');
            if (link.dataset.target === current) {
                link.classList.add('is-active');
            }
        });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const target = document.getElementById(link.dataset.target);
            if (!target) return;
            const offset = target.getBoundingClientRect().top + window.scrollY - navbarH - 20;
            window.scrollTo({ top: offset, behavior: 'smooth' });
        });
    });



}

RenderItems();

const sections = document.querySelectorAll('.cat-section');
