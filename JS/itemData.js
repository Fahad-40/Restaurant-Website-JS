const menuData = [

    // category1 : starter
    {
        id: "starters",
        title: "Starters",
        note: "Served with house bread and dipping sauce",

        // Items of STARTER category
        items: [
            // item 1
            {
                name: "Wagyu Beef Tartare",
                price: "£120",
                desc: "Hand-cut wagyu, quail egg, capers, dijon mustard, toasted brioche",
                badge:
                {
                    text: "Chef's Pick", type: "badge-chef"
                },
                img: "Assets/Images/Menu/menu-recipe1.png",
                 quantity: 1
            },

            // item 2
            {
                name: "Truffle Cheese Arancini",
                price: "£90",
                desc: "Crispy Italian rice balls stuffed with truffle-infused mozzarella and herbs",
                badge: {
                    text: "Vegetarian", type: "badge-veg"
                },
                img: "Assets/Images/Home/recipe2.png",
                 quantity: 1
            },

            // item 3

            {
                name: "Hokkaido Scallops",
                price: "£95",
                desc: "Pan-seared scallops, cauliflower purée, crispy pancetta, herb oil",
                badge: {
                    text: "Seasonal", type: "badge-chef"
                },
                img: "Assets/Images/Home/recipe2.png",
                 quantity: 1
            }

        ]

    },

    // category 2 : Soups and Salads

    {
        id: "salads",
        title: "Salads",
        note: "Mix of light greens and rich soups",

        items: [

            // item 1

            {
                name: "Saffron Lobster Bisque",
                price: "£110",
                desc: "Velvety lobster broth, cognac cream, poached lobster chunks",
                badge: {
                    text: "Signature", type: "badge-chef"
                },
                img: "Assets/Images/Home/recipe2.png",
                 quantity: 1
            },

            // item 2

            {
                name: "Burrata & Heirloom Salad",
                price: "£85",
                desc: "Creamy burrata cheese, seasonal tomatoes, pesto oil, pine nuts",
                badge: {
                    text: "Elite", type: "badge-veg"
                },
                img: "Assets/Images/Home/recipe2.png",
                 quantity: 1
            },

            //item 3
            {
                name: "Wild Mushroom Cream Soup",
                price: "£55",
                desc: "Rich forest mushroom blend with a touch of truffle and garlic croutons",
                badge: { text: "Classic", type: "badge-popular" },
                img: "Assets/Images/Home/recipe2.png",
                 quantity: 1
            }


        ]

    },

    // category 3 : Main Course

    {
        id: "mains",
        title: "Main Course",
        note: "Premium cuts of meat served with filling sides like Rice and Pasta",


        items: [

            // item 1
            {
                name: "Filet Mignon with Truffle Mash",
                price: "£185",
                desc: "Prime beef tenderloin, creamy truffle mashed potatoes, red wine jus",
                badge: {
                    text: "Best Seller", type: "badge-popular"
                },
                img: "Assets/Images/Home/recipe2.png",
                 quantity: 1
            },

            // item 2
            {
                name: "Filet Mignon with Truffle Mash",
                price: "£185",
                desc: "Prime beef tenderloin, creamy truffle mashed potatoes, red wine jus",
                badge: {
                    text: "Best Seller", type: "badge-popular"
                },
                img: "Assets/Images/Home/recipe2.png",
                 quantity: 1
            },

            // item 3
            {
                name: "Slow-Roasted Lamb & Saffron Rice",
                price: "£210",
                desc: "Tender lamb shank served with fragrant saffron-infused basmati rice",
                badge: { text: "Signature", type: "badge-chef" },
                img: "Assets/Images/Home/recipe2.png",
                 quantity: 1
            }


        ],

    }


]