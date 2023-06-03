import React, { useState } from 'react'
import axios from "axios";

export default function Registration() {
    const [email, setEmail] = useState('')
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const handleUserLoginChange = (value) => {
      setLogin(value);
  };
  const handleEmailChange = (value) => {
      setEmail(value);
  };
  const handlePasswordChange = (value) => {
      setPassword(value);
  };

  const handleSave = () =>{;
    axios.post('https://localhost:7102/Users', {
      UserLogin: login,
      email: email,
      Password: password,
      role : 1,
      Money : 1500,
    }).then((res) => {
      //localStorage.setItem('token', res.data.token);
      window.location.href = '/Login';
    }).catch((err) => {
      window.location.href = '/Login';
      console.error(err);
      alert(err);
    });
    }



    return (
      <div className='registration'>
        <form className='form'>
          <h1 className='form_title'>Регистрация</h1>
          <div className='form_group'>
          <input className='form_input' name='email' type='text' placeholder='email' onChange={(e) => handleEmailChange(e.target.value)}/>
          </div>
          <div className='form_group'>
          <input className='form_input' name='login' type='text' placeholder='логин' onChange={(e) => handleUserLoginChange(e.target.value)}/>
          </div>
          <div className='form_group'>
          <input className='form_input' name='password' type='text' placeholder='пароль' onChange={(e) => handlePasswordChange(e.target.value)}/>
          </div>
          <button className='form_button' type='submit' onClick={() => handleSave() }  >Зарегестрироваться</button>
        </form>
      </div>
    );
}
