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
            <label htmlFor="search">Video Search</label>
            <input
              type="text"
              name="search"
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