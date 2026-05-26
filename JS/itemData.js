const menuData = [
    // category 1 : STARTERS (Total: 7)
    {
        id: "starters",
        title: "Starters",
        note: "Served with house bread and dipping sauce",
        items: [
            {
                name: "Wagyu Beef Tartare",
                price: 120,
                desc: "Hand-cut wagyu, quail egg, capers, dijon mustard, toasted brioche",
                badge: { text: "Chef's Pick", type: "badge-chef" },
                img: "Assets/Images/Menu/Starters/1.Wagyu-Beef.png",
                quantity: 1
            },
            {
                name: "Truffle Cheese Arancini",
                price: 90,
                desc: "Crispy Italian rice balls stuffed with truffle-infused mozzarella and herbs",
                badge: { text: "Vegetarian", type: "badge-veg" },
                img: "Assets/Images/Home/recipe2.png",
                quantity: 1
            },
            {
                name: "Hokkaido Scallops",
                price: 95,
                desc: "Pan-seared scallops, cauliflower purée, crispy pancetta, herb oil",
                badge: { text: "Seasonal", type: "badge-chef" },
                img: "Assets/Images/Menu/Starters/3.Hokkaido-Scallops.png",
                quantity: 1
            },
            {
                name: "Caviar Blinis",
                price: 150,
                desc: "Osetra caviar served on warm mini pancakes with chive crème fraîche",
                badge: { text: "Exclusive", type: "badge-chef" },
                img: "Assets/Images/Menu/Starters/4.Caviar-Blinis.jpg",
                quantity: 1
            },
            // Added Item 5
            {
                name: "Foie Gras Torchon",
                price: 135,
                desc: "Silky artisanal duck liver liver served with fig compote and toasted artisan sourdough",
                badge: { text: "Rare", type: "badge-chef" },
                img: "Assets/Images/Menu/Starters/5.Foie-Gras.jpg",
                quantity: 1
            },
            // Added Item 6
            {
                name: "Bluefin Tuna Carpaccio",
                price: 115,
                desc: "Ultra-thin sliced premium tuna topped with white truffle oil, capers, and sea salt flakes",
                badge: { text: "New", type: "badge-chef" },
                img: "Assets/Images/Menu/Starters/6.Bluefin-Tuna.jpg",
                quantity: 1
            },
            // Added Item 7
            {
                name: "Crispy Zucchini Blossoms",
                price: 80,
                desc: "Delicate squash blossoms stuffed with fresh herbed ricotta cheese and flash-fried",
                badge: { text: "Vegetarian", type: "badge-veg" },
                img: "Assets/Images/Menu/Starters/7.Crispy-Zucchini.jpg",
                quantity: 1
            }
        ]
    },

    // category 2 : SOUPS & SALADS (Total: 6)
    {
        id: "salads",
        title: "Salads & Soups",
        note: "Mix of light greens and rich soups",
        items: [
            {
                name: "Saffron Lobster Bisque",
                price: 110,
                desc: "Velvety lobster broth, cognac cream, poached lobster chunks",
                badge: { text: "Signature", type: "badge-chef" },
                img: "Assets/Images/Menu/Salads/Saffron-Lobster.jpg",
                quantity: 1
            },
            {
                name: "Burrata & Heirloom Salad",
                price: 85,
                desc: "Creamy burrata cheese, seasonal tomatoes, pesto oil, pine nuts",
                badge: { text: "Elite", type: "badge-veg" },
                img: "Assets/Images/Menu/Salads/Burrata-&-Heirloom.jpg",
                quantity: 1
            },
            {
                name: "Wild Mushroom Cream Soup",
                price: 55,
                desc: "Rich forest mushroom blend with a touch of truffle and garlic croutons",
                badge: { text: "Classic", type: "badge-popular" },
                img: "Assets/Images/Menu/Salads/Wild-Mushroom.jpg",
                quantity: 1
            },
            // Added Item 4
            {
                name: "Roasted Gold Beet Salad",
                price: 65,
                desc: "Sweet organic golden beets, artisanal goat cheese mousse, candied walnuts, and citrus glaze",
                badge: { text: "Vegetarian", type: "badge-veg" },
                img: "Assets/Images/Menu/Salads/Roasted-Gold.jpg",
                quantity: 1
            },
            // Added Item 5
            {
                name: "King Crab Consommé",
                price: 95,
                desc: "Crystal-clear clarified seafood broth infused with lemongrass and Alaskan king crab shreds",
                badge: { text: "Premium", type: "badge-chef" },
                img: "Assets/Images/Menu/Salads/King-Crab.jpg",
                quantity: 1
            },
            // Added Item 6
            {
                name: "Black Garlic Caesar",
                price: 70,
                desc: "Crispy baby romaine tossed in a house fermented black garlic dressing with parmesan crisps",
                badge: { text: "Elite", type: "badge-popular" },
                img: "Assets/Images/Menu/Salads/Black-Garlic.jpg",
                quantity: 1
            }
        ]
    },

    // category 3 : MAIN COURSE (Total: 7)
    {
        id: "mains",
        title: "Main Course",
        note: "Premium cuts of meat served with filling sides like Rice and Pasta",
        items: [
            {
                name: "Filet Mignon with Truffle Mash",
                price: 185,
                desc: "Prime beef tenderloin, creamy truffle mashed potatoes, red wine jus",
                badge: { text: "Best Seller", type: "badge-popular" },
                img: "Assets/Images/Menu/main-course/Black-Truffle.jpg",
                quantity: 1
            },
            {
                name: "Pan-Seared Chilean Sea Bass",
                price: 195,
                desc: "Served over a bed of asparagus risotto, lemon-butter reduction, edible gold leaf",
                badge: { text: "New", type: "badge-chef" },
                img: "Assets/Images/Menu/main-course/Pan-Seared.jpg",
                quantity: 1
            },
            {
                name: "Slow-Roasted Lamb & Saffron Rice",
                price: 210,
                desc: "Tender lamb shank served with fragrant saffron-infused basmati rice",
                badge: { text: "Signature", type: "badge-chef" },
                img: "Assets/Images/Menu/main-course/Slow-Roasted.jpg",
                quantity: 1
            },
            {
                name: "Black Truffle Tagliatelle",
                price: 140,
                desc: "Handmade pasta tossed in aged parmigiano-reggiano and freshly shaved European truffles",
                badge: { text: "Vegetarian", type: "badge-veg" },
                img: "Assets/Images/Menu/main-course/Black-Truffle.jpg",
                quantity: 1
            },
            // Added Item 5
            {
                name: "Butter-Poached Brittany Lobster",
                price: 245,
                desc: "Whole European lobster tail slow-poached in organic butter, vanilla parsnip purée",
                badge: { text: "Royal Choice", type: "badge-chef" },
                img: "Assets/Images/Menu/main-course/Butter-Poached.jpg",
                quantity: 1
            },
            // Added Item 6
            {
                name: "Dry-Aged Duck Breast",
                price: 175,
                desc: "Pan-roasted spiced duck breast, sweet cherry reduction, caramelized endive",
                badge: { text: "Trending", type: "badge-popular" },
                img: "Assets/Images/Menu/main-course/Dry-Aged.jpg",
                quantity: 1
            },
            // Added Item 7
            {
                name: "Wild Mushroom Wellington",
                price: 130,
                desc: "Flaky puff pastry stuffed with earthy morels, porcini, chestnut paste, and spinach",
                badge: { text: "Vegetarian", type: "badge-veg" },
                img: "Assets/Images/Menu/main-course/Wild-Mushroom-Wellington.jpg",
                quantity: 1
            }
        ]
    },

    // category 4 : GRILLS & BBQ (Total: 6)
      // category 4 : GRILLS & BBQ (Continued)
    {
        id: "grills",
        title: "Grills & BBQ",
        note: "Flame-grilled perfection with premium seasoned woods",
        items: [
            // Previous items remain here...
            {
                name: "A5 Wagyu Strip Steak",
                price: 290,
                desc: "Authentic Japanese beef grilled over binchotan charcoal, pink Himalayan salt",
                badge: { text: "Rare", type: "badge-chef" },
                img: "Assets/Images/Menu/grills and bar b q/1.A5-Wagyu.jpg",
                quantity: 1
            },
            {
                name: "Smoked Tomahawk Ribeye",
                price: 240,
                desc: "Dry-aged steak smoked with hickory wood, served with bone marrow butter",
                badge: { text: "For Two", type: "badge-popular" },
                img: "Assets/Images/Menu/grills and bar b q/2.Smoked-Tomahawk.jpg",
                quantity: 1
            },
            {
                name: "Glazed Octopus Tentacles",
                price: 165,
                desc: "Charred Mediterranean octopus, sweet smoky glaze, citrus herb salad",
                badge: { text: "Signature", type: "badge-chef" },
                img: "Assets/Images/Menu/grills and bar b q/3.Glazed-Octopus.jpg",
                quantity: 1
            },
            // Added Item 4
            {
                name: "New Zealand Lamb Chops",
                price: 190,
                desc: "Grass-fed lamb chops crusted with fresh mint, garlic, and grilled over open embers",
                badge: { text: "Best Seller", type: "badge-popular" },
                img: "Assets/Images/Menu/grills and bar b q/4.New-Zealand-Lamb.jpg",
                quantity: 1
            },
            // Added Item 5
            {
                name: "Tandoori Tiger Prawns",
                price: 155,
                desc: "Colossal prawns marinated in saffron-infused yogurt spices and roasted in clay oven",
                badge: { text: "Spicy", type: "badge-chef" },
                img: "Assets/Images/Menu/grills and bar b q/5.Tandoori-Tiger.jpg",
quantity: 1
},
            {
                name: "Charcoal Grilled Asparagus & Halloumi",
                price: 95,
                desc: "Thick blocks of Cypriot halloumi cheese and fresh asparagus glazed with herb oil",
                badge: { text: "Vegetarian", type: "badge-veg" },
                img: "Assets/Images/Menu/grills and bar b q/6.Charcoal-Grilled-Asparagus.jpg",
                quantity: 1
            }
        ]
    },

    // category 5 : SIDES
    {
        id: "sides",
        title: "Sides",
        note: "Perfect accompaniments to elevate your main meal",
        items: [
            {
                name: "Parmesan Truffle Fries",
                price: 35,
                desc: "Thick-cut potatoes tossed in truffle oil, grated parmesan, fresh parsley",
                badge: { text: "Classic", type: "badge-popular" },
                img: "Assets/Images/Home/recipe2.png",
                quantity: 1
            },
            {
                name: "Creamed Wild Spinach",
                price: 30,
                desc: "Baby spinach cooked with rich mascarpone cheese and a hint of nutmeg",
                badge: { text: "Vegetarian", type: "badge-veg" },
                img: "Assets/Images/Home/recipe2.png",
                quantity: 1
            },
            {
                name: "Charred Broccolini",
                price: 28,
                desc: "Tender broccolini florets flash-grilled with garlic confit and toasted almonds",
                badge: { text: "Vegetarian", type: "badge-veg" },
                img: "Assets/Images/Home/recipe2.png",
                quantity: 1
            },
            {
                name: "Lobster Mac & Cheese",
                price: 55,
                desc: "Gourmet pasta baked in a five-cheese blend sauce with generous chunks of fresh lobster",
                badge: { text: "Elite", type: "badge-popular" },
                img: "Assets/Images/Home/recipe2.png",
                quantity: 1
            },
            {
                name: "Honey-Glazed Heirloom Carrots",
                price: 25,
                desc: "Baby rainbow carrots roasted with organic honey and fresh thyme sprigs",
                badge: { text: "Vegetarian", type: "badge-veg" },
                img: "Assets/Images/Home/recipe2.png",
                quantity: 1
            }
        ]
    },

    // category 6 : SPECIALS
    {
        id: "specials",
        title: "Specials",
        note: "Exquisite culinary creations available for a limited time",
        items: [
            {
                name: "Gold-Leaf Tomahawk",
                price: 450,
                desc: "Prime 1.2kg steak wrapped entirely in 24-karat edible gold leaf",
                badge: { text: "Royal Choice", type: "badge-chef" },
                img: "Assets/Images/Home/recipe2.png",
                quantity: 1
            },
            {
                name: "The Ocean Platter",
                price: 380,
                desc: "Whole king crab legs, oysters, grilled lobster tail, served with garlic herb butter",
                badge: { text: "Chef's Special", type: "badge-chef" },
                img: "Assets/Images/Home/recipe2.png",
                quantity: 1
            },
            {
                name: "White Truffle Risotto",
                price: 210,
                desc: "Aged Acquerello rice simmered slowly, topped with freshly shaved Alba white truffles",
                badge: { text: "Seasonal Exclusive", type: "badge-chef" },
                img: "Assets/Images/Home/recipe2.png",
                quantity: 1
            },
            {
                name: "Imperial Peking Duck",
                price: 295,
                desc: "Perfectly crisp-skinned duck carved table-side, served with thin pancakes and hoisin",
                badge: { text: "Masterpiece", type: "badge-chef" },
                img: "Assets/Images/Home/recipe2.png",
                quantity: 1
            },
            {
                name: "Saffron Bouillabaisse",
                price: 185,
                desc: "Traditional French fish stew enriched with saffron, prawns, mussels, and cod filet",
                badge: { text: "Limited Edition", type: "badge-popular" },
                img: "Assets/Images/Home/recipe2.png",
                quantity: 1
            }
        ]
    },

    // category 7 : DESSERTS
    {
        id: "desserts",
        title: "Desserts",
        note: "Decadent sweet endings crafted by our pastry chefs",
        items: [
            {
                name: "Deconstructed Tiramisu",
                price: 45,
                desc: "Espresso soak sponge, light mascarpone cream, dark chocolate shards",
                badge: { text: "Elite", type: "badge-popular" },
                img: "Assets/Images/Home/recipe2.png",
                quantity: 1
            },
            {
                name: "Madagascar Vanilla Crème Brûlée",
                price: 40,
                desc: "Rich custard base topped with a texturally contrasting layer of hardened caramelized sugar",
                badge: { text: "Classic", type: "badge-veg" },
                img: "Assets/Images/Home/recipe2.png",
                quantity: 1
            },
            {
                name: "Golden Chocolate Dome",
                price: 60,
                desc: "Valrhona chocolate shell melted table-side with hot salted caramel sauce",
                badge: { text: "Must Try", type: "badge-chef" },
                img: "Assets/Images/Home/recipe2.png",
                quantity: 1
            },
            {
                name: "Matcha Lava Cake",
                price: 38,
                desc: "Warm Uji matcha cake with a molten white chocolate-matcha filling and black sesame ice cream",
                badge: { text: "New", type: "badge-veg" },
                img: "Assets/Images/Home/recipe2.png",
                quantity: 1
            },
            {
                name: "Saffron Pistachio Kulfi Jewel",
                price: 42,
                desc: "Traditional dense ice cream flavored with saffron threads, real pistachios, and gold foil flake",
                badge: { text: "Signature", type: "badge-chef" },
                img: "Assets/Images/Home/recipe2.png",
                quantity: 1
            },
            {
                name: "Caviar Champagne Sorbet",
                price: 55,
                desc: "Crisp Dom Pérignon champagne sorbet balanced with a delicate string of sweet strawberry caviar pearls",
                badge: { text: "Artisanal", type: "badge-chef" },
                img: "Assets/Images/Home/recipe2.png",
                quantity: 1
            }
        ]
    },

    // category 8 : BEVERAGES
    {
        id: "beverages",
        title: "Beverages",
        note: "Fine mocktails, rare teas, and premium artisanal drinks",
        items: [
            {
                name: "Smoked Rosemary Mocktail",
                price: 25,
                desc: "Fresh muddled berries, citrus juice, topped with a smoking sprig of rosemary",
                badge: { text: "Trending", type: "badge-popular" },
                img: "Assets/Images/Home/recipe2.png",
                quantity: 1
            },
            {
                name: "Gold Flake Rose Latte",
                price: 20,
                desc: "Artisanal espresso infused with organic rose water and topped with edible gold",
                badge: { text: "Signature", type: "badge-chef" },
                img: "Assets/Images/Home/recipe2.png",
                quantity: 1
            },
            {
                name: "Sparkling Elderflower Infusion",
                price: 22,
                desc: "Light, floral elderflower cordial mixed with sparkling premium spring water",
                badge: { text: "Refreshing", type: "badge-veg" },
                img: "Assets/Images/Home/recipe2.png",
                quantity: 1
            },
            {
                name: "Yuzu Mint Cooler",
                price: 18,
                desc: "Exotic Japanese yuzu juice shaken with fresh crushed mint and wild honey ginger syrup",
                badge: { text: "Seasonal", type: "badge-popular" },
                img: "Assets/Images/Home/recipe2.png",
                quantity: 1
            },
            {
                name: "Blue Butterfly Pea Flower Tea",
                price: 24,
                desc: "Vibrant blue organic floral tea that shifts color beautifully to violet with a squeeze of fresh lemon juice",
                badge: { text: "Exclusive", type: "badge-chef" },
                img: "Assets/Images/Home/recipe2.png",
                quantity: 1
            },
            {
                name: "Activated Charcoal Elixir",
                price: 26,
                desc: "Detoxifying food-grade charcoal blended smoothly with pressed cold lavender and fresh lemonade",
                badge: { text: "Healthy", type: "badge-veg" },
                img: "Assets/Images/Home/recipe2.png",
                quantity: 1
            }
        ]
    }
];