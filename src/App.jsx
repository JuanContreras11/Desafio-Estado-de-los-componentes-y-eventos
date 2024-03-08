import { useState } from 'react'
import Registro from './components/Registro';
import './App.css'
import SocialButton from './components/SocialButton';

function App() {
  

  return (
    <div class='container'>
    <h1 className='mb-3'>Crea una Cuenta</h1>
    
      <Registro/>
    </div>
  )
}

export default App
