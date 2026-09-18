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

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    const item = checkbox.closest('.habits__list--item');
    const status = item.querySelector('.item__status');

    if (checkbox.checked) {
      status.textContent = 'Completed'
    } else {
      status.textContent = 'Not done'
    }
  });
});