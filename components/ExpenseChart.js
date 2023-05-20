import React from 'react'
import { useGlobalState } from '../context/GlobalState2'
import { VictoryPie,VictoryLabel } from 'victory'


function ExpenseChart() {
    const {transactions} =  useGlobalState()
    const total = transactions.reduce((acc,transaction)=>(acc += transaction.amount))
    
    const totalIncome = transactions.filter(transaction=> transaction.amount >0)
    .reduce((acc,transaction)=>(acc += transaction.amount),0)

    const totalExpenses = transactions.filter(transaction=> transaction.amount < 0)
    .reduce((acc,transaction)=>(acc += transaction.amount),0)*-1

    const totalExpensesPercentage = Math.round((totalExpenses / totalIncome)*100)
console.log(totalExpensesPercentage)

    return (
    <VictoryPie 
        colorScale={["#e74c3c", "#2ecc71"]}
    data={[
        {x: 'Expenses', y: 40},
        {x: 'Incomes', y: 40},
    ]}
        animate={{
            duration: 200
        }}
        labels={({datum})=> `${datum.y}+%`}
        labelComponent={<VictoryLabel
            angle={45}
            style={{
                fill: 'white',
            }
            }
        />}
    >
    </VictoryPie>
  )
}

export default ExpenseChart