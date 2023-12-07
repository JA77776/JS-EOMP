//Footer

document.querySelector('#currentYear').textContent =
new Date().getUTCFullYear()


// checkout

let checkout = JSON.parse(localStorage.getItem('cart'))
console.log(checkout)


let displaydProducts = document.querySelector('display-products')

function toDisplayMyProducts() {
    displaydProducts.innerHTML = '';
    disp.foreach( item => {
        results.innerHTML +=
        `<tr>
        <th scope="col"></th>
        <td>${item.name}</td>
        <td><input id="input" placeholder="number" type="number" ></td>
        <td>${item.price}</td>
      </tr>`
    } )
}