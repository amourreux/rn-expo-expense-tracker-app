import { FlatList, Text, View } from "react-native";

const ExpensesList = ({ expenses }) => {
  return (
    <View>
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        renderItem={() => <Text>placeholder</Text>}
      />
    </View>
  );
};

export default ExpensesList;
