import { StyleSheet, View } from 'react-native';
import { ExpensesList } from './ExpensesList';
import { ExpensesSummary } from './ExpensesSummary';

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2021-12-19')
    },
    {
        id: 'e2',
        description: 'A pair of trousers',
        amount: 89.99,
        date: new Date('2022-01-06')
    },
    {
        id: 'e3',
        description: 'Some bananas',
        amount: 6.99,
        date: new Date('2021-12-24')
    },
    {
        id: 'e4',
        description: 'A book',
        amount: 76.99,
        date: new Date('2022-02-08')
    },
    {
        id: 'e5',
        description: 'Another book',
        amount: 26.99,
        date: new Date('2022-03-18')
    },
]

export function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList />
    </View>
  );
}

const styles = StyleSheet.create({});
