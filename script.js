const form = document.getElementById("budgetForm");
const nameInput = document.getElementById("name");
const amountInput = document.getElementById("amount");
const dateInput = document.getElementById("date");
const timeInput = document.getElementById("time");
const typeInput = document.getElementById("type");
const expensesList = document.getElementById("expensesList");
const incomeList = document.getElementById("incomeList");
const clearButton = document.getElementById("clearButton");

const incomeItems = [];
const expensesItems = [];

function updateLists(name, amount, date, time, type) {
  const item = {
    id: incomeItems.length + expensesItems.length + 1,
    name,
    amount,
    date,
    time,
  };

  if (type === "รายรับ") {
    incomeItems.push(item);
    const listItem = document.createElement("li");
    listItem.textContent = `${name} - ${amount} บาท - ${date} ${time}`;

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "ลบ";
    deleteButton.addEventListener("click", () => {
      if (!confirm("คุณต้องการลบรายการนี้หรือไม่?")) {
        return;
      }

      const index = incomeItems.findIndex(
        (incomeItem) => incomeItem.id === item.id,
      );
      if (index !== -1) {
        incomeItems.splice(index, 1);
      }
      listItem.remove();
      updateSummary();
    });

    listItem.appendChild(deleteButton);
    incomeList.appendChild(listItem);
  } else {
    expensesItems.push(item);
    const listItem = document.createElement("li");
    listItem.textContent = `${name} - ${amount} บาท - ${date} ${time}`;

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "ลบ";
    deleteButton.addEventListener("click", () => {
      if (!confirm("คุณต้องการลบรายการนี้หรือไม่?")) {
        return;
      }
      const index = expensesItems.findIndex(
        (expenseItem) => expenseItem.id === item.id,
      );
      if (index !== -1) {
        expensesItems.splice(index, 1);
      }
      listItem.remove();
      updateSummary();
    });

    listItem.appendChild(deleteButton);
    expensesList.appendChild(listItem);
  }
}

function updateSummary() {
  const totalIncome = incomeItems.reduce(
    (total, item) => total + item.amount,
    0,
  );
  const totalExpenses = expensesItems.reduce(
    (total, item) => total + item.amount,
    0,
  );
  const balance = totalIncome - totalExpenses;

  document.getElementById("income").textContent =
    `รายรับรวม: ${totalIncome} บาท`;
  document.getElementById("expenses").textContent =
    `รายจ่ายรวม: ${totalExpenses} บาท`;
  document.getElementById("balance").textContent =
    `ยอดเงินคงเหลือ: ${balance} บาท`;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = nameInput.value;
  const amount = parseFloat(amountInput.value);
  const date = dateInput.value;
  const time = timeInput.value;
  const type = typeInput.value;

  updateLists(name, amount, date, time, type);
  updateSummary();

  form.reset();
});

clearButton.addEventListener("click", () => {
  incomeItems.length = 0;
  expensesItems.length = 0;
  updateSummary();
});
