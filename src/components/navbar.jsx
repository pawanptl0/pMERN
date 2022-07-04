import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top">
      <span className="navbar-brand p-2 ms-2">pMERN</span>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-end me-3" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/">HTML</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/css">CSS</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/es6">ES6</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/react">REACT</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/redux">REDUX</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/express">EXPRESS</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/mongo">MONGO</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/graphql">GRAPHQL</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/programs">PROGRAMS</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
