import React, { Component } from 'react';

import assignedClass from '../Styles/SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.onChangeHandle = this.onChangeHandle.bind(this);
    this.state = {
      term: ""
    };
  }

  onChangeHandle(event) {
    const newValue = event.target.value;

    this.setState(_ => ({term: newValue}));
    this.props.onSearchTermChange(this.state.term);
  }
  
  render() {
    return (
      <div>
        <input 
          className={assignedClass.SearchBar}
          type="text"
          value={this.state.term}
          onChange={this.onChangeHandle}
        />
      </div>
    );
  }
}

export default SearchBar;