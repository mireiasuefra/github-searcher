import { TextInput } from '@primer/react'
import { SearchIcon } from '@primer/octicons-react'

function Filter(props) {
    return (
    <div>
      <form>
        <label htmlFor="name">Repository: </label>
        <TextInput
          block 
          aria-label="Input to find a repository"
          trailingVisual={SearchIcon}
          name="name"
          placeholder="Find a repository..."
          onChange={props.handleFilterText}
        />
      </form>
    </div>
  );
}

export default Filter;
