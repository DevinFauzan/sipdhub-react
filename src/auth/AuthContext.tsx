// AuthContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
    isAuthenticated: boolean;
    fullname: string | null; // This will hold the FULLNAME
    login: (fullname: string) => void; // Update login to accept a name
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [fullname, setUserName] = useState<string | null>(null); // State for user name

    useEffect(() => {
        const token = localStorage.getItem('access_token');
        if (token) {
            setIsAuthenticated(true);
            // Optionally, you can decode the token to get user info if it's stored there
        }
    }, []);

    const login = (fullname: string) => {
        setIsAuthenticated(true);
        setUserName(fullname); // Set the user name on login
    };

    const logout = () => {
        localStorage.removeItem('access_token');
        setIsAuthenticated(false);
        setUserName(null); // Clear the user name on logout
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, fullname, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
