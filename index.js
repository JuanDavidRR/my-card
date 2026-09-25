function updateRoleTitle() {
  const roleTitle = document.getElementById("role-title");
  if (roleTitle) {
    roleTitle.textContent = "Frontend Engineer";
  }
}

setTimeout(updateRoleTitle, 5000);
