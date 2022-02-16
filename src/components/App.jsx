import React from 'react';
import Loader from './Loader/Loader';
import Searchbar from './Searchbar/Searchbar';
import PixabayApi from 'API/pixabayApi';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import styles from './styles.module.css';
const pixabayApi = new PixabayApi();

export class App extends React.Component {
  state = {
    imgArr: [],
    searchInput: '',
    isLoading: false,
  };

  getImagesFromApi = () => {
    pixabayApi.resetPage();

    pixabayApi
      .getImagesFromApi()
      .then(hits => {
        this.setState({ imgArr: [...hits] });
      })
      .catch(error => console.log(error));
  };

  loadMore = () => {
    pixabayApi.incrementPage();
    pixabayApi.getImagesFromApiByName().then(hits => {
      this.setState({ imgArr: [...this.state.imgArr, ...hits] });
    });
  };

  onInputFormSubmit = query => {
    pixabayApi.query = query;
    pixabayApi.getImagesFromApiByName().then(hits => {
      this.setState({ imgArr: [...hits] });
    });
  };

  render() {
    return (
      <div className={styles.App}>
        <Searchbar onFormSubmit={this.onInputFormSubmit} />
        {this.state.isLoading && <Loader />}
        <ImageGallery imgArr={this.state.imgArr} />
        {this.state.imgArr.length !== 0 && <Button loadMore={this.loadMore} />}
      </div>
    );
  }
}
