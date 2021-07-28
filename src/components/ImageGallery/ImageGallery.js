import { Component } from 'react';

import ImageGalleryItem from '../ImageGalleryItem';
import Button from '../Button';
import api from '../../services/api';
import ImageErrorView from '../ImageErrorView';

import Loader from 'react-loader-spinner';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default class ImageGallery extends Component {
  state = {
    perPage: 12,
    images: null,
    error: null,
    status: Status.IDLE,
  };

  componentDidMount() {
    this.setState({ perPage: 12 });
  }

  componentDidUpdate(prevProps, prevState) {
    const { searchImages } = this.props;
    const { perPage } = this.state;
    const prevName = prevProps.searchImages;
    const prevPage = prevState.perPage;
    const nextPage = perPage;

    if (prevName !== searchImages) {
      this.setState({ perPage: 12 });
    }

    if (
      (prevName !== searchImages && perPage === 12) ||
      prevPage !== nextPage
    ) {
      this.setState({ status: Status.PENDING });

      api
        .handleApi(searchImages, perPage)
        .then(res => {
          this.setState({ images: res.hits, status: Status.RESOLVED });
        })
        .catch(error =>
          this.setState({ error: error, status: Status.REJECTED }),
        );
    }

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  onIncrementPage = () => {
    this.setState({ perPage: this.state.perPage + 12 });
  };

  render() {
    const { images, status, error } = this.state;

    if (status === 'idle') {
      return (
        <div className="startMessage">Введите что-то в поисковой строке</div>
      );
    }

    if (status === 'pending') {
      return (
        <div className="wrapperLoader">
          <Loader
            type="ThreeDots"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        </div>
      );
    }

    if (status === 'resolved') {
      return (
        <>
          <ul className="ImageGallery">
            <ImageGalleryItem
              dataImages={images}
              onClick={this.handleOpenModal}
            />
          </ul>
          {images.length > 0 && <Button onClick={this.onIncrementPage} />}
        </>
      );
    }

    if (status === 'rejected') {
      <ImageErrorView message={error.message} />;
    }
  }
}
