import { ExpenseModel } from "../model";

function generateDummyData(count: number): ExpenseModel[] {
  const dummyData: ExpenseModel[] = [];
  const titles = [
    "Groceries",
    "Utilities",
    "Rent",
    "Transportation",
    "Entertainment",
    "Dining Out",
    "Healthcare",
    "Insurance",
  ];

  for (let i = 0; i < count; i++) {
    const expense: ExpenseModel = {
      id: (i + 1).toString(),
      title: titles[Math.floor(Math.random() * titles.length)],
      amount: parseFloat((Math.random() * 1000).toFixed(2)),
      date: new Date(
        new Date().setDate(
          new Date().getDate() - Math.floor(Math.random() * 30)
        )
      ),
    };
    dummyData.push(expense);
  }

  return dummyData;
}

const DUMMY_EXPENSES = generateDummyData(10);

export default DUMMY_EXPENSES;
