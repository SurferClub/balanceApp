import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Resumen() {
    const [deudas, setDeudas] = useState()
    const [pagos, setPagos] = useState()
    const [total, setTotal] = useState()
  return (
    <>
    <View style={styles.container}>
      <Text>hola resumen</Text>
    </View>

</>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ''
  }
});
