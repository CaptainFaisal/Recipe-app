import React from "react";

const Search = ({ search, setQuery, setSearch }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setQuery(search);
        setSearch("");
      }}
      className="form-inline"
    >
      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="form-control mr-sm-2 m-2"
        placeholder="Search for recepies"
        aria-label="Search"
      />
      <button type="submit" className="btn btn-outline-success my-2 my-sm-0">
        Search
      </button>
    </form>
  );
};

export default Search;
