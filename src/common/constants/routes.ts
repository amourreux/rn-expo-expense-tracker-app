const routes = {
  stack: {
    screens: {
      manageExpense: "ManageExpenseScreen",
    },
    bottomStacks: {
      expenseOverview: "ExpenseOverview",
      screens: {
        recentExpenses: "RecentExpensesScreen",
        allExpenses: "AllExpensesScreen",
      },
    },
  },
};

export default routes;
