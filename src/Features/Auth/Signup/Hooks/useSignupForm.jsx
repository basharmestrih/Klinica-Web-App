import { useFormik } from 'formik';
import * as Yup from 'yup';
import useHandleSignup from './useHandleSignup.jsx';

const useSignupForm = () => {
  const handleSignup = useHandleSignup();

  const formik = useFormik({
    initialValues: {
      fullName: '',
      phone: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(3, 'Full name must be at least 3 characters')
        .required('Full name is required'),
        
      phone: Yup.string()
        .matches(/^\+\d+$/, 'Phone must start with + and contain only numbers')
        .required('Phone number is required'),

      email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),

      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),

      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm your password'),
    }),
    onSubmit: (values) => {
      const { email, password, fullName, phone } = values;
      handleSignup(email, password, fullName, phone); // include phone
    },
  });

  return formik;
};

export default useSignupForm;
