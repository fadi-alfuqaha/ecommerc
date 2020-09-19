const navBarLeftSide = ["P&C", "Men", "Women", "Goods", "Journal"];
const navBarRightSide = ["fas fa-search", "fas fa-user-alt", "fas fa-heart", "fal fa-shopping-cart"];
const features = [
    {
        icon: "fas fa-truck",
        title: "15% Off First Order",
        info: "Subscribe to our mailing list for 15% off your first order.",
    },
    {
        icon: "fas fa-truck",
        title: "15% Off First Order",
        info: "Subscribe to our mailing list for 15% off your first order.",
    },
    {
        icon: "fas fa-truck",
        title: "15% Off First Order",
        info: "Subscribe to our mailing list for 15% off your first order.",
    }];

const category = [
    {
        src: "https://cdn.shopify.com/s/files/1/0235/2617/files/hpdelph_2000x2000_crop_center.jpg?v=1598627644",
        category:"Men",
    },
    {
        src: "https://cdn.shopify.com/s/files/1/0235/2617/files/womenshp_2000x2000_crop_center.jpg?v=1598629966",
        category:"Women",
    }];

const uniform = [{
    src: "https://cdn.shopify.com/s/files/1/0235/2617/files/goodsautumn_2000x2000_crop_center.jpg?v=1598628218",
    category: "Goods",
    },
    {
    src: "https://cdn.shopify.com/s/files/1/0235/2617/files/journalautumn_2000x2000_crop_center.jpg?v=1598628291",
    category: "Journal",
    }];    
const products = [
    {
        src: "https://cdn.shopify.com/s/files/1/0235/2617/products/badlucksucker-overalls-web-9_300x.jpg?v=1599574663",
        title: "women",
        description: "Bad Luck Sucker Overalls",
        price: 115
        
        
    },
    {
        src: "https://cdn.shopify.com/s/files/1/0235/2617/products/Untitled-2_0043_2D9A1870.jpg?v=1598965981",
        title: "Man",
        description: "Service Fatigue Pant",
        price:75
        
        
    },{
        src: "https://cdn.shopify.com/s/files/1/0235/2617/products/Untitled-2_0045_2D9A1828.jpg?v=1598531610",
        title: "Man",
        description: "Freedom Goods Slub T-Shirt",
        price:120
        
        
    },{
        src: "https://cdn.shopify.com/s/files/1/0235/2617/products/Untitled-2_0069_2D9A1428.jpg?v=1598530991",
        title: "Man",
        description: "Free Wheelin' Slub T-Shirt",
        price:90
        
        
    },
    {
        src: "https://cdn.shopify.com/s/files/1/0235/2617/products/Riley_Spring_20-1008.jpg?v=1592919651",
        title: "women",
        description: "Bad Luck Sucker Ringer T-Shirt",
        price: 60
        
        
    },
    {
        src: "https://cdn.shopify.com/s/files/1/0235/2617/products/RileyEcomm6.jpg?v=1599061058",
        title: "women",
        description: "Service Fatigue Pants",
        price:55
        
        
    },{
        src: "https://cdn.shopify.com/s/files/1/0235/2617/products/BROGAN.jpg?v=1596466331",
        title: "women",
        description: "Lights Out Acid Wash Cut-Off",
        price:130
        
        
    },{
        src: "https://cdn.shopify.com/s/files/1/0235/2617/products/Untitled-2_0035_2D9A0258.jpg?v=1598636325",
        title: "women",
        description: "Both Barrels T-Shirt",
        price:70
        
        
        }
];




const divWithNode = function (text ,index) {
    div = document.createElement("div");
    textNode = document.createTextNode(text);
    div.appendChild(textNode);
    if (index === 0) {
        div.setAttribute("class","title");
    }
    return div;
}

const divWithIcon = function (text) {
    div = document.createElement("div");
    icon = document.createElement("i");
    icon.setAttribute("class",text);
    div.appendChild(icon);
    return div;
}

const feature = function (featureObj) {
    div = document.createElement("div");
    icon = document.createElement("i");
    icon.setAttribute("class", featureObj.icon);
    div.appendChild(icon);
    div.appendChild(h6(featureObj.title));
    div.appendChild(p(featureObj.info));
    return div;

}
const prepareCategoryDev = function (categoryObj) {
    div = document.createElement("div");
    pic = document.createElement("img");
    pic.setAttribute("src", categoryObj.src);
    div.appendChild(pic);
    div.appendChild(h3(categoryObj.category));
    return div;
}

const prepareUniformDiv = function (uniformObj) {
    div = document.createElement("div");
    pic = document.createElement("img");
    pic.setAttribute("src", uniformObj.src);
    div.appendChild(pic);
    div.appendChild(h3(uniformObj.category));
    return div;
}



const img = function (src, alt) {
    productImage = document.createElement("img");
    productImage.setAttribute("src", src);
    productImage.setAttribute("alt", alt);
    return productImage;
};
const h2 = function (text) {
    head = document.createElement("h2");
    textNode = document.createTextNode(text);
    head.appendChild(textNode);
    return head;
};

const h6 = function (text) {
    head = document.createElement("h6");
    textNode = document.createTextNode(text);
    head.appendChild(textNode);
    return head;
};
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

const p = function (text) {
    paragraph = document.createElement("p");
    textNode = document.createTextNode(text);
    paragraph .appendChild(textNode);
    return paragraph ;
};

const devProduct = function (prodObj,index) {
    productItem = document.createElement("div");
    productItem.appendChild(img(prodObj.src, "Product"));
    productItem.appendChild(h6(prodObj.title));
    productItem.appendChild(h2(prodObj.description));
    productItem.appendChild(h6(prodObj.price));
    productItem.appendChild(button((index)));
    return productItem;
};

const button = function (index) {
    productButton = document.createElement("button");
    textNode = document.createTextNode("Add to Card");
    productButton.appendChild(textNode);
    productButton.setAttribute("id", index);
    return productButton;
};


//navBar
navbar = document.querySelector(".navbar");
leftSideNavBar = document.createElement("div");
navbar.appendChild(leftSideNavBar);
navBarLeftSide.forEach((element,index) => {
    leftSideNavBar.appendChild(divWithNode(element,index));
});

rightSideNavBar = document.createElement("div");
navbar.appendChild(rightSideNavBar);
navBarRightSide.forEach(element => {
    rightSideNavBar.appendChild(divWithIcon(element));
});


//features
featuresDev = document.querySelector(".features");
features.forEach(element => {
    featuresDev.appendChild(feature(element));
});


//category

categoryDiv = document.querySelector(".category");
category.forEach(element => {
    categoryDiv.appendChild(prepareCategoryDev(element));
});


//products 
categoryElement = document.querySelector(".category");
productsDiv = document.createElement("div");
productsDiv.setAttribute("class", "products");
categoryElement.parentNode.insertBefore(productsDiv, categoryElement.nextSibling);
products.forEach((element,index) => {
    productsDiv.appendChild(devProduct(element,index));
});


//uniform

uniformDiv = document.querySelector(".uniform");
uniform.forEach(element => {
    uniformDiv.appendChild(prepareUniformDiv(element));
});


const clickAddToAction = function (id) {
    selectedItem = products[id];
    cart.push(selectedItem);
    
}
addToCartButtons = document.querySelectorAll(".products button");
addToCartButtons.forEach(element => {
    element.addEventListener("click", clickAddToAction(this.id))
});




