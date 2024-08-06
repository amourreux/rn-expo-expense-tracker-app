import DUMMY_EXPENSES from "@/src/data/Expenses.dummy";
import { useState } from "react";
import { View } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const ExpenseOutput = ({ period }) => {
  const [expenses] = useState(DUMMY_EXPENSES);
  console.log(expenses);
  return (
    <View>
      <ExpensesSummary expenses={expenses} period={period} />
      <ExpensesList expenses={expenses} />
    </View>
  );
};

export default ExpenseOutput;
