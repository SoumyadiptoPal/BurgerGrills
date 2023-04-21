import React,{useContext} from "react";
import { Link,useLocation } from "react-router-dom";
import burgerContext from '../context/burgers/burgerContext';

const Navbar = () => {
    let location = useLocation();
    const context=useContext(burgerContext);
    const { importData } = context;
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    Burger
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${location.pathname === "/" ? "active" : ""
                                    }`}
                                aria-current="page"
                                to="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${location.pathname === "/menu" ? "active" : ""
                                    }`}
                                to="/menu"
                            >
                                Menu
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${location.pathname === "/kitchen" ? "active" : ""
                                    }`}
                                aria-current="page"
                                to="/kitchen"
                            >
                                Kitchen
                            </Link>
                        </li>
                        </ul>
                        <div className="d-flex">
                            <button
                                className="btn btn-outline-light"
                                aria-current="page"
                                onClick={()=>importData()}
                            >
                                Import data
                            </button>
                        </div>
                        

                    
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
