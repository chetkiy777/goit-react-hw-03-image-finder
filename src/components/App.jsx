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
    showModal: false,
    largeImage: '',
  };

  toggleLoader = () => {
    this.setState({ isLoading: !this.state.isLoading });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  setLargeUrl = url => {
    this.setState({ largeImage: url });
    this.toggleModal();
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
    pixabayApi.resetPage();
    this.toggleLoader();
    pixabayApi.getImagesFromApiByName().then(hits => {
      this.setState({ imgArr: [...hits] });
      this.toggleLoader();
    });
  };

  render() {
    const { showModal, isLoading } = this.state;
    return (
      <div className={styles.App}>
        <Searchbar onFormSubmit={this.onInputFormSubmit} />
        <ImageGallery
          imgArr={this.state.imgArr}
          setLargeUrl={this.setLargeUrl}
        />
        {this.state.imgArr.length !== 0 && <Button loadMore={this.loadMore} />}
        {isLoading && <Loader />}
        <ToastContainer autoClose={3000} />
        {showModal && (
          <Modal
            onClose={this.toggleModal}
            largeImage={this.state.largeImage}
          />
        )}
      </div>
    );
  }
}
