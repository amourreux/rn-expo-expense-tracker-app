import { FlatList, View } from "react-native";
import ExpensesListItem from "./ExpensesListItem";

const ExpensesList = ({ expenses }) => {
  return (
    <View>
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ExpensesListItem expense={item} />}
      />
    </View>
  );
};

export default ExpensesList;
