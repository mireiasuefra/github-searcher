import { TextInput } from '@primer/react'
import { SearchIcon } from '@primer/octicons-react'

function Filter(props) {
    return (
      <form className="filter">
        <TextInput
          block 
          aria-label="Input to find a repository"
          trailingVisual={SearchIcon}
          name="name"
          placeholder="Find a repository..."
          onChange={props.handleFilterText}
        />
      </form>
  );
}

export default Filter;
