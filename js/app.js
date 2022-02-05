
// Elementos
const btnSearch = document.getElementById('buttonSearch');
const btnClear = document.getElementById('buttonClear');
const inputSearch = document.getElementById('inputSearch');


(() => {
  const $axiosAsync = document.getElementById('axiosAsync')
  const $fragment = document.createDocumentFragment()

  async function getData() {
    try {
      const $axiosAsync = document.getElementById('axios')
      let resProductApi = await axios.get(
        'http://localhost:8000/api/v1/products/allSimulation',
      )
      let resultProducts = await resProductApi
      resultProducts.data.products.forEach((product) => {
        const $card = document.createElement('div')
        $card.setAttribute('class', 'col-sm-12 col-md-6 col-lg-4 col-xl-3')

        $card.innerHTML = `
                <div class="card animate__animated animate__fadeIn mt-3">
            <img
              src="${product.url_image}"
              class="card-img-top"
              alt="..."
            />
            <h5 class="card-header">${product.name}</h5>
            <div class="card-body">
              <dl class="row">
                <dt class="col-sm-3 col-md-4">Price</dt>
                <dd class="col-sm-9 col-md-8">:$ ${product.price}</dd>
              
                <dt class="col-sm-3 col-md-4">Discount</dt>
                <dd class="col-sm-9 col-md-8">: ${product.discount}</dd>

                <dt class="col-sm-3 col-md-4">Category</dt>
                <dd class="col-sm-9 col-md-8">: ${product.Category.toUpperCase()}</dd>
              
               
              </dl>

            </div>
            <div class="card-footer text-muted">
                <button class="btn btn-dark mx-1"><i class="fas fa-cart-plus mx-2"></i></button>
                
            </div>
          </div>
                `
        $fragment.appendChild($card)
      })
      $axiosAsync.appendChild($fragment)
    } catch (error) {
      console.log(error)
    }
  }

  getData()
})()


// EventListener
EventListeners();

function EventListeners() {
    btnSearch.addEventListener('click',searchProduct );
    // btnClear.addEventListener('click',getData );
}


// Functions

async function searchProduct(){
    const $axiosAsync = document.getElementById('axios')
    $axiosAsync.innerHTML = ''
    const $fragment = document.createDocumentFragment()
    const productSearch = inputSearch.value;
    try {
        let resProductApi = await axios.get(
          `http://localhost:8000/api/v1/products/allSimulation?productSearch=${productSearch}`,
        )
        let resultProducts = await resProductApi
        resultProducts.data.products.forEach((product) => {
          const $card = document.createElement('div')
          $card.setAttribute('class', 'col-sm-12 col-md-6 col-lg-4 col-xl-3')
  
          $card.innerHTML = `
                  <div class="card animate__animated animate__fadeIn mt-3">
              <img
                src="${product.url_image}"
                class="card-img-top"
                alt="..."
              />
              <h5 class="card-header">${product.name}</h5>
              <div class="card-body">
                <dl class="row">
                  <dt class="col-sm-3 col-md-4">Price</dt>
                  <dd class="col-sm-9 col-md-8">:$ ${product.price}</dd>
                
                  <dt class="col-sm-3 col-md-4">Discount</dt>
                  <dd class="col-sm-9 col-md-8">: ${product.discount}</dd>
  
                  <dt class="col-sm-3 col-md-4">Category</dt>
                  <dd class="col-sm-9 col-md-8">: ${product.Category.toUpperCase()}</dd>
                
                 
                </dl>
  
              </div>
              <div class="card-footer text-muted">
                  <button class="btn btn-dark mx-1"><i class="fas fa-cart-plus mx-2"></i></button>
                  
              </div>
            </div>
                  `
          $fragment.appendChild($card)
        })
        $axiosAsync.appendChild($fragment)
      } catch (error) {
        console.log(error)
      }
}