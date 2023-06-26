const dateRangePicker = {
  startDateInput: null,
  endDateInput: null,
  startDate: null,
  endDate: null,

  createCalendar() {
    const calendar = document.createElement('div');
    calendar.classList.add('calendar');

    return calendar;
  },

  showCalendar() {
    const calendar = dateRangePicker.createDateRangePicker();
    document.body.appendChild(calendar);
  },

  hideCalendar() {
    const calendar = document.querySelector('.calendar');
    if (calendar) {
      calendar.remove();
    }
  },

  createDateRangePicker() {
    const dateRangePicker = document.createElement('div');
    dateRangePicker.classList.add('daterange-picker');

    dateRangePicker.startDateInput = document.createElement('input');
    dateRangePicker.startDateInput.type = 'text';
    dateRangePicker.startDateInput.placeholder = 'Start Date';
    dateRangePicker.appendChild(dateRangePicker.startDateInput);

    dateRangePicker.endDateInput = document.createElement('input');
    dateRangePicker.endDateInput.type = 'text';
    dateRangePicker.endDateInput.placeholder = 'End Date';
    dateRangePicker.appendChild(dateRangePicker.endDateInput);

    dateRangePicker.startDate = null;
    dateRangePicker.endDate = null;

    return dateRangePicker;
  }
};
