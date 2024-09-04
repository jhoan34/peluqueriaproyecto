import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useUsuario } from "../context/usuario";
import { useState } from "react";
import "./panel.css";

// Componente del Panel de Admin
const PanelAdmin = () => {
    const navigate = useNavigate();
    const auth = getAuth();
    const [ opcionAdminValue, setOpcionAdminValue ] = useState("");

    // components de opciones de admin
    const AdminCitasClientes = () => {
        return (
            <div>
                <h1>Citas Agendadas delos clientes</h1>
            </div>
        )
    }
    const InfoCuenta = () => {
        return (
            <div>
                <h1>Info Cuenta</h1>
            </div>
        )
    }

    //render de las opciones
    const renderAdmonOptions = () => {
        if(opcionAdminValue === "citasAgendadasdelosclientes") {
            return <AdminCitasClientes />
        }
        if(opcionAdminValue === "infoCuenta") {
            return <InfoCuenta />
        }
        return (
            <div>
                <h1>Seleccione una opción</h1>
            </div>
        )
    }


    //cerrar sesion
    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate("/login");
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
        }
    };

    return (
        <div className="panel-admin">
            <div className="admin-options">
                <button onClick={() => setOpcionAdminValue("infoCuenta")}>Cuenta</button>
                <button onClick={() => setOpcionAdminValue("citasAgendadasdelosclientes")}>Citas clientes</button>
                <button onClick={handleLogout}>Logout</button>
            </div>
            <div className="opcions-admin-info">
                {renderAdmonOptions()}
            </div>
        </div>
    );
};

// Componente del Panel de Usuario
const PanelUser = () => {
    const navigate = useNavigate();
    const auth = getAuth();
    const [ opcionValue, setOpcionValue ] = useState("");

    // components de opciones de usuario
    const CitasAgendas = () => {
        return (
            <div>
                <h1>Citas Agendadas</h1>
            </div>
        )
    }



    const InfoCuenta = () => {
        return (
            <div>
                <h1>Info Cuenta</h1>
            </div>
        )
    }



    const renderOpcionsUser = () => {
        
        
        if (opcionValue === "citasAgendas") {
            return (
                <CitasAgendas />
            )
        }

        if (opcionValue === "infoCuenta") {
            return ( 
                <InfoCuenta />
            )
        }

        return (
            <div>
               <h1>Seleccione una opción</h1>
            </div>
        )
    }


    //cerrar sesion
    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate("/login");
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
        }
    };

    return (
        <div className="panel-user">
            <div className="opcions-user">
                <button  onClick={() => setOpcionValue("infoCuenta")}>Cuenta</button>
                <button  onClick={() => setOpcionValue("citasAgendas")}>Citas Agendadas </button>
                <button onClick={handleLogout} className="logout-button">Cerrar Sesión</button>
            </div>
            <div className="opcions-user-info">
                {renderOpcionsUser()}
            </div>
        </div>
    );
};

// Componente del Panel General
export const Panel = () => {
    const { usuariodata,  email } = useUsuario();
    const render = () => {
        if(usuariodata){
            if (email === "johanmonsalve125@gmail.com") {
                return <PanelAdmin />;
            } else {
                return <PanelUser />;
            }
        }
    }
    return (
        <>
            {render()}    
        </>
    );
};
