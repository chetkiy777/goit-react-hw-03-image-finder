import styles from './styles.module.css';
import { ImSearch } from 'react-icons/im';
import React from 'react';

export default class Searchbar extends React.Component {
  state = {
    inputValue: '',
  };

  onInputChange = e => {
    this.setState({ inputValue: e.currentTarget.value });
    console.log(this.state.inputValue);
  };

  handleSubmit = e => {
    e.preventDefault();
    const value = e.target.query.value;
    this.props.onFormSubmit(value);
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form
          action="/"
          className={styles.SearchForm}
          onSubmit={this.handleSubmit}
        >
          <button type="submit" className={styles.SearchFormButton}>
            <ImSearch />
          </button>

          <input
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus="off"
            placeholder="Search images and photos"
            name="query"
            value={this.state.inputValue}
            onChange={e => this.onInputChange(e)}
          />
        </form>
      </header>
    );
  }
}
