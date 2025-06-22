const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const sideMenu = document.getElementById('side-menu');

menuToggle.addEventListener('click', () => {
  sideMenu.classList.add('active');
  document.body.classList.add('menu-open');
});

menuClose.addEventListener('click', () => {
  sideMenu.classList.remove('active');
  document.body.classList.remove('menu-open');
});

// Cerrar menú al hacer clic en un link
document.querySelectorAll('.menu-link, .submenu-link').forEach(link => {
  link.addEventListener('click', () => {
    sideMenu.classList.remove('active');
    document.body.classList.remove('menu-open');
  });
});

const calendar = document.getElementById('calendar');

  const headers = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sab', 'Dom'];
  headers.forEach(day => {
    const header = document.createElement('div');
    header.className = 'day-header';
    header.textContent = day;
    calendar.appendChild(header);
  });

  // Simulamos junio 2025: empieza en domingo (día 0), 30 días
  const totalDays = 30;
  const startDayOffset = 6; // empieza en domingo = columna 7

  for (let i = 0; i < startDayOffset; i++) {
    const empty = document.createElement('div');
    calendar.appendChild(empty);
  }

  for (let i = 1; i <= totalDays; i++) {
    const day = document.createElement('div');
    day.className = 'day';
    day.textContent = i;

    day.addEventListener('click', () => {
      document.querySelectorAll('.day').forEach(d => d.classList.remove('selected'));
      day.classList.add('selected');
    });

    calendar.appendChild(day);
  }