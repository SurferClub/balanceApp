import React from 'react'
import { View ,StyleSheet, Text} from 'react-native-web'
import { useGlobalState } from '../context/GlobalState2'


function IncomeExpense() {
    const { transactions } = useGlobalState()

    const monto = transactions.map(transactions => transactions.monto)

    const income = monto
        .filter(item => item > 0)
        .reduce((acc,item) => (acc += item),0 )

    const expense = monto.filter((item)=> item < 0)
        .reduce((acc,item) => (acc += item),0 ) * -1
    return (
    <View style={styles.container2}>
         <Text style={styles.text}>
            <h3>Incomes</h3>         
            <h4>{income}</h4>
            <h3>Expenses</h3>
            <h4>{expense}</h4>
         </Text>     
    </View>
  )
}

const styles = StyleSheet.create({  
      text: {
        fontWeight: 'bold',
        fontSize: 9 ,
        textAlign: 'left',
        lineHeight: 1,
        maxWidth: 500,
        paddingTop:10,
        backgroungColor: 'white',
    },
    container2:{
        alignItems: 'center',
/*         backgroundColor:'white',
 */        width: '100%',    minHeight:100,
        padding: 20
      },
    })
    
export default IncomeExpense