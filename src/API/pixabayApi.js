import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
});

export default class PixabayApi {
  _apiKey = '24684226-fad981b2aba9a8597288ef8d8';

  constructor() {
    this.page = 1;
    this.searchQuery = '';
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  async getImagesFromApiByName() {
    return await instance
      .get(
        `?q=${this.searchQuery}&page=${this.page}&key=${this._apiKey}&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then(response => response.data.hits);
  }
}
