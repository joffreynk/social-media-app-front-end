import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

import {useForm} from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup'


import { AuthContext } from "../context/authContext";


import "./login&register.css";
import "./Login.css";
import url from "../context/url";

const schema = yup.object({
  userName: yup.string().min(2).required(),
  password: yup.string().min(6).required()
})

const Login = () => {

  const {login} = useContext(AuthContext)
  const navigate = useNavigate()
  const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(schema)})
  
  const handleLogin  = (data) => {
    const options = {
      mode: 'cors',
      withCredentials: true,
      headers:{
        'content-type': 'application/json',
        'username': data.userName,
        'password': data.password
      },
    }
    axios.get(`${url}auth`, options)
    .then(res=>{
      login(res.data)
      navigate('/')
    }).catch(error => console.log(error))
  }
  return (
    <div className="login-register">
      <div className="card">
        <div className="left">
          <h1>J Talk</h1>
          <p>
            Welcome to J Talk and share your photos, ideas, and videos with
            others
          </p>
          <span>Don't you have an account?</span>
          <Link to='/register'>
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login <span></span> </h1>
          <form onSubmit={handleSubmit(handleLogin)}>
            <input {...register('userName')} type="text" placeholder="User name" />
            {errors.userName?.message}
            <input {...register('password')} type="password" placeholder="Password" />
            {errors.password?.message}
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
