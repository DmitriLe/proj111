import React, { useState } from 'react'

export default function Registration() {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    
    return (
      <div className='registration'>
        <form className='form'>
          <h1 className='form_title'>Вход</h1>
          <div className='form_group'>
          <input className='form_input' name='login' type='text' placeholder='логин' />
          </div>
          <div className='form_group'>
          <input className='form_input' name='password' type='text' placeholder='пароль' />
          </div>
          <button className='form_button' type='submit'>Войти</button>
        </form>
      </div>
    )
}