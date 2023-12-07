//Footer

document.querySelector('#currentYear').textContent =
    new Date().getUTCFullYear()




// products
let results = document.getElementById('display')


let products = JSON.parse(localStorage.getItem('products')) ?
    JSON.parse(localStorage.getItem('products')) :
    localStorage.setItem('products', JSON.stringify(
        [{
                id: 0,
                brand: 'Jorden',
                name: 'Air Jorden 4',
                img: 'https://i.postimg.cc/vHbB7rY1/air-jordan-4-white-metallic-red-CT8527-112-official-images-4.webp',
                price: 5000,
                quantity: 1
            },
            {
                id: 1,
                brand: 'Jorden',
                name: 'Air Jorden 4',
                img: 'https://i.postimg.cc/HxbYXxF4/2989-grande.webp',
                price: 5000,
                quantity: 1

            },
            {
                id: 2,
                brand: 'Jorden',
                name: 'Air Jorden 3',
                img: 'https://i.postimg.cc/W4BpdrY1/air-jordan-5-retro-gs-blue-sue-1698291902-858ded41.png',
                price: 4000,
                quantity: 1

            },
            {
                id: 3,
                brand: 'Jorden',
                name: 'Jorden 3',
                img: 'https://i.postimg.cc/Wb845dz5/D6812400.webp',
                price: 3000,
                quantity: 1

            },
            {
                id: 4,
                brand: 'Jorden',
                name: 'Jorden 5',
                img: 'https://i.postimg.cc/prqtJnC8/FD1643-300-sivasdescalzo-Jordan-WMNS-AIR-JORDAN-6-RETRO-GTX-1700576272-1.webp',
                price: 3000,
                quantity: 1

            },
        ]
    ))

function to_DisplayBrand_Products() {
    results.innerHTML = '';
    if(products){
    products.forEach(product => {
        results.innerHTML +=
            `<div id="bottom" class="card mx-2 my-2" style="width: 12.5rem; height: 22rem ">
        <img src="${product.img}" class="card-img-top img-fluid" style="width:12rem; height:10rem" alt="">
        <div class="card-body">
          <h5 class="card-title">${product.brand}</h5>
          <p class="card-text">${product.price}</p>
          <p class="card-text">${product.name}</p>
          <a id="addToCart" class="btn btn-primary">Add to cart</a>
        </div>
      </div>`;
    });
}else{
    results.innerHTML = `
    <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
    `
}
    document.getElementById('#Checkout')

    // let checkoutPage = JSON.parse( localStorage.setItem('checkout')) ?
    // JSON.parse( localStorage.getItem('checkout')) :
    // localStorage.getItem( 'checkout', JSON.stringify(
    //     to_DisplayBrand_Products()
    // ))
}
to_DisplayBrand_Products()

let brandStockWrapper = document.querySelector('[data-brands]')

// to search the items by its name
let brandSearch = document.querySelector('#b_search');
brandSearch.addEventListener('keyup', () => {
    try {
        let searchResults = products.filter(Brand => {
            return Brand.name.toLowerCase().includes(brandSearch.value.toLowerCase());
        });
        if (searchResults.length > 0) {
            results.innerHTML = ""
            searchResults.forEach((item, i) => {
                results.innerHTML +=
                    `<div class="card mx-3 my-3" style="width: 10rem; height: 25rem ">
            <img src="${item.img}" class="card-img-top img-fluid" style="width:12rem; height:10rem" alt="${item.name}">
            <div class="card-body">
              <h5 class="card-title">${item.brand}</h5>
              <p class="card-text">${item.price}</p>
              <p class="card-text">${item.name}</p>
              <a class="btn btn-primary" id="addToCart">Add to cart</a>
            </div>
          </div>`
            })

            // to_DisplayBrand_Products(result);
        } else {
            results.innerHTML = 'Item is not found.';
        }
    } catch (e) {
        results.innerHTML = 'Search by the name.';
    }

});


// to sort the products by brand name

let sortingBrandByBrandName = document.querySelector('#sortingBrandByBrandName');
sortingBrandByBrandName.addEventListener('click', sortBrandName)

function sortBrandName() {
    sortedBrand = products.sort((item1, item2) => item1.name.localeCompare(item2.name))
    to_DisplayBrand_Products()
}


//spinner



let checkoutPage = []
localStorage.setItem(('checkout'), JSON.stringify(checkoutPage))

let adds = [...document.querySelectorAll("#addToCart")]
console.log(adds)

adds.forEach((e, i) => {
    e.addEventListener("click", () => {
            let prod = products.find(e => e.id === i)
            let dupe = checkoutPage.find(e => e.id === i)
            if(dupe){
                dupe.quantity++
                alert("Added to quantity")
            } else{
                checkoutPage.push({...prod, quantity: 1})
                alert("Added to cart")
            }

        localStorage.setItem("cart", JSON.stringify(checkoutPage))
    })
})