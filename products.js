function loadContent(url, type, callback){
    let xhr = new XMLHttpRequest(); 
    xhr.open('GET', url);
    xhr.responseType = type;
    xhr.onload = function(){
        callback(xhr.response);
    };
    xhr.send();
}

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

loadContent('https://aanisar.github.io/weird/products.json', 'json', productItems); 

