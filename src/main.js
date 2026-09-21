const currentDate = document.querySelector('#current-date');

const today = new Date();

const formattedDate = today.toLocaleDateString('en-US', {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric'
});

currentDate.textContent = formattedDate;


const checkboxes = document.querySelectorAll('.item__checkbox');
const progressFill = document.querySelector('.progress-line__fill');
const progressPercent = document.querySelector('.progress-line__percent');
const progressCounter = document.querySelector('.progress-line__counter p')

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    const item = checkbox.closest('.habits__list--item');
    const status = item.querySelector('.item__status');

    if (checkbox.checked) {
      status.textContent = 'Completed'
    } else {
      status.textContent = 'Not done'
    }

    updateProgress();
  });
});

function updateProgress() {
  const total = checkboxes.length;

  const completed = document.querySelectorAll(
    '.item__checkbox:checked'
  ).length

  let percent;

  if (total === 0) {
    percent = 0;
  } else {
    percent = Math.round((completed / total) * 100);
  }

  progressFill.style.width = `${percent}%`;
  progressPercent.textContent = `${percent}%`;
  progressCounter.textContent = `${completed} of ${total} completed`;
}

updateProgress();