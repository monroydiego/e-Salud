import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Colors } from '../theme/Colors';
import CustomButton from '../components/CustomButton';

const HomeScreen = ({ userEmail, onLogout }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Cabecera de Bienvenida */}
        <View style={styles.header}>
          <Text style={styles.welcomeText}>Bienvenido,</Text>
          <Text style={styles.userText}>{userEmail || 'Colega'}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Panel de Control Médico</Text>
          <Text style={styles.cardBody}>
            Aquí podrás gestionar tus consultas, pacientes y expedientes clínicos de manera segura.
          </Text>
        </View>

        {/* Botones redondos siguiendo el estilo previo */}
        <CustomButton title="Ver Pacientes" onPress={() => console.log('Pacientes')} />
        <CustomButton title="Nueva Consulta" onPress={() => console.log('Consulta')} />
        
        {/* Botón de Salir con estilo personalizado si se desea */}
        <View style={{ marginTop: 20 }}>
          <CustomButton title="Cerrar Sesión" onPress={onLogout} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    padding: 20,
  },
  header: {
    marginBottom: 30,
    marginTop: 20,
  },
  welcomeText: {
    fontSize: 24,
    color: Colors.text,
  },
  userText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.primary, // Morado FACMED
  },
  card: {
    backgroundColor: Colors.white,
    padding: 20,
    borderRadius: 20,
    marginBottom: 30,
    elevation: 3, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderLeftWidth: 5,
    borderLeftColor: Colors.secondary, // Detalle en amarillo
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 10,
  },
  cardBody: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  }
});

export default HomeScreen;