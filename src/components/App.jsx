import React from 'react';
import Loader from './Loader/Loader';
import Searchbar from './Searchbar/Searchbar';
import PixabayApi from 'API/pixabayApi';
import ImageGallery from './ImageGallery/ImageGallery';
const pixabayApi = new PixabayApi();

export class App extends React.Component {
  state = {
    imgArr: [],
    searchInput: '',
  };

  // componentDidMount() {
  //   this.getImagesFromApi().then(console.log);
  // }

  getImagesFromApi = () => {
    pixabayApi.query = this.state.searchInput;

    pixabayApi
      .getImagesFromApiByName()
      .then(hits => {
        this.setState({ imgArr: hits });
      })
      .catch(error => console.log(error));
  };

  onInputFormSubmit = query => {
    this.setState({ searchInput: query });
  };

  componentDidUpdate() {
    this.getImagesFromApi();
  }

  render() {
    return (
      <div>
        <Searchbar
          searchInput={this.state.searchInput}
          onFormSubmit={this.onInputFormSubmit}
          onInputChange={this.onInputFormChange}
        />
      </div>
    );
  }
}
