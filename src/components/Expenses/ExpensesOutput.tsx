import { View } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const ExpenseOutput = () => {
  return (
    <View>
      <ExpensesSummary expenses={[]} period="ph" />
      <ExpensesList expenses={[]} />
    </View>
  );
};

export default ExpenseOutput;
