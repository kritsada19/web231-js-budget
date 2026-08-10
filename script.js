const form = document.getElementById("budgetForm");
const nameInput = document.getElementById("name");
const amountInput = document.getElementById("amount");
const dateInput = document.getElementById("date");
const timeInput = document.getElementById("time");
const kindInput = document.getElementById("kind");

const incomeList = [];
const expensesList = [];

function addToList(name, amount, date, time, kind) {
    if(kind === "รายรับ") {
        incomeList.push(
            {
                "id": incomeList.length + 1,
                "name": name,
                "amount": amount,
                "date": date,
                "time": time,
                "kind": kind
            }
        )
    }
    console.log(incomeList)
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = nameInput.value;
    const amount = amountInput.value;
    const date = dateInput.value;
    const time = timeInput.value;
    const kind = kindInput.value;
    addToList(name, amount, date, time, kind);
})
