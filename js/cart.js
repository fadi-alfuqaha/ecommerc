const cart = [];


let numberOfItems = 0;
let totalprice = 0;

const navBarLeftSidecart = ["P&C", "Men", "Women", "Goods", "Journal"];
const navBarRightSidecart = ["fas fa-search", "fas fa-user-alt", "fas fa-heart", "fal fa-shopping-cart"];

const divWithNodecart = function (text ,index) {
    div = document.createElement("div");
    textNode = document.createTextNode(text);
    div.appendChild(textNode);
    if (index === 0) {
        div.setAttribute("class","title");
    }
    return div;
}

const divWithIconcart = function (text) {
    div = document.createElement("div");
    icon = document.createElement("i");
    icon.setAttribute("class",text);
    div.appendChild(icon);
    return div;
}
if (document.URL.includes("cart.html")) {
    navbar = document.querySelector(".navbar");
    leftSideNavBarcart = document.createElement("div");
    navbar.appendChild(leftSideNavBarcart);
    navBarLeftSidecart.forEach((element, index) => {
    leftSideNavBarcart.appendChild(divWithNodecart(element, index));
    });

    rightSideNavBarcart = document.createElement("div");
    navbar.appendChild(rightSideNavBarcart);
    navBarRightSidecart.forEach(element => {
    rightSideNavBarcart.appendChild(divWithIconcart(element));
    });
}


const head3 = function (text) {
    if (document.URL.includes("cart.html")) {
        head = document.createElement("h3");
        textNode = document.createTextNode(text);
        head.appendChild(textNode);
        return head;
    }
  
}; 

const head1 = function (text) {
    if (document.URL.includes("cart.html")) {
        head = document.createElement("h1");
        textNode = document.createTextNode(text);
        head.appendChild(textNode);
        return head;
    }
   
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
        secondDiv.appendChild(head1(cart.title));
        secondDiv.appendChild(head3(cart.description));
        secondDiv.appendChild(head1(cart.price));
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
if (document.URL.includes("cart.html")) {
    JSON.parse(localStorage.getItem("newCartItems")).forEach(element => {
        prepareCartDev(element);
    });
    
    deleteLocalStorge = document.querySelector(".delete");
    deleteLocalStorge.addEventListener("click", function () {
        localStorage.clear();
        location.reload();
    })
}

