
// button Search
const $btnSearch = document.getElementById('buttonSearch');
const inputSearch = document.getElementById('inputSearch');
// button Clear
const $btnClear = document.getElementById('buttonClear');
// button Category
const inputCategory = document.getElementById('inputCategory');
const $btnCategory = document.getElementById('buttonCategory');
//  First four product
const firstFourProductContainer = document.getElementById('firstFourProductContainer');


(() => {
  const $fragment = document.createDocumentFragment()

  async function getProduct() {
    try {
      const $axiosAsync = document.getElementById('axios')
      let resProductApi = await axios.get(
        'https://saleprueba.herokuapp.com/api/products/all',
      )
    //   let resProductApi = await axios.get(
    //     'http://localhost:8080/api/products/all',
    //   )
      let resultProducts = await resProductApi
      resultProducts.data.products.forEach((product) => {

        // Productos con descuentos
          if(product.discount > 0){
            const $card = document.createElement('div')
            $card.setAttribute('class', 'col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3 mb-4');
            $card.innerHTML = `
            <div class="card animate__animated animate__fadeIn mt-3 h-100">
                <img
                src="${product.url_image || 'https://www.pulsorunner.com/wp-content/uploads/2014/10/default-img.gif'}"
                class="card-img-top"
                  draggable="false"
                  alt="..."
                />
                <div class="card-body">
              
                  <h6 class="text-primary badge bg-dark text-light">${product.Category.toUpperCase()}</h6>
                  <h4 class="text-dark">
                    <strong>${product.name}</strong>
                  </h4>
                  <h1>
                    <small
                      class="text-primary discount badge bg-primary text-light"
                    >
                      ${product.discount}%
                    </small>
                    $ ${( (100 - product.discount)/100 ) * product.price}
                  </h1>
                  <h4 class="discountPrice">$ ${product.price}</h4>
                </div>
                <div class="card-footer text-muted">
                  <button class="btn btn-primary mx-1">
                    ADD
                    <i class="fas fa-cart-plus mx-2"></i>
                  </button>
                </div>
              </div>
            `
            $fragment.appendChild($card)
        }else{
            // Productos sin descuentos
            const $card = document.createElement('div')
            $card.setAttribute('class', 'col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3 mb-4');
            $card.innerHTML = `
            <div class="card animate__animated animate__fadeIn mt-3 h-100">
            <img
            src="${product.url_image || 'https://www.pulsorunner.com/wp-content/uploads/2014/10/default-img.gif'}"
            class="card-img-top"
              draggable="false"
              alt="..."
            />
            <div class="card-body">
            <h6 class="text-primary badge bg-dark text-light">${product.Category.toUpperCase()}</h6>
            <h4>
                <strong>${product.name}</strong>
              </h4>
              <h1 class="text-dark">$ ${product.price}</h1>
            </div>
            <div class="card-footer text-muted">
              <button class="btn btn-primary mx-1">
                ADD
                <i class="fas fa-cart-plus mx-2"></i>
              </button>
            </div>
          </div>
    
                 
                    `
            $fragment.appendChild($card)
        }
       
      })
      $axiosAsync.appendChild($fragment)
    } catch (error) {
        
    Swal.fire(
    'Ups! hubo un error',
    error.message,
    'error'
  )
      console.log(error)
    }
  }

  async function getCategories(){
    try {
        let resCategoryApi = await axios.get(
            'https://saleprueba.herokuapp.com/api/categories/all',
          )
        // let resCategoryApi = await axios.get(
        //   'http://localhost:8080/api/categories/all',
        // )
        let resultCategory= await resCategoryApi;
        resultCategory.data.category.forEach((category) => {
            const option = document.createElement('option');
            option.value =   category.id;
            option.text =   category.name;
            inputCategory.appendChild(option);
        })
      } catch (error) {
          
      Swal.fire(
      'Ups! hubo un error',
      error.message,
      'error'
    )
        console.log(error)
      }
  }

 
  
  getProduct();
  getCategories();
})()


// EventListener
EventListeners();

function EventListeners() {
    $btnSearch.addEventListener('click',searchProduct );
    $btnCategory.addEventListener('click',searchCategory );
}



async function searchProduct(e){
    e.preventDefault();
    const $axiosAsync = document.getElementById('axios')
    $axiosAsync.innerHTML = ''
    const $fragment = document.createDocumentFragment()
    const productSearch = inputSearch.value;
    try {
        let resProductApi = await axios.get(
            `https://saleprueba.herokuapp.com/api/products/search?product=${productSearch}`,
          )
        // let resProductApi = await axios.get(
        //   `http://localhost:8080/api/products/search?product=${productSearch}`,
        // )
        let resultProducts = await resProductApi
        resultProducts.data.products.forEach((product) => {
            if(product.discount > 0){
                const $card = document.createElement('div')
                $card.setAttribute('class', 'col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3 mb-4');
                $card.innerHTML = `
                <div class="card animate__animated animate__fadeIn mt-3 h-100">
                    <img
                    src="${product.url_image || 'https://www.pulsorunner.com/wp-content/uploads/2014/10/default-img.gif'}"
                    class="card-img-top"
                      draggable="false"
                      alt="..."
                    />
                    <div class="card-body">
                  
                      <h6 class="text-primary badge bg-dark text-light">${product.Category.toUpperCase()}</h6>
                      <h4 class="text-dark">
                        <strong>${product.name}</strong>
                      </h4>
                      <h1>
                        <small
                          class="text-primary discount badge bg-primary text-light"
                        >
                          ${product.discount}%
                        </small>
                        $ ${( (100 - product.discount)/100 ) * product.price}
                      </h1>
                      <h4 class="discountPrice">$ ${product.price}</h4>
                    </div>
                    <div class="card-footer text-muted">
                      <button class="btn btn-primary mx-1">
                        ADD
                        <i class="fas fa-cart-plus mx-2"></i>
                      </button>
                    </div>
                  </div>
                `
                $fragment.appendChild($card)
            }else{
                // Productos sin descuentos
                const $card = document.createElement('div')
                $card.setAttribute('class', 'col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3 mb-4');
                $card.innerHTML = `
                <div class="card animate__animated animate__fadeIn mt-3 h-100">
                <img
                src="${product.url_image || 'https://www.pulsorunner.com/wp-content/uploads/2014/10/default-img.gif'}"
                class="card-img-top"
                  draggable="false"
                  alt="..."
                />
                <div class="card-body">
                <h6 class="text-primary badge bg-dark text-light">${product.Category.toUpperCase()}</h6>
                <h4>
                    <strong>${product.name}</strong>
                  </h4>
                  <h1 class="text-dark">$ ${product.price}</h1>
                </div>
                <div class="card-footer text-muted">
                  <button class="btn btn-primary mx-1">
                    ADD
                    <i class="fas fa-cart-plus mx-2"></i>
                  </button>
                </div>
              </div>
        
                     
                        `
                $fragment.appendChild($card)
            }
        })
        $axiosAsync.appendChild($fragment)
      } catch (error) {
        Swal.fire(
            'Ups! hubo un error',
            'Intente revisar el nombre del productos e intente nuevamente',
            'error'
          )
        console.log({'Error':error.message})
      }
}


async function searchCategory(e){
    
    e.preventDefault();
    const $axiosAsync = document.getElementById('axios')
    $axiosAsync.innerHTML = ''
    const $fragment = document.createDocumentFragment()
    const categoriesSearch = inputCategory.value;
    try {
        let resProductApi = await axios.get(
            `https://saleprueba.herokuapp.com/api/products/searchCategories?category=${categoriesSearch}`,
          )
        // let resProductApi = await axios.get(
        //   `http://localhost:8080/api/products/searchCategories?category=${categoriesSearch}`,
        // )
        let resultProducts = await resProductApi
        resultProducts.data.products.forEach((product) => {
            if(product.discount > 0){
                const $card = document.createElement('div')
                $card.setAttribute('class', 'col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3 mb-4');
                $card.innerHTML = `
                <div class="card animate__animated animate__fadeIn mt-3 h-100">
                    <img
                    src="${product.url_image || 'https://www.pulsorunner.com/wp-content/uploads/2014/10/default-img.gif'}"
                    class="card-img-top"
                      draggable="false"
                      alt="..."
                    />
                    <div class="card-body">
                  
                      <h6 class="text-primary badge bg-dark text-light">${product.Category.toUpperCase()}</h6>
                      <h4 class="text-dark">
                        <strong>${product.name}</strong>
                      </h4>
                      <h1>
                        <small
                          class="text-primary discount badge bg-primary text-light"
                        >
                          ${product.discount}%
                        </small>
                        $ ${( (100 - product.discount)/100 ) * product.price}
                      </h1>
                      <h4 class="discountPrice">$ ${product.price}</h4>
                    </div>
                    <div class="card-footer text-muted">
                      <button class="btn btn-primary mx-1">
                        ADD
                        <i class="fas fa-cart-plus mx-2"></i>
                      </button>
                    </div>
                  </div>
                `
                $fragment.appendChild($card)
            }else{
                // Productos sin descuentos
                const $card = document.createElement('div')
                $card.setAttribute('class', 'col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3 mb-4');
                $card.innerHTML = `
                <div class="card animate__animated animate__fadeIn mt-3 h-100">
                <img
                src="${product.url_image || 'https://www.pulsorunner.com/wp-content/uploads/2014/10/default-img.gif'}"
                class="card-img-top"
                  draggable="false"
                  alt="..."
                />
                <div class="card-body">
                <h6 class="text-primary badge bg-dark text-light">${product.Category.toUpperCase()}</h6>
                <h4>
                    <strong>${product.name}</strong>
                  </h4>
                  <h1 class="text-dark">$ ${product.price}</h1>
                </div>
                <div class="card-footer text-muted">
                  <button class="btn btn-primary mx-1">
                    ADD
                    <i class="fas fa-cart-plus mx-2"></i>
                  </button>
                </div>
              </div>
        
                     
                        `
                $fragment.appendChild($card)
            }
        })
        $axiosAsync.appendChild($fragment)
      } catch (error) {
        Swal.fire(
            'Ups! hubo un error',
            'Intente revisar el nombre del productos e intente nuevamente',
            'error'
          )
        console.log({'Error':error.message})
      }

}