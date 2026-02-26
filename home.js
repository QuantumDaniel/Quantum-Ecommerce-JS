let products = [
    {
        image: "images/laptop casing.jpg ",
        name: "Laptop Casing",
        rating: "★★★★☆ ",
        ratingNumbers: "4.2",
        price: "79.99 "
    },

    {
        image: "images/laptop3.jpg ",
        name: "Laptop",
        rating: "★★★★★☆ ",
        ratingNumbers: "5.2",
        price: "79.99 "
    },

    {
        image: "images/mouse.jpg ",
        name: "Mouse",
        rating: "★★★☆ ",
        ratingNumbers: " 3.2",
        price: "79.99 "
    },

    {
        image: "images/latptop1.webp ",
        name: "Laptop Casing",
        rating: "★★★★☆ ",
        ratingNumbers: " 4.2",
        price: "79.99 "
    },
    {
        image: "images/laptop casing.jpg ",
        name: "Laptop",
        rating: "★★★☆ ",
        ratingNumbers: "3.2",
        price: "79.99 "
    },

    {
        image: "images/laptop3.jpg ",
        name: "Laptop Casing",
        rating: "★★★★☆ ",
        ratingNumbers: "4.2",
        price: "79.99 "
    },

    {
        image: "images/mouse.jpg ",
        name: "Laptop Casing",
        rating: "★★★★☆ ",
        ratingNumbers: " 4.2",
        price: "79.99 "
    },

    {
        image: "images/latptop1.webp ",
        name: "Laptop Casing",
        rating: "★★★★☆ ",
        ratingNumbers: " 4.2",
        price: "79.99 "
    }
];

let items = '';
products.forEach((products) => {
    items += `
    <div class="items">
                <img src="${products.image}" alt = "product-image">
                <div class="item-name"> ${products.name}</div>
                <div class="rating">${products.rating}  (${products.ratingNumbers})</small></div>
                <div class="price">$${products.price} </div >
        <div class="cart-button-container-main"><button class="cart-button">Add to Cart</button></div>
            </div >



        `;


});

document.querySelector('.container-main').innerHTML = items;