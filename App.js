import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Balance from './components/formBalance'
import ImageViewer from './components/ImageViewer'
import Resumen from './components/Resumen'

export default function App() {
  return (
    <>
    <View style={styles.container}>
      <View style={styles.containerRow}>
        <View>
          <Resumen/>
        </View>
        <StatusBar style="auto" />
        <Balance style={styles.containerBalance}></Balance>
      </View>
      
        <View style={styles.containerBottom}>
          <ImageViewer  ></ImageViewer>
        </View>

    </View>

</>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ''
  },
  containerRow: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerBalance: {
    flex : 1 ,
    maxWidth: 200,
    maxHeight: 200,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerBottom: {
    height: 50,
    backgroundColor: 'blue',
    marginTop: 50,
    marginBottom: 50,
  },
});
