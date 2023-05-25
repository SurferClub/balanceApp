import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button} from 'react-native';
import {useGlobalState} from '../context/GlobalState2'

export default function ImageViewer() {
  const {transactions} = useGlobalState()
  const {deleteTransaction} = useGlobalState()

  return (
    <>
      <View style={styles.container}>
        {transactions.map(transaction => (
            <View key={transaction.id} style={styles.row}>
              <Text>{transaction.description}</Text>
              <Text>{transaction.monto}</Text>
              <Button 
              title='x'
              onPress={()=>deleteTransaction(transaction.id)}
              > </Button>
            </View>
          ))}
      </View>    
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    backgroundColor: 'gray',

    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    minWidth: 200,
  }
});
