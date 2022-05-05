import { Link } from "@primer/react";

function Repository(props) {
  return (
    <li className="repository">
      <Link href={props.repository.url} target="_blank">
        {props.repository.name}
      </Link>
      <div className="repository__description">
        {props.repository.description}
      </div>
    </li>
  );
}

export default Repository;

