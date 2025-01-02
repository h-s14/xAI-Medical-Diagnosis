import { useNavigate } from "react-router-dom";

const NavHome = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return goHome;
};

export default NavHome;
