import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useGlobalState } from '../context/GlobalState2';


export default function Resumen() {
  const { transactions } = useGlobalState()

  const monto = transactions.map(transaction =>transaction.monto)
  const total = monto.reduce((acc, item)=>(acc += item), 0)


  return (
  <>
    <View style={styles.container}>
        <Text>Your Balance</Text>
       <Text>{JSON.stringify(total, null , 2)}</Text> 
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
