
function Repository(props) {
  return (
    <li className="repository">
        <div className="repository__name">{props.repository.name}</div>
        <div  className="repository__description">{props.repository.description}</div>
    </li>
  );
}

export default Repository;