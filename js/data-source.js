class DataSource {
  static async getData() {
    return fetch('https://goquotes-api.herokuapp.com/api/v1/random?count=20')
      .then(res => res.json())
      .then(resJson => {
        if (resJson.quotes.length) {
          return Promise.resolve(resJson.quotes);
        } else {
          return Promise.reject(err);
        }
      });
  }
}

export default DataSource;
