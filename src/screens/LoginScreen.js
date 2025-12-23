import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, KeyboardAvoidingView, Platform} from 'react-native';
import { Colors } from '../theme/Colors';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';
import logo from '../../assets/Logo-Medicina.png';

const LoginScreen = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // funcion que gestiona el gesto de click en el botón login
  const handleLogin = () => { 
    try {
      if(email.length > 0 && password.length > 0) {

      onLoginSuccess(email);

      };
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}>
      <View style={styles.content}>
        <Image
        source = {logo} style = {styles.cornerLogo}/>
        <View style={styles.logoContainer}>
            <Text style={styles.title}>e-Salud</Text>
            <Text style={styles.subtitle}>Facultad de Medicina UANL</Text>
        </View>

        <CustomInput 
          placeholder="Correo Electrónico" 
          value={email}
          onChangeText={setEmail}
        />
        
        <CustomInput 
          placeholder="Contraseña" 
          secureTextEntry={true} 
          value={password}
          onChangeText={setPassword}
        />
        <CustomButton title="Iniciar Sesión" onPress={handleLogin} /> 
        
        <Text style={styles.forgotText}>¿Olvidaste tu contraseña?</Text>
      </View>
     
     </KeyboardAvoidingView>
     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  cornerLogo: {
    width: 40,                // Tamaño pequeño
    height: 40,
    resizeMode: 'contain',    // Evita que la imagen se deforme
    position: 'absolute',     // Permite colocarlo libremente
    top: 50,                  // Distancia desde la parte superior
    right: 20,                // Distancia desde la derecha
    zIndex: 1,                // Asegura que esté por encima de otros elementos
  },
  content: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.secondary,
    fontWeight: '600',
    backgroundColor: Colors.primary,
    paddingHorizontal: 10,
    borderRadius: 100,
    marginTop: 10,
    overflow: 'hidden',
  },
  forgotText: {
    textAlign: 'center',
    color: Colors.primary,
    marginTop: 15,
    textDecorationLine: 'underline',
  }
});

export default LoginScreen;