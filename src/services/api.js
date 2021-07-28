function handleApi(searchImages, perPage) {
  const baseURL = 'https://pixabay.com/api/';
  const keyApi = '21844309-0bdc8d8d935c894ec75615f09';
  return fetch(
    `${baseURL}?q=${searchImages}&page=1&key=${keyApi}&image_type=photo&orientation=horizontal&per_page=${perPage}`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Нет значения ${searchImages}`));
  });
}

const api = {
  handleApi,
};

export default api;
