import { useDispatch } from 'react-redux';
import { signUpUser } from '../../../../Redux/AuthSlice.jsx';
import { useNavigate } from 'react-router-dom';

const useHandleSignup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleSignup = (email, password, fullName) => {
    dispatch(signUpUser({ email, password, fullName }));
    navigate("/store");

  };

  return handleSignup;
};

export default useHandleSignup;



