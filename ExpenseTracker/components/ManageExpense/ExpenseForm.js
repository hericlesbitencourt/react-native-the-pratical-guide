import { StyleSheet, Text, View } from 'react-native'
import { Input } from './Input'

export function ExpenseForm() {
    function amountChangeHandler() {}
  return (
    <View>
      <Input label='Amount' textInputConfig={{
          keyboardType: 'decimal-pad',
          onChange: amountChangeHandler
      }} />
      <Input label='Date' textInputConfig={{
          placeholder: 'YYYY-MM-DD',
          maxLength: 10,
          onChange: () => {}
      }} />
      <Input label='Description' textInputConfig={{
          
      }} />
    </View>
  )
}

const styles = StyleSheet.create({})