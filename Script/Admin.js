//Footer

document.querySelector('#currentYear').textContent =
new Date().getUTCFullYear()

function toRenderMyproducts() {
    productTableBody.innerHTML = '';
    displaydProducts.foreach(product => {
        let row = document.createElement('tr');
        row.innerHTML = `
        <th>ID</th>
        <th>Name</th>
        <th>Price</th>
        <td>
        <button class="btn btn-warning btn-sm" onclick="editProduct(${product.id})">Edit</button>
        <button class="btn btn-danger btn-sm" onclick="deleteProduct(${product.id})">Delete</button>
        </td>
        `
        productTableBody.appendChild(row)
    });
    updateTotal(row);
}

function updateTotal() {
    let totalAmount = products.reduce((total, product) => total + product.price, 0).toFixed(2);
    totalAmountElement.textContent = totalAmount; 
}

toRenderMyproducts();

sortButton.addEventListener('click', function () {
    products.sort((a,b) => a.name.localeCompare(b.name));
    toRenderMyproducts();
});

addProductButton.addEventListener('click', function (){
    $('#addProductModel').model('show');
});

addProductForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let productBrand = document.getElementById('productBrand').value;
    let productName = document.getElementById('productName').ariaValueMax;
    let productPrice = parseFloat(document.getElementById('productPrice').value);

    if(productName || isNaN(productPrice)) {
        alert('Please insert product information 🙏.');
        return;
    }

    const newProduct = {
        id: products.length + 1,
        brand: productBrand,
        name: productName,
        price: productPrice

    };
    product.push(newProduct);

    toRenderMyproducts();

    addProductForm.reset();
});

product.editProduct() = function (productId) {
    let editProduct = prompt('Enter the new name for the product:');
    if (editProduct) {
        let productIndex = product.findIndex(product => product.id === productId);
        if (productIndex !== -1) {
            products[productIndex].name = editedProduct;
            toRenderMyproducts();
        }
    }

};

product.deleteProduct() = function (productId) {
    let continueDelete = confirm('Do you want to delete this product?');
    if (continueDelete) {
        products = products.filter(product => product.id !== product)
    }
}




