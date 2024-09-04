import { createContext, useState, useContext, useEffect } from "react";
import { appFirebease } from "../service/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(appFirebease);

export const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {
    const [usuariodata, setUsuario] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("User object from Firebase:", user);
                setUsuario(user);
            } else {
                setUsuario(null);
            }
        });

        return () => unsubscribe(); // Clean up the subscription on unmount
    }, []);

    const email = usuariodata ? usuariodata.email : null;
    console.log("Current user data:", email);

    return (
        <UsuarioContext.Provider value={{ usuariodata, setUsuario, email }}>
            {children}
        </UsuarioContext.Provider>
    );
};

export function useUsuario() {
    const context = useContext(UsuarioContext);
    if (!context) {
        throw new Error("useUsuario debe usarse dentro de un UsuarioProvider");
    }
    return context;
}
