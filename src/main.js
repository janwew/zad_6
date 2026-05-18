import './style.css';
import dayjs from 'dayjs';

const form = document.querySelector('#birthday-form');
const dateInput = document.querySelector('#date-input');
const dialogText = document.querySelector('#dialog-text');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const selectedDate = dayjs(dateInput.value);
  const today = dayjs().startOf('day');

  if (!selectedDate.isValid()) return;

  const daysPassed = today.diff(selectedDate, 'day');

  const BirthdayToday = selectedDate.date() === today.date() && selectedDate.month() === today.month();

  let message = `<p>Od Twoich narodzin upłynęło <strong>${daysPassed}</strong> dni.</p>`;

  if (BirthdayToday) {
    message += `<p class="font-bold text-xl mt-4">Wszystkiego najlepszego!</p>`;
  } else {
    let nextBirthday = selectedDate.year(today.year());
    
    if (nextBirthday.isBefore(today, 'day')) {
      nextBirthday = nextBirthday.add(1, 'year');
    }

    const weeksToBirthday = nextBirthday.diff(today, 'week');

    if (weeksToBirthday === 0) {
      message += `<p class="mt-4 font-semibold">Masz urodziny w tym tygodniu!</p>`;
    } else {
      message += `<p class="mt-4 text-sm">Do Twoich kolejnych urodzin pozostało: ${weeksToBirthday} tygodni.</p>`;
    }
  }

  dialogText.innerHTML = message;
});