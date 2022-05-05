import { Link } from "@primer/react";

function Repository(props) {
  const { name, url, description } = props.repository;

  return (
    <li className="repository">
      <Link href={url} target="_blank">
        {name}
      </Link>
      <div className="repository__description">
        {description}
      </div>
    </li>
  );
}

export default Repository;

