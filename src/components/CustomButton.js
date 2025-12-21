import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors } from '../theme/Colors';

const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary, // Morado
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25, // Esto lo hace redondo
    alignItems: 'center',
    marginVertical: 10,
    borderWidth: 2,
    borderColor: Colors.secondary, // Borde amarillo
  },
  text: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomButton;