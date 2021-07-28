import { Component } from 'react';

import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';

import './styles.css';

class App extends Component {
  state = {
    searchName: '',
  };

  handleFormSubmit = searchName => {
    this.setState({ searchName });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery searchImages={this.state.searchName} />
      </div>
    );
  }
}

export default App;
