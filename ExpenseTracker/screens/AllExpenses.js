import { StyleSheet } from 'react-native';
import { ExpensesOutput } from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';
import { useContext } from 'react';

export function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  return (
    <ExpensesOutput expenses={expensesCtx.expenses} expensesPeriod='Total' fallbackText='No expenses register found!' />
  );
}

const styles = StyleSheet.create({});
