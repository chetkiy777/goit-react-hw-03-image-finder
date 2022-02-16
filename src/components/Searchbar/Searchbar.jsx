const Searchbar = props => {
  let { onFormSubmit } = props;

  const handleSubmit = e => {
    e.preventDefault();
    const value = e.currentTarget.searchQuery.value;
    onFormSubmit(value);
  };

  return (
    <header className="searchbar">
      <form className="form" onSubmit={handleSubmit}>
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>

        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus="off"
          placeholder="Search images and photos"
          name="searchQuery"
        />
      </form>
    </header>
  );
};

export default Searchbar;
