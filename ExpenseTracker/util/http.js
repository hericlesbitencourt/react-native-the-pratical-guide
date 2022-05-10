import axios from 'axios';

const BASE_URL =
  'https://react-native-course-51e2e-default-rtdb.firebaseio.com';

export function storeExpense(expenseData) {
  axios.post(BASE_URL + '/expenses.json', expenseData);
}

export async function fetchExpenses() {
  const response = await axios.get(BASE_URL + '/expenses.json');

  const expenses = [];

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }

  return expenses;
}
