function showPage(pageId) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");
}
let users = [];
let currentUser = '';
let leaveData = [];

function register() {
  const username = document.getElementById("register-username").value;
  const password = document.getElementById("register-password").value;

  if (!username || !password) return alert("Enter all details.");
  users.push({ username, password });
  alert("Registered successfully!");
  showPage("login-page");
}

function login() {
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return alert("Invalid credentials.");

  currentUser = username;
  showPage("apply-page");
}

function submitLeave() {
  const name = document.getElementById('leave-name').value;
  const date = document.getElementById('leave-date').value;
  const day = document.getElementById('leave-day').value;
  const reason = document.getElementById('leave-reason').value;
  const days = document.getElementById('leave-days').value;

  if (!name || !date || !day || !reason || !days) return alert("Fill all fields.");

  leaveData.push({ name, date, day, reason, days });
  updateLeaveSummary();
  showPage('status-page');
}

function updateLeaveSummary() {
  const tbody = document.getElementById('summary-table-body');
  tbody.innerHTML = '';
  leaveData.forEach(entry => {
    const row = `<tr>
      <td>${entry.date}</td>
      <td>${entry.day}</td>
      <td>${entry.reason}</td>
      <td>${entry.days}</td>
    </tr>`;
    tbody.innerHTML += row;
  });
}

function logout() {
  currentUser = '';
  showPage("login-page");
}
