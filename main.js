let productList = document.querySelector('.products-list');
let productFormSearch = document.querySelector('.product-form--search');
let fromSearchInput = document.querySelector('.from-search--input');
let minPriceInput = document.querySelector('.min-price');
let maxPriceInput = document.querySelector('.max-price');
let productFormPrice = document.querySelector('.product-form--price');


/* Event */

/* Kiritilgan so'zlar orqali filter qilib beradi */
productFormSearch.addEventListener('submit', (e) => {
    e.preventDefault();

    let filterProducts = products.filter((item) => {
        return item.title.includes(fromSearchInput.value);
    })

    fromSearchInput.value = '';

    mainProduct(filterProducts);
})

/* Min Max Price - Narxlar orqali filter qilib beradi */
productFormPrice.addEventListener('submit', ((e) => {
    e.preventDefault();
    let filterProducts = products.filter((item) => {
        return minPriceInput.value < item.price && maxPriceInput.value > item.price;
    })
    
    minPriceInput.value = '';
    maxPriceInput.value = '';

    mainProduct(filterProducts);
}))




/* ProductListga <li> itemlarini yasab va joylab beradi. mainProduct() funksiya parametr 
kutadi, kelsa shu array orqali filter qiladi va htmlga joylaydi. Kelmasa Products arrayni ni oladi*/ 
function mainProduct(tempList = products){
    productList.innerHTML = '';

    tempList.forEach((item) => {
        productList.innerHTML += `
        <li class="product-item">
            <img class="product-item--img" src="${item.image}" width="300" height="300" alt="">
            <h2 class="product-item--title">${item.title}</h2>
            <p class="product-item--desc">${item.description}</p>
            <button class="btn">Sotib olish</button>
        </li>
        `
    })
}
mainProduct();

function getOption(el) {
    let filterProducts = products.filter((item) => {
        return el.value == 'all' ? item : item.category == el.value;
    })

    mainProduct(filterProducts);
}












































// let getProducts = () => {
//     products.forEach((item) => {
//         let mainProducts = document.querySelector('.products-main');

//         let card = document.createElement('div');
//         let img = document.createElement('img');
//         let content = document.createElement('div');
//         let title = document.createElement('h1');
//         let desc = document.createElement('p');
//         let btn = document.createElement('button');

//         img.src = item.image;
//         img.alt = item.title;
//         title.textContent = item.title;
//         if(item.description.length > 150) {
//             desc.textContent = item.description.slice(0, 150) + '...';
//         }
//         else {
//             desc.textContent = item.description;
//         }
//         btn.textContent = 'Sotib olish'

//         card.classList.add('card');
//         img.classList.add('img');
//         title.classList.add('title');
//         desc.classList.add('desc');
//         btn.classList.add('btn');
    
    
    
    
//         mainProducts.appendChild(card);
//         card.appendChild(img);
//         card.appendChild(content);
//         content.appendChild(title);
//         content.appendChild(desc);
//         content.appendChild(btn)
//     })
// }

// getProducts();

