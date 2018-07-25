import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import assignedClass from '../Styles/index.css';

const API_KEY = "AIzaSyAeQGvR313aVBjEpFCiQMdjtZHpPF4p-sc";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.searchVideo = this.searchVideo.bind(this);

    this.searchVideo("react js");
  }
  
  searchVideo(term) {
    YTSearch({
      key: API_KEY,
      term: term
    }, (data) => {
      this.setState(_ => ({
        videos: data,
        selectedVideo: data[0]
      }));
    });
  }

  render() {
    const { videos, selectedVideo } = this.state;
    const searchVideo = _.debounce(term => {this.searchVideo(term)}, 300);

    return (
      <div>
        <div className={assignedClass.Container}>
          <SearchBar onSearchTermChange={searchVideo}/>
          <div className={assignedClass.VideoStuffContainer}>
            <VideoDetail video={selectedVideo} />
            <VideoList 
              videos={videos} 
              onVideoSelect={selectedVideo => this.setState(_ => ({selectedVideo: selectedVideo}))}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
