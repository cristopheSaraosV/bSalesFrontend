const btnClear = document.getElementById('buttonClear');

function EventListeners() {
    btnClear.addEventListener('click',clearShoppingCart );
}

function clearShoppingCart(e){
    localStorage.clear();
    containerTable.innerHTML = ''
}

EventListeners();

(() => {
    
    const $containerTable = document.getElementById('containerTable')
  async function getShoppingCart() {
    try {
      const listProduct = JSON.parse(localStorage.getItem('productList')) || []
      if (listProduct.length > 0) {
        for (let product of listProduct) {
          const $TrProduct = document.createElement('tr')
          $TrProduct.innerHTML = `
                    <th scope="row">${product.id}</th>
                    <td>${product.name}</td>
                    <td>$ ${product.price}</td>
                `
          $containerTable.appendChild($TrProduct)
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  getShoppingCart()
})()



