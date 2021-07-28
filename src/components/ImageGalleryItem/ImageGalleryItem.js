import { Component } from 'react';

import Modal from '../Modal';

export default class ImageGalleryItem extends Component {
  state = {
    largeImg: '',
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  onImageClick = img => {
    this.setState({ largeImg: img });
    this.toggleModal();
  };

  render() {
    const { dataImages } = this.props;

    return (
      <>
        {dataImages &&
          dataImages.map(({ id, webformatURL, tags, largeImageURL }) => (
            <li
              className="ImageGalleryItem"
              key={id}
              id={id}
              onClick={() => this.onImageClick(largeImageURL)}
            >
              <img
                src={webformatURL}
                alt={tags}
                className="ImageGalleryItem-image"
              />
            </li>
          ))}
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={this.state.largeImg} alt="" />
          </Modal>
        )}
      </>
    );
  }
}
