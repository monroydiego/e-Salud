// import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar'; 
import { StyleSheet, Text, View, Image } from 'react-native';
import LoginScreen from './src/screens/LoginScreen'; // Vista de Login

export default function App() {
  return (
    <LoginScreen/> // mostramos la pantalla de login
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8711b9', 
    alignItems: 'center',
    justifyContent: 'center',
  },
});
