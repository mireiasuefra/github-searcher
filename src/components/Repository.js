
function Repository(props) {
  return (
    <li>
        <div>Nombre: {props.repository.name}</div>
        <div>Descripción: {props.repository.description}</div>
    </li>
  );
}

export default Repository;