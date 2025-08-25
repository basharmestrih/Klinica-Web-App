import React from 'react';
import { useNavigate } from 'react-router-dom';

const AuthHeader = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="text-4xl  font-bold text-[#007bff]">Klinica</h1>
    

    </>
  );
};

export default AuthHeader;
