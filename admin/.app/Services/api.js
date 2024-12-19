class API {
  fetchData() {
    const promise = axios({
      url: "https://67563d2e11ce847c992c3910.mockapi.io/api/Products",
      method: "GET",
    });
    return promise;
  }
  deleteDataById(id) {
    const promise = axios({
      url: `https://67563d2e11ce847c992c3910.mockapi.io/api/Products/${id}`,
      method: "DELETE",
    });
    return promise;
  }
  addData(product) {
    const promise = axios({
      url: `https://67563d2e11ce847c992c3910.mockapi.io/api/Products`,
      method: "POST",
      data: product,
    });
    return promise;
  }
  getDataById(id) {
    const promise = axios({
      url: `https://676199c546efb37323725008.mockapi.io/Api/Products/${id}`,
      method: "GET",
    });
    return promise;
  }
  updateData(product) {
    const promise = axios({
      url: `https://676199c546efb37323725008.mockapi.io/Api/Products/${product.id}`,
      method: "PUT", // Dùng PUT hoặc PATCH để cập nhật
      data: product,
    });
    return promise;
  }
}
export default new API();
