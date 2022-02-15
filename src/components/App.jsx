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

  componentDidMount(prevState, prevProps) {
    pixabayApi.query = this.searchInput;

    pixabayApi.getImagesFromApiByName().then(imgArr => {
      if (this.state.imgArr !== prevState.imgArr) {
        this.setState({ imgArr });
      }
    });
  }

  render() {
    return (
      <div>
        <Searchbar />
        <ImageGallery imgArr={this.state.imgArr} />
      </div>
    );
  }
}
