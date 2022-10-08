import { Component } from "react";
import * as API from '../API/ApiQuery';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    isLoading: false,
    page: 1,
    data: [],
    total: 0,
    pages: 0,
    error: '',
    query: '',
    showLargePic: false,
    picData: {},
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

        const properStructHits = hits.map(
          ({ id, largeImageURL, webformatURL, tags }) => ({
            id,
            largeImageURL,
            webformatURL,
            tags,
          })
        );

        if (query !== prevQuery) {
          this.setState({
            data: [...properStructHits],
            page: API.params.page,
            total: total,
            pages: Math.ceil(total / API.params.per_page),
            isLoading: false,
          });
        } else {
          this.setState(p => ({
            data: [...p.data, ...properStructHits],
            page: API.params.page,
            isLoading: false,
          }));
        }
      } catch (error) {
        this.setState({ error: true, isLoading: false });
        console.log(error);
      }
    }
  }

  setQuery = value => {
    this.setState({ query: value });
  };

  toggleLargeSize = picData => {
    this.setState(({ showLargePic }) => ({
      showLargePic: !showLargePic,
      picData,
    }));
  };


  render() {
    const { data } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.setQuery} />
        {data.length > 0 && (
          <ImageGallery data={data} toggleLargeSize={this.toggleLargeSize}/>
        )}
        React homework template
      </div>
    );
  }
};
