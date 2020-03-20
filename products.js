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

let section2 = document.createElement('section');
let button = document.createElement('button');
let body = document.querySelector('body');

button.innerHTML('Click Me');

document.body.appendChild(section2);
section2.appendChild(button);


