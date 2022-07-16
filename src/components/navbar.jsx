import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
      <div className="container-fluid">
      <span className="navbar-brand p-2 ms-2">pMERN</span>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-end me-3" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">HTML</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/css">CSS</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/es6">ES6</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/react">REACT</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/redux">REDUX</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/express">EXPRESS</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/mongo">MONGO</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/graphql">GRAPHQL</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/programs">PROGRAMS</Link>
          </li>
        </ul>
      </div>
</div>

    </nav>
  )
}

export default Navbar
