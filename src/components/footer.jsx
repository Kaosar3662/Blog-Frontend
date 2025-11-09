
import { Link } from "react-router-dom";

import "../assets/var.css"

const footer = () => {

  return (
    <footer className="bg-[var(--Neutral-Black-900)]">
      <Link to="/">
        <h1 style={{ color: 'white' }}>Kaosar</h1>
      </Link>
    </footer>
  );
};

export default footer;