import { FC, ReactElement, useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";

interface ProtectedProp {
  element: ReactElement;
}

export const ProtectedRoute: FC<ProtectedProp> = ({ element }) => {
  const authContext = useContext(AuthContext);

  if (!authContext?.token) {
    return <Navigate to="/login" replace />;
  }

  return element;
};
