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
    currentPage: 1,
    images: [],
    error: null,
    status: Status.IDLE,
  };

  componentDidMount() {
    this.setState({
      currentPage: 1,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { searchImages } = this.props;
    const { currentPage } = this.state;
    const prevName = prevProps.searchImages;
    const prevPage = prevState.currentPage;
    const nextPage = currentPage;

    if (prevName !== searchImages) {
      this.setState({
        currentPage: 1,
        images: [],
      });
    }

    if (
      (prevName !== searchImages && currentPage === 1) ||
      prevPage !== nextPage
    ) {
      this.setState({ status: Status.PENDING });

      api
        .handleApi(searchImages, currentPage)
        .then(response => {
          this.setState(prev => ({
            images: [...prev.images, ...response.hits],
            status: Status.RESOLVED,
          }));
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
    this.setState({ currentPage: this.state.currentPage + 1 });
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
            {images.map(image => (
              <ImageGalleryItem
                key={image.webformatURL}
                littleImage={image.webformatURL}
                largeImage={image.largeImageURL}
                id={image.id}
                tags={image.tags}
              />
            ))}
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
