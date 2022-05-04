
function Repository(props) {
  return (
    <li>
        <div>{props.repository.name}</div>
        <div>{props.repository.description}</div>
    </li>
  );
}

export default Repository;