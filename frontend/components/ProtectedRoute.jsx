import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.post("https://dhansetu-backend.onrender.com", {}, { withCredentials: true })
      .then((res) => {
        setAuthorized(res.data.status);
      })
      .catch(() => {
        setAuthorized(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return null; // or a spinner

  return authorized ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
