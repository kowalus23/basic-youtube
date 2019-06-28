import React from 'react';
import SearchBar from "./SearchBar";
import youtube from '../apis/youtube'
import VideoList from "./VideoList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],

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

  render() {
    return (
      <div className={'ui container'} style={{height: '100vh', paddingTop: '20px'}}>
        <SearchBar onFormSubmit={this.onInputSubmit}/>
        <VideoList videos={this.state.videos}/>
      </div>
    )
  }
}

export default App;