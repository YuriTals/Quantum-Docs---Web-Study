function toggleDarkMode() {
  const body = document.body;
  const toggleDarkMode = document.getElementById('toggleDarkMode');
  body.classList.toggle('dark-mode');
  toggleDarkMode.classList.toggle('dark-mode');
  body.style.backgroundColor = body.classList.contains('dark-mode') ? '#161B22' : '#FFF';
}
