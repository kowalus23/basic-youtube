import React from 'react';
import SearchBar from "./SearchBar";
import youtube from '../apis/youtube'

class App extends React.Component {

  onInputSubmit = (inputText) => {
    youtube.get('/search', {
      params: {
        q: inputText
      }
    });
  };

  render() {
    return (
      <div className={'ui container'} style={{height: '100vh', paddingTop: '20px'}}>
        <SearchBar onFormSubmit={this.onInputSubmit}/>
      </div>
    )
  }
}

export default App;