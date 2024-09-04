import { Link } from "react-router-dom";
import { useState } from "react";
import { useUsuario } from "../context/usuario";
import "./nabvar.css"; // Asegúrate de tener este archivo CSS en tu proyecto

const Cuenta = () => {
    const { usuariodata , email} = useUsuario();
    
    if (email === "johanmonsalve125@gmail.com") {
        return (
            <div className="navbar-item">
                <li><Link to="/admin/panel">
                    <span class="material-symbols-outlined">
                        person
                    </span>
                    <small>admin</small>
                </Link></li>
            </div>
        );
    }

    if (usuariodata) {
        return (
            <div className="navbar-item">
                <li><Link to="/usuario/panel">
                    <span class="material-symbols-outlined">
                        person
                    </span>
                    <small>Dashboard</small>
                </Link></li>
            </div>
        );
    }

    return (
        <div className="navbar-item">
            <li><Link to="/user">
            <span class="material-symbols-outlined">
                 person
            </span>
            </Link></li>
        </div>
    );
};

const Menu = () => {
    return (
        <div className="dropdown-menu">
            <div className="dropdown-item">
                <li><Link to="/services">Servicios</Link></li>
            </div>
            <div className="dropdown-item">
                <li><Link to="/gallery">Galería</Link></li>
            </div>
            <div className="dropdown-item">
                <li><Link to="/team">Team</Link></li>
            </div>
            <div className="navbar-item">
                <li><Link to="/contacto">Contacto</Link></li>
            </div>
            <div className="navbar-item">
                <li><Link to="/agendarcita">Citas</Link></li>
            </div>
        </div>
    );
};

export const Navbar = () => {
    const [pagesOn, setPagesOn] = useState(false);

    const togglePages = () => {
        setPagesOn(!pagesOn);
    };

    return (
        <>
            <div className="navbar-container">
                <ul className="navbar">
                    <div className="navbar-item">
                        <a onClick={togglePages} style={{ cursor: "pointer" }}>Pages</a>
                    </div>
                    <div className="navbar-item">
                        <li><Link to="/">Home</Link></li>
                    </div>
                    <div className="navbar-item">
                        <li><Link to="/sobremi">Sobre</Link></li>
                    </div>
                    <Cuenta />
                </ul>
            </div>
            {pagesOn && <Menu />}
        </>
    );
};
