const getEleId = (id) => document.getElementById(id);
const renderListProduct = (data) => {
  let content = "";

  data.forEach((product) => {
    const { imageUrl, name, desc, price } = product;
    content += `
      <div class="col-12 col-md-6 col-lg-4">
          <div class="card cardPhone">
              <img src="./img/${imageUrl}" class="card-img-top" alt="..." />
              <div class="card-body">
              <div class="d-flex justify-content-between">
                  <div>
                  <h3 class="cardPhone__title">${name}</h3>
                  <p class="cardPhone__text">${desc}</p>
                  </div>
                  <div>
                  <h3 class="cardPhone__title">$${price}</h3>
                  </div>
              </div>
              <div class="d-flex justify-content-between">
                  <div class="cardPhone__rating">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  </div>
                  <div>
                  <button class="btnPhone-shadow">
                      <i class="fa fa-shopping-cart"></i> Buy Now
                  </button>
                  </div>
              </div>
              </div>
          </div>
      </div>
  
  `;
  });

  // show products to UI
  getEleId("mainProduct").innerHTML = content;
};

const fetchListProduct = () => {
  const promise = axios({
    url: "https://676199c546efb37323725008.mockapi.io/Api/Products",
    method: "GET",
  });

  promise
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};
fetchListProduct();
