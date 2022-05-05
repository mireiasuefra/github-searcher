import { TextInput } from "@primer/react";
import { SearchIcon } from "@primer/octicons-react";

function Filter(props) {
  const handleFilterText = (ev) => {
    const inputText = ev.currentTarget.value;
    props.setFilterText(inputText);
  };

  return (
    <form className="filter">
      <TextInput
        block
        aria-label="Input to find a repository"
        trailingVisual={SearchIcon}
        name="name"
        placeholder="Find a repository..."
        onChange={handleFilterText}
      />
    </form>
  );
}

export default Filter;
