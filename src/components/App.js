import { Component } from "react";
import * as API from '../API/ApiQuery';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from "./Loader/Loader";
import { Modal } from "./Modal/Modal";
import { Button } from './Button/Button';
import { AppStyled } from './App.styled';

export class App extends Component {
  state = {
    isLoading: false,
    page: 1,
    data: [],
    total: 0,
    pages: 0,
    query: '',
    showModal: false,
    imgData: {},
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    const { query: prevQuery, page: prevPage } = prevState;

    if (query !== prevQuery || (page !== prevPage && page !== 1)) {
      API.params.page = query !== prevQuery ? 1 : page;
      API.params.q = query;
      try {
        this.setState({ isLoading: true });
        const data = await API.getData(API.params);
        const { total, hits } = data;

        const isRequiredHits = hits.map(
          ({ id, largeImageURL, webformatURL, tags }) => ({
            id,
            largeImageURL,
            webformatURL,
            tags,
          })
        );

        if (query !== prevQuery) {
          this.setState({
            data: [...isRequiredHits],
            page: API.params.page,
            total: total,
            pages: Math.ceil(total / API.params.per_page),
            isLoading: false,
          });
        } else {
          this.setState(prevState => ({
            data: [...prevState.data, ...isRequiredHits],
            page: API.params.page,
            isLoading: false,
          }));
        }
      } catch (error) {       
        console.log(error);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  setQuery = value => {
    this.setState({ query: value });
  };

  toggleModal = imgData => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      imgData,
    }));
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { data, isLoading, page, pages, showModal, imgData } = this.state;
    return (
      <AppStyled>
        <Searchbar onSubmit={this.setQuery} />
        {data.length > 0 && (
          <ImageGallery data={data} toggleLargeSize={this.toggleModal} />
        )}
        {isLoading && <Loader />}
        {data.length > 0 && page < pages && (
          <Button type="button" onClick={this.handleLoadMore}>
            Load more
          </Button>
        )}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img alt={imgData.alt} src={imgData.url} />
          </Modal>
        )}
      </AppStyled>
    );
  }
};
