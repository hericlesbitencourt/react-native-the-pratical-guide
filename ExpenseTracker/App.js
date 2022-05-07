import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { RecentExpenses } from './screens/RecentExpenses';
import { AllExpenses } from './screens/AllExpenses';
import { ManageExpense } from './screens/ManageExpense';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function ExpensesOverview() {
  return <BottomTab.Navigator>
    <BottomTab.Screen name='RecentExpenses' component={RecentExpenses} />
    <BottomTab.Screen name='AllExpenses' component={AllExpenses} />
  </BottomTab.Navigator>
}

export default function App() {
  return (
    <>
      <StatusBar style='auto' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='ManageExpense' component={ManageExpense} />
          <Stack.Screen name='ExpensesOverview' component={ExpensesOverview} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
