//Footer

document.querySelector('#currentYear').textContent =
new Date().getUTCFullYear()


// checkout

let checkoutPage = JSON.parse(localStorage.getItem('checkout'))
console.log(checkout)


let displaydProducts = document.querySelector('#display-products')

function to_DisplayCheckout_Products() {
  displaydProducts.innerHTML = '';
  if(checkout){
  checkout.forEach(product => {
      displaydProducts.innerHTML +=
          `<tr>
          <th scope="col">Brand</th>
          <td>Price${product.brand}</td>
          <td>Name${product.price}</td>
          <td>Quantity${product.name}</td>
        </tr>`;
  });
}else{
  displaydProducts.innerHTML = `
  <div class="spinner-border" role="status">
<span class="visually-hidden">Loading...</span>
</div>
  `
}
  document.getElementById('#Checkout')
}
to_DisplayCheckout_Products()







