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

  // componentDidMount() {
  //   this.getImagesFromApi();
  // }

  getImagesFromApi = () => {
    if (!this.state.imgArr) {
      return;
    }

    pixabayApi.query = this.state.searchInput.value;
    pixabayApi
      .getImagesFromApiByName()
      .then(hits => {
        this.setState({ imgArr: [...this.state.imgArr, ...hits] });
      })
      .catch(error => console.log(error));
  };

  loadMore = () => {
    pixabayApi.incrementPage();
    this.getImagesFromApi();
  };

  onInputFormSubmit = value => {
    this.setState({ searchInput: value });
    this.getImagesFromApi();
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
