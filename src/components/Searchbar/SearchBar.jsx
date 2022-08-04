import { Component } from 'react';

class SerchBar extends Component {
  state = {
    query: '',
  };
  handleChange = e => {
    const value = e.target.value.trimStart();
    this.setState({ query: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.query.length === 0) return;
    this.props.onSubmit(this.state.query);
  };
  render() {
    return (
      <header className="searchbar">
        <form className="searchForm" onSubmit={this.handleSubmit}>
          <input
            className="searchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
          <button type="submit" className="searchForm-button">
            <span className="searchForm-button-label"></span>
          </button>
        </form>
      </header>
    );
  }
}
export default SerchBar;
