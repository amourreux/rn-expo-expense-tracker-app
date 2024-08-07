import { ExpenseModel } from "@/src/model";
import { Text, View } from "react-native";

export interface ExpensesListItemProps {
  expense: ExpenseModel;
}

const ExpensesListItem = ({ expense }: ExpensesListItemProps) => {
  return (
    <View>
      <Text>{expense.title}</Text>
      <Text>{expense.amount}</Text>
      <Text>{expense.date.toDateString()}</Text>
    </View>
  );
};

export default ExpensesListItem;
