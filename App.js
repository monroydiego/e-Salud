import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  <StatusBar hidden = {true}/>
  // definimos una constante para manejar el estado de login
  const [isLoggedIn, setIsLoggedIn] = useState(false); // por defecto está en falso
  // definimos una constante para almacenar el email del usuario
  const [userEmail, setUserEmail] = useState('');  // Almacenamos el correo del usuario (en este caso vacio) pero como string

  // funcion para manera el inicio exitoso de sesion, recibe como parametro el email
  const handleLoginSuccess = (email) => {
    setUserEmail(email); // utilizamos el email recibido para actualizarlo al valor de userEmail
    setIsLoggedIn(true); // cuando se recibe el correo se actualiza isLogged a true
  };
  // función para manejar el cierre de sesión
  const handleLogout = () => {
    setIsLoggedIn(false); // volvemos a pasar a falso el estado del login
    setUserEmail(''); // limpiamos el email del usuario
  };

  // Lógica de decisión
  if (isLoggedIn) { // si isLoggedIn es true
          return <HomeScreen userEmail={userEmail} onLogout={handleLogout} />; 
  }

  return <LoginScreen onLoginSuccess={handleLoginSuccess} />; 
}