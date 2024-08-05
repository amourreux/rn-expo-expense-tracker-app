import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { routes } from "./src/common/constants";
import AllExpensesScreen from "./src/screens/AllExpenses";
import ManageExpenseScreen from "./src/screens/ManageExpense";
import RecentExpenseScreen from "./src/screens/RecentExpense";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const ExpensesOverviewTabs = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen
        name={routes.stack.bottomStacks.screens.recentExpenses}
        component={RecentExpenseScreen}
      />
      <BottomTabs.Screen
        name={routes.stack.bottomStacks.screens.allExpenses}
        component={AllExpensesScreen}
      />
    </BottomTabs.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={routes.stack.bottomStacks.expenseOverview}
            component={ExpensesOverviewTabs}
          ></Stack.Screen>
          <Stack.Screen
            name={routes.stack.screens.manageExpense}
            component={ManageExpenseScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
