function Filter(props) {
  


    return (
    <div>
      <form>
        <label htmlFor="name">Repository: </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Find a repository"
          onChange={props.handleFilterText}
        />
      </form>
    </div>
  );
}

export default Filter;
