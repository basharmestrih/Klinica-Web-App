import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../Redux/AuthSlice.jsx"; // Adjust path based on your project

const useHandleLogin = (email, password) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await dispatch(loginUser({ email, password }));
    if (loginUser.fulfilled.match(result)) {
      navigate("/store");
    }
  };

  return handleLogin;
};

export default useHandleLogin;
