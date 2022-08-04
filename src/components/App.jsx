import React, { Component } from 'react';
import api from './api/api';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Modal from './Modal/Modal';
import SerchBar from './Searchbar/SearchBar';
import { Audio } from 'react-loader-spinner';

export class App extends Component {
  state = {
    page: 1,
    query: '',
    totalHits: null,
    data: [],
    status: 'static',
    showModal: false,
    objectModal: {},
    loader: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.setState({ status: 'loading' });
      this.dataRequest();
    }
  }

  async dataRequest() {
    const { page, query } = this.state;
    try {
      const data = await api(query, page);

      this.setState(prevState => ({
        data: [...prevState.data, ...data.hits],
        status: 'static',
        totalHits: data.totalHits,
      }));
    } catch (error) {
      this.setState({ status: 'error', error });
    }
  }
  onSubmit = async query => {
    if (this.state.query === query && this.state.page === 1) return;
    this.setState({ query, data: [], page: 1, totalHits: null });
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  dataModal = (src, alt) => {
    this.setState({ objectModal: { src, alt } });
  };
  btnLoad = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  render() {
    const { data, showModal, objectModal, page, totalHits } = this.state;
    const totalPage = Math.ceil(totalHits / 12);
    return (
      <div className="app">
        <SerchBar onSubmit={this.onSubmit} />
        {data.length > 0 && (
          <ImageGallery>
            <ImageGalleryItem
              data={data}
              onModal={this.dataModal}
              toggleModal={this.toggleModal}
            />
          </ImageGallery>
        )}
        {totalPage > page && <Button onClick={this.btnLoad} />}
        <Audio
          height="80"
          width="80"
          radius="9"
          color="#3f51b5"
          ariaLabel="three-dots-loading"
          wrapperStyle
          wrapperClass
        />
        {showModal && (
          <Modal objectModal={objectModal} toggleModal={this.toggleModal} />
        )}
      </div>
    );
  }
}
