import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
    }
  }

  onInputChange = (event) => {
    this.setState({
      inputText: event.target.value
    });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.inputText)
  };

  render() {
    return (
      <div className={'search-bar ui segment'}>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <div className="flexible">
              <label htmlFor="search">Search a video on YouTube!</label>
              <span onClick={this.props.onClickDarkMode} className={'dark-mode'}> </span>
            </div>
            <input
              type="text"
              name="search"
              placeholder="write anything you want..."
              value={this.state.inputText}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;