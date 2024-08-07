import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { globalStyles, routes, strings } from "./src/common/constants";
import AllExpensesScreen from "./src/screens/AllExpenses";
import ManageExpenseScreen from "./src/screens/ManageExpense";
import RecentExpenseScreen from "./src/screens/RecentExpense";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const ExpensesOverviewTabs = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: globalStyles.colors.primary500 },
        headerTintColor: globalStyles.colors.white,
        tabBarStyle: { backgroundColor: globalStyles.colors.primary500 },
        tabBarActiveTintColor: globalStyles.colors.accent500,
      }}
    >
      <BottomTabs.Screen
        name={routes.stack.bottomStacks.screens.recentExpenses}
        component={RecentExpenseScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
          title: strings.tabs.recent,
        }}
      />
      <BottomTabs.Screen
        name={routes.stack.bottomStacks.screens.allExpenses}
        component={AllExpensesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
          title: strings.tabs.all,
        }}
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
            options={{ headerShown: false }}
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
