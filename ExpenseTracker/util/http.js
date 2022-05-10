import axios from 'axios';

const BASE_URL =
  'https://react-native-course-51e2e-default-rtdb.firebaseio.com/';

export function storeExpense(expenseData) {
  axios.post(BASE_URL + 'expenses.json', expenseData);
}
