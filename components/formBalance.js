import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react'
import { useGlobalState } from '../context/GlobalState2';
 

export default function Balance() {
  let diccionario = []
  const data = useGlobalState()

  const {addTransaction} = useGlobalState()
  
  const [description, setDescription] = useState();
  const [monto, setMonto] = useState(0);


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(`Input 1: ${description}, Input 2: ${monto}`);
    diccionario = description
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      monto : +monto
    }) 
   
   }

  return (
    <>
      <View style={styles.container}>
{/*       <Text>{JSON.stringify(data)}</Text> 
 */}       <TextInput
            style={styles.input}
            value={description}
            onChangeText={setDescription}
            placeholder="Introduce una description"
             />
           <TextInput
            style={styles.input}
            value={monto}
            onChangeText={setMonto}
            placeholder="Introduce un monto"
              />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
    </>
    
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
        maxWidth: 500,
        borderRadius:30
      },
      input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
        width: '100%',
  },
});