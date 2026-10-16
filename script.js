const menuItems = [
    {
        name: "Cappuccino",
        description: "Rich espresso with steamed milk.",
        price: "₹150"
    },
    {
        name: "Latte",
        description: "Smooth coffee with creamy milk.",
        price: "₹180"
    },
    {
        name: "Espresso",
        description: "Strong and aromatic coffee shot.",
        price: "₹120"
    },
    {
        name: "Chocolate Cake",
        description: "Freshly baked chocolate delight.",
        price: "₹220"
    },
    {
        name: "Veg Sandwich",
        description: "Grilled sandwich with vegetables.",
        price: "₹140"
    },
    {
        name: "Brownie",
        description: "Warm chocolate brownie.",
        price: "₹170"
    }
];

const container = document.getElementById("menu-container");

menuItems.forEach(item => {
    container.innerHTML += `
        <div class="card">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <div class="price">${item.price}</div>
        </div>
    `;
});

function orderMessage(){
    alert("Thank you for visiting Tasty Bites ☕");
}