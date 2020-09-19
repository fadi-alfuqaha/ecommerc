const cart = [
    {
        src: "https://cdn.shopify.com/s/files/1/0235/2617/products/badlucksucker-overalls-web-9_300x.jpg?v=1599574663",
        title: "women",
        description: "Bad Luck Sucker Overalls",
        price: 115
        
        
    }
];

let numberOfItems = 0;
let totalprice = 0;

const h3 = function (text) {
    head = document.createElement("h3");
    textNode = document.createTextNode(text);
    head.appendChild(textNode);
    return head;
}; 

const h1 = function (text) {
    head = document.createElement("h1");
    textNode = document.createTextNode(text);
    head.appendChild(textNode);
    return head;
}; 

const prepareCartDev = function (cart) {
    if (document.URL.includes("cart.html")) {
        div = document.querySelector(".items");
        itemDiv = document.createElement("div");
        itemDiv.setAttribute("class", "item");
        div.appendChild(itemDiv);
        firstDiv = document.createElement("div");
        img = document.createElement("img");
        img.setAttribute("src", cart.src);
        firstDiv.appendChild(img);
        itemDiv.appendChild(firstDiv);
        secondDiv = document.createElement("div");
        secondDiv.appendChild(h1(cart.title));
        secondDiv.appendChild(h3(cart.description));
        secondDiv.appendChild(h1(cart.price));
        itemDiv.appendChild(secondDiv);
    
    }
 

    
};
const NumberOfCarts = function () {
    if (document.URL.includes("cart.html")) {
        numOfCarts = document.querySelector(".numOfItems");
        textNode = document.createTextNode(numberOfItems + " items in your cart");
        numOfCarts.appendChild(textNode);
    }
   
}

const total = function () {
    if (document.URL.includes("cart.html")) {
    totalvalue = document.querySelector(".total");
    textNode = document.createTextNode("Total Price is "+totalprice + "$");
    totalvalue.appendChild(textNode);
    }
    
}






NumberOfCarts();
total();

cart.forEach(element => {
    prepareCartDev(element);
});
