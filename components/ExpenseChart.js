import React from 'react'
import { useGlobalState } from '../context/GlobalState2'
import { VictoryPie,VictoryLabel } from 'victory'


function ExpenseChart() {
    const {transactions} =  useGlobalState()
  
    const totalIncome = 
        transactions
            .filter((transaction)=> transaction.monto > 0)
            .reduce((acc,transaction)=>(acc += transaction.monto),0)

    const totalExpenses = 
        transactions
            .filter((transaction)=> transaction.monto < 0)
            .reduce((acc,transaction)=>(acc += transaction.monto),0)*-1


    const totalExpensesPercentage = Math.round((totalExpenses / totalIncome)*100)
    console.log(totalExpensesPercentage)

    const totalIncomePercentage = 100 - totalExpensesPercentage
    console.log(totalIncomePercentage)
    return (
    <VictoryPie 
        colorScale={["#e74c3c", "#2ecc71"]}
    data={[
        {x: 'Expenses', y: totalExpensesPercentage || 0},
        {x: 'Incomes', y: totalIncomePercentage || 0},
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