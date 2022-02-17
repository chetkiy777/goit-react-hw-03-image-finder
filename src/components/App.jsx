import React from 'react';
import Loader from './Loader/Loader';
import Searchbar from './Searchbar/Searchbar';
import PixabayApi from 'API/pixabayApi';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import styles from './styles.module.css';
const pixabayApi = new PixabayApi();

export class App extends React.Component {
  state = {
    imgArr: [],
    searchInput: '',
    isLoading: false,
    modalShow: false,
    largePath: '',
  };

  showModal = () => {
    this.setState({ modalShow: true });
  };

  hideModal = () => {
    this.setState({ toggleModal: false });
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
        <ImageGallery imgArr={this.state.imgArr} showModal={this.showModal} />
        {this.state.imgArr.length !== 0 && <Button loadMore={this.loadMore} />}
        {this.state.modalShow === true && (
          <Modal hideModal={this.hideModal} path={this.state.path} />
        )}
      </div>
    );
  }
}
