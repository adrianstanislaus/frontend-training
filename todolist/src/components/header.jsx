import { Link } from "react-router-dom";

function Header() {
    return(
        <div className="d-flex align-items-center flex-column m-2 p-2">
            <h1 className="" style={{'font-weight':'bold'}}>Todos</h1>
            <nav className="navbar m-0 p-0">
                <div>
                    <ul class="navbar-nav d-flex flex-row">
                    <li class="nav-item m-1">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li class="nav-item m-1">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    </ul>
                </div>
                </nav>
        </div>
    )
}

export default Header;