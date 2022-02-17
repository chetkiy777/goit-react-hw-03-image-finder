import React from 'react';
import Loader from './Loader/Loader';
import Searchbar from './Searchbar/Searchbar';
import PixabayApi from 'API/pixabayApi';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

  toggleLoader = () => {
    this.setState({ isLoading: !this.state.isLoading });
  };

  showModal = () => {
    this.setState({ modalShow: true });
  };

  hideModal = () => {
    this.setState({ toggleModal: false });
  };

  getImagesFromApi = () => {
    pixabayApi.resetPage();
    this.toggleLoader();
    pixabayApi
      .getImagesFromApi()
      .then(hits => {
        this.setState({ imgArr: [...hits] });
        this.toggleLoader();
      })
      .catch(error => console.log(error));
  };

  loadMore = () => {
    pixabayApi.incrementPage();
    this.toggleLoader();
    pixabayApi.getImagesFromApiByName().then(hits => {
      this.setState({ imgArr: [...this.state.imgArr, ...hits] });
      this.toggleLoader();
    });
  };

  onInputFormSubmit = query => {
    if (query.trim() === '') {
      toast.error('введите значения для поиска');
      return;
    }
    pixabayApi.query = query;
    this.toggleLoader();
    pixabayApi.getImagesFromApiByName().then(hits => {
      this.setState({ imgArr: [...hits] });
      this.toggleLoader();
    });
  };

  render() {
    return (
      <div className={styles.App}>
        <Searchbar onFormSubmit={this.onInputFormSubmit} />
        <ImageGallery imgArr={this.state.imgArr} showModal={this.showModal} />
        {this.state.imgArr.length !== 0 && <Button loadMore={this.loadMore} />}
        {this.state.modalShow === true && (
          <Modal hideModal={this.hideModal} path={this.state.path} />
        )}
        {this.state.isLoading && <Loader />}
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
