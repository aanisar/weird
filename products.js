let requestURL= "https://aanisar.github.io/weird/products.json";
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function(){

    let allProducts = request.response;
    console.log(allProducts);
    productItems(allProducts);
};

function productItems(jsonObj){

    let productItems = jsonObj.productItems;

    for(let a = 0; a <=  productItems.length; a++){

        let article = document.createElement("article");
        let name = document.createElement("h2");
        let img = document.createElement("img");
        let price = document.createElement('p');
        let availability = document.createElement('p');
        let section = document.querySelector("section");

        img.setAttribute( 'src',"https://aanisar.github.io/weird/Assets/"+ productItems[a].image);
        img.setAttribute( 'alt', productItems[a].image);
        name.textContent = productItems[a].name;
        price.textContent = "Price: " + productItems[a].price;
        availability.textContent = "Availability: " + productItems[a].availability;

        article.appendChild(img);
        article.appendChild(name);
        article.appendChild(price);
        article.appendChild(availability);
        section.appendChild(article);
    }
}

var btn = document.createElement("button");   
btn.innerHTML = "Click me";                 
document.body.appendChild(btn);               

btn.addEventListener(onclick,loadContent('https://aanisar.github.io/weird/',jsonObj,productItems));

function loadContent(url, type, callback){
    let xhr = new XMLHttpRequest(); 
    xhr.open('GET', url);
    xhr.responseType = type;
    xhr.onload = function(){
        callback(xhr.response);
    };
    xhr.send();
}




