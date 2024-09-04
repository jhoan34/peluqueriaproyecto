import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { appFirebease } from "../service/firebase";
import { useUsuario } from "../context/usuario";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "./relo.css";
const auth = getAuth(appFirebease);

export const Login = ({ setLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const { usuariodata } = useUsuario();

    const registrarse = () => {
        setLogin(false);
    };

    const iniciarSesion = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            // Verifica el correo electrónico del usuario y redirige en consecuencia
            if (userCredential.user.email === "johanmonsalve125@gmail.com") {
                navigate("/admin/panel");
            } else {
                navigate("/usuario/panel");
            }
        } catch (error) {
            console.error("Error during login:", error);
            setError("Failed to login. Please check your credentials.");
            setTimeout(() => {
                setError("");
            }, 3000);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-inputs">
                <input 
                    type="email" 
                    value={email}  
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Email" 
                    className="auth-input"
                />
                <input 
                    type="password"  
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Contraseña"
                    className="auth-input"
                />
            </div>
            {error && <p className="auth-error">{error}</p>}
            <div>
                <button onClick={iniciarSesion} className="auth-button">Iniciar Sesión</button>
            </div>
            <div className="auth-footer">
                <p>¿No tienes cuenta?</p>
                <button onClick={registrarse} className="auth-link-button">Registrarse</button>
            </div>
        </div>
    );
};
