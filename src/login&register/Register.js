import { Link, useNavigate } from "react-router-dom";
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios'

import "./login&register.css";
import "./Register.css";

import url from "../context/url";
import { useState } from "react";

const schema = yup.object({
  firstName: yup.string().min(2).required(),
  lastName: yup.string().min(2).required(),
  userName:yup.string().min(2).required(),
  password: yup.string().min(6).max(15).required(),
  email:yup.string().required(),
});

const Register = () => {
  const navigate = useNavigate()
  const [error, setError] = useState(null)

  const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(schema)});

  const registerUser =  (data) => {
    const options = {
      body: JSON.stringify(data),
      method: "POST",
      withCredentials:true,
      mode: 'cors',
      headers: {
        "Content-Type": "application/json",
      },
    }

    axios.post(`${url}users`, options)
    .then(Response => {
      if(Response.statusCode === 200) navigate('/login')
      setError(Response.data.error)
    })
    .catch(error=> {
      if(error&& error.response.data) setError(error.response.data.error)
      console.error(error)
    });
  };
  return (
    <div className="login-register">
      <div className="card register-card">
        <div className="left">
          <h1>J Talk</h1>
          <p>
            Welcome to J Talk and share your photos, ideas, and videos with
            others
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register <span></span> </h1>
          <form className="register-form" onSubmit={handleSubmit(registerUser)}>
            <input {...register("userName")}  type="text" placeholder="User name" />
            {errors.userName?.message}
            <input {...register("firstName")} type="text" placeholder="first Name" />
            {errors.firstName?.message}
            <input  {...register("lastName")} type="text" placeholder="last Name" />
            {errors.lastName?.message}
            <input {...register("email")} type="email" placeholder="E-mail" />
           {errors.email?.message}
            <input {...register("password")} type="password" placeholder="Password" />
            {errors.password?.message}
            {error && <p className="error">{error}</p>}
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
