import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const useAuth = () => {
  const { user, token } = useContext(AuthContext);
  return [user, token];
};

export default useAuth;
