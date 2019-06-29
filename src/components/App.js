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
      toggleClass: false,
    }
  }

  componentDidMount() {
    this.onInputSubmit('javascript')
  }

  onInputSubmit = async (inputText) => {
    const response = await youtube.get('/search', {
        params: {
          q: inputText
        }
      })
        .catch(console.log('You need to add your own YT API KEY in youtube.js'))

    ;

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    })
  };

  onVideoSelect = (video) => {
    this.setState({
      selectedVideo: video,
    })
  };

  onClickDarkMode = () => {
    const currentState = this.state.toggleClass;
    this.setState({
      toggleClass: !currentState
    })
  };

  render() {
    return (
      <div className={this.state.toggleClass ? 'dark' : ''}>
        <div className={'ui container'} style={{height: '100vh', paddingTop: '20px'}}>
          <SearchBar onClickDarkMode={this.onClickDarkMode} onFormSubmit={this.onInputSubmit}/>
          <div className="ui grid">
            <div className="ui row">
              <div className="sixteen wide mobile eleven wide computer column mb">
                <VideoDetail video={this.state.selectedVideo}/>
              </div>
              <div className="sixteen wide mobile five wide computer column">
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;