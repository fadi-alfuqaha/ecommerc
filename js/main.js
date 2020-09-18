const product = [{
    src: "https://cdn.shopify.com/s/files/1/0235/2617/products/badlucksucker-overalls-web-9_300x.jpg?v=1599574663",
    title: "women",
    description: "Bad Luck Sucker Overalls",
    price: 115.00
    
    
},
{
    src: "https://cdn.shopify.com/s/files/1/0235/2617/products/badlucksucker-overalls-web-9_300x.jpg?v=1599574663",
    title: "women",
    description: "Bad Luck Sucker Overalls",
    price:115.00
    
    
},{
    src: "https://cdn.shopify.com/s/files/1/0235/2617/products/badlucksucker-overalls-web-9_300x.jpg?v=1599574663",
    title: "women",
    description: "Bad Luck Sucker Overalls",
    price:115.00
    
    
},{
    src: "https://cdn.shopify.com/s/files/1/0235/2617/products/badlucksucker-overalls-web-9_300x.jpg?v=1599574663",
    title: "women",
    description: "Bad Luck Sucker Overalls",
    price:115.00
    
    
    }];
const prepareProductsDev = function () {
    categoryElement = document.querySelector(".category");  
    products = document.createElement("div");
    products.setAttribute("class", "products");
    products.style.width = "100%";
    products.style.height = "200px";
    products.style.backgroundColor ="red";
    products.innerText = "hi";
    categoryElement.parentNode.insertBefore(products, categoryElement.nextSibling);
}    

// location.reload();
prepareProductsDev();
// document.body.insertBefore(products, category[0]); 



