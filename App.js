import { StatusBar } from 'expo-status-bar';
import { ProgressBarAndroidComponent, StyleSheet, Text, View } from 'react-native';
 import Balance from './components/formBalance'
 import ImageViewer from './components/ImageViewer'
import Resumen from './components/Resumen'
import {GlobalProvider} from './context/GlobalState2'
import IncomeExpense from './components/IncomeExpense'
import ExpenseChart from './components/ExpenseChart'

export default function App() {
  return (
    <>
     <GlobalProvider> 
      <View style={styles.background}>
        <View style={styles.container}>
          <View style={styles.containerRow}>
              <View>
                <Resumen/>
                <IncomeExpense/>
              </View>
              <View style={styles.pie}>
                  <ExpenseChart />
              </View>
          </View>
          <Balance/>
          </View>
          <View>
              <ImageViewer/>
          </View>
      </View>
    </GlobalProvider> 
</>
  );
}

const styles = StyleSheet.create({
  pie:{
    width:'50%',

  },
  background:{
    flex:1,
    backgroundColor: 'black',
    padding: 40 ,
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
    width: '80%',
    borderRadius: 20,
  },
   /* container2:{
    display: 'block',
    alignItems: 'flex-end',
    backgroundColor:'white',
    width: 100,    minHeight:100,
    padding: 20
  },  */
  containerRow: {
    flex:1,
    flexDirection: 'row',
    justifyContent:'center',
    backgroundColor: '',
    padding:10,
  },
  containerBalance: {
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
