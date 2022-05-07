import { StyleSheet, View } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import { initialState } from '../../store/expenses-context';
import { ExpensesList } from './ExpensesList';
import { ExpensesSummary } from './ExpensesSummary';


export function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={initialState} periodName={expensesPeriod} />
      <ExpensesList expenses={initialState} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 24,
        backgroundColor: GlobalStyles.colors.primary700
    }
});
