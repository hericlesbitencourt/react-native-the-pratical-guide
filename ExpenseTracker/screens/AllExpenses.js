import { StyleSheet } from 'react-native';
import { ExpensesOutput } from '../components/ExpensesOutput/ExpensesOutput';

export function AllExpenses() {
  return <ExpensesOutput expensesPeriod='Total' />;
}

const styles = StyleSheet.create({});
