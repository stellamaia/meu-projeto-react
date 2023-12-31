import React from 'react';

function NavBar() {
    const navbarStyle = {
        background: 'linear-gradient(to bottom, rgb(240 90 19), rgb(252, 128, 67))', // Gradiente de exemplo
    };
  
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" style={navbarStyle}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">UseStates</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item navitem " >
                            <a className="nav-link active" aria-current="page" href="/use-effect">UseEffect</a>
                        </li>

                        <li className="nav-item navitem">
                            <a className="nav-link active" aria-current="page" href="/use-context">UseContext</a>
                        </li>


                        <li className="nav-item navitem">
                            <a className="nav-link active" aria-current="page" href="/use-reducer">UseReducer</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
