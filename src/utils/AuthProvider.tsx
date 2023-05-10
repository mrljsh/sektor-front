/* eslint-disable @typescript-eslint/no-empty-function */
import { useState, useEffect, FC, ReactNode, createContext } from "react";
import { useCookies } from "react-cookie";

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
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  // Retrieve token from local storage on mount
  useEffect(() => {
    setToken(cookies.token || null);
  }, [cookies]);

  // Update token in local storage and state
  const updateToken = (newToken: string) => {
    setCookie("token", newToken);
    setToken(newToken);
  };

  // Remove token from local storage and state
  const clearToken = () => {
    removeCookie("token");
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
