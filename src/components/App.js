import React from 'react';
import SearchBar from "./SearchBar";
import youtube from '../apis/youtube'
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
    }
  }

  onInputSubmit = async (inputText) => {
    const response = await youtube.get('/search', {
      params: {
        q: inputText
      }
    });

    this.setState({videos: response.data.items})
  };

  onVideoSelect = (video) => {
    this.setState({
      selectedVideo: video,
    })
  };

  render() {
    return (
      <div className={'ui container'} style={{height: '100vh', paddingTop: '20px'}}>
        <SearchBar onFormSubmit={this.onInputSubmit}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
      </div>
    )
  }
}

export default App;