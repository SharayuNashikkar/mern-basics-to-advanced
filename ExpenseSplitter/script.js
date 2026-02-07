let friends = [];
let expenses = [];

function addFriend() {
  const name = document.getElementById("friendName").value.trim();
  if (!name) return;

  friends.push({ name, balance: 0 });
  document.getElementById("friendName").value = "";

  updateFriendsUI();
}

function updateFriendsUI() {
  const list = document.getElementById("friendsList");
  const select = document.getElementById("paidBy");

  list.innerHTML = "";
  select.innerHTML = "";

  friends.forEach(friend => {
    list.innerHTML += `<li>${friend.name}</li>`;
    select.innerHTML += `<option value="${friend.name}">${friend.name}</option>`;
  });
}

function addExpense() {
  const desc = document.getElementById("expenseDesc").value;
  const amount = parseFloat(document.getElementById("expenseAmount").value);
  const paidBy = document.getElementById("paidBy").value;

  if (!desc || !amount || !paidBy) return;

  expenses.push({ desc, amount, paidBy });

  document.getElementById("expenseList").innerHTML +=
    `<li>${desc} - ₹${amount} (Paid by ${paidBy})</li>`;

  document.getElementById("expenseDesc").value = "";
  document.getElementById("expenseAmount").value = "";
}

function calculateSplit() {
  const result = document.getElementById("result");
  result.innerHTML = "";

  const splitAmount = expenses.reduce((sum, e) => sum + e.amount, 0) / friends.length;

  friends.forEach(friend => friend.balance = -splitAmount);

  expenses.forEach(exp => {
    const payer = friends.find(f => f.name === exp.paidBy);
    payer.balance += exp.amount;
  });

  friends.forEach(friend => {
    const status = friend.balance > 0
      ? `gets ₹${friend.balance.toFixed(2)}`
      : `owes ₹${Math.abs(friend.balance).toFixed(2)}`;

    result.innerHTML += `<li>${friend.name} ${status}</li>`;
  });
}
