import { StyleSheet, View } from 'react-native';
import { ExpensesList } from './ExpensesList';
import { ExpensesSummary } from './ExpensesSummary';

export function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      <ExpensesList />
    </View>
  );
}

const styles = StyleSheet.create({});
