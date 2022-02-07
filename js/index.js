


(() => {
  const $fragment = document.createDocumentFragment()


  async function getFirstFour(){
    try {
        const $axiosAsync = document.getElementById('firstFourProductContainer')
    
        let resProductApi = await axios.get(
            'https://saleprueba.herokuapp.com/api/products/firstFour',
          )
        // let resProductApi = await axios.get(
        //   'http://localhost:8080/api/products/firstFour',
        // )
        let resultProducts = await resProductApi;
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
  
  getFirstFour()
})()


