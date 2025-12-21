// import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
const icon = require('./assets/icon.png');

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Tenemos aqui nuestra aplicacion</Text>
      <Image source = {icon}
      style = {{height: 100, width: 100}}/>
      <StatusBar style="auto" />
    </View>
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
