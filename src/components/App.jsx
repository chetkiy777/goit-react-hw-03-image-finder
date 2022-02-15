import React from 'react';
import Loader from './Loader/Loader';
import PixabayApi from 'API/pixabayApi';
const pixabayApi = new PixabayApi();

export class App extends React.Component {
  componentDidMount(prevState, prevProps) {
    pixabayApi.getImagesFromApiByName().then(console.log);
  }

  render() {
    return (
      <div>
        <Loader />
      </div>
    );
  }
}
