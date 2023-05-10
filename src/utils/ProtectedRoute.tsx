import { FC, ReactElement, useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";

interface ProtectedProp {
  element: ReactElement;
}

export const ProtectedRoute: FC<ProtectedProp> = ({ element }) => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  if (!authContext.token) {
    navigate("/login");
    return <Navigate to="/login" replace />;
  }

  return element;
};
