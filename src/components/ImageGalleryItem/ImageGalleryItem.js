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
    const { littleImage, largeImage, id, tags } = this.props;

    return (
      <>
        <li
          className="ImageGalleryItem"
          key={id}
          id={id}
          onClick={() => this.onImageClick(largeImage)}
        >
          <img
            src={littleImage}
            alt={tags}
            className="ImageGalleryItem-image"
          />
        </li>

        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={this.state.largeImg} alt="" />
          </Modal>
        )}
      </>
    );
  }
}
