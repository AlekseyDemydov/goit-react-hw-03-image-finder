import { Component } from 'react';
import s from './Searchbar.module.css';
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
      <header className={s.searchbar}>
        <form className={s.searchForm} onSubmit={this.handleSubmit}>
          <input
            value={this.query}
            className={s.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
          <button type="submit" className={s.searchFormButton}>
            <span className={s.searchFormButtonLabel}></span>
          </button>
        </form>
      </header>
    );
  }
}
export default SerchBar;
