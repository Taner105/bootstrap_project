import React from 'react'
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    return (

        <div className="container navbar-dark bg-secondary shadow">
            <div className="row">
                <div className="col-md-12">
                    <nav className="navbar navbar-expand-lg ">
                        <div className="container-fluid">
                            <a onClick={() => navigate("/")} className="nav-link active text-light fs-4 " >TNR/DESİGN</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mx-auto mb-2 mb-lg-0  ">
                                    <li className="nav-item">


                                        <a onClick={() => navigate("/")} className="nav-link active" >Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a onClick={() => navigate("/about")} className="nav-link">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a onClick={() => navigate("/contact")} className="nav-link">Contact Us</a>
                                    </li>

                                </ul>

                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>





    )
}

export default Navbar;