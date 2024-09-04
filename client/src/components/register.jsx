import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { appFirebease } from "../service/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "./relo.css";
const auth = getAuth(appFirebease);

export const Register = ({ setLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const registrarse = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log(userCredential.user);
            setEmail("");
            setPassword("");
            setLogin(true);
            // Navigate to a different page after successful registration, if needed
            // navigate("/dashboard"); // Uncomment and replace with your desired path
        } catch (error) {
            console.error("Error during registration:", error);
            setError(error.message || "Registration failed. Please try again.");
            setTimeout(() => {
                setError("");
            }, 3000);
        }
    };

    const iniciarSesion = () => {
        setLogin(true);
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
                <button onClick={registrarse} className="auth-button">Registrarse</button>
            </div>
            <div className="auth-footer">
                <p>¿Tienes cuenta?</p>
                <button onClick={iniciarSesion} className="auth-link-button">Iniciar Sesión</button>
            </div>
        </div>
    );
};
