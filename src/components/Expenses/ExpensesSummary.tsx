import { ExpenseModel } from "@/src/model";
import { Text, View } from "react-native";

interface ExpensesSummaryProps {
  expenses: Array<ExpenseModel>;
  period: string;
}

const ExpensesSummary = ({ expenses, period }: ExpensesSummaryProps) => {
  // todo: maybe use useMemo
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View>
      <Text>{period}</Text>
      <Text> {expensesSum}</Text>
    </View>
  );
};

export default ExpensesSummary;
