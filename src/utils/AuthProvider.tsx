import { useState, useEffect, FC, ReactNode, createContext } from "react";

interface AuthContextType {
  token: string | null;
  updateToken: (newToken: string) => void;
  clearToken: () => void;
}

type Props = {
  children?: ReactNode;
};

export const AuthContext = createContext<AuthContextType>({
  token: null,
  updateToken: () => {},
  clearToken: () => {},
});

export const AuthProvider: FC<Props> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);

  // Retrieve token from local storage on mount
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  // Update token in local storage and state
  const updateToken = (newToken: string) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  // Remove token from local storage and state
  const clearToken = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  // Expose token and auth functions through context
  const authContextValue: AuthContextType = {
    token,
    updateToken,
    clearToken,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
