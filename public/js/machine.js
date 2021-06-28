// $('#machine-table').tablesort();
function generateCalendar(calendar) {
  let eventDates = [];
  const bucket = 0;
  const today = 1;
  const backup = 2;
  const id = 3;
  const dates = 4;
  const year = 2021;
  for (let i = 0; i < calendar[0].length; i++)
  {
    let className;
    if (calendar[bucket][i] !== 'false') 
    { 
      if (calendar[backup][i] !== '') className = 'positive';
      else className = 'negative machine-dashboard-link-non-selectable';
      if (calendar[today][i] === 'true') className += ' machine-dashboard-calendar-today-border'
    }
    else 
    {
      className = 'machine-dashboard-disabled'
      if (calendar[today][i] === 'true') className += ' machine-dashboard-calendar-today-border'
    }
    eventDates.push({date: new Date(calendar[dates][i]), class: className});
  }
  $('#inline_calendar')
    .calendar({
      eventDates: eventDates,
      disableMinute: true,
      type: 'date',
      onSelect: function(date, model) {
        date = String(date);
        filteredArray = calendar[dates].filter(calendar_dates => calendar_dates.includes(date.substring(0, date.indexOf(year) + 4)));
        window.location = '#backupevent-' + calendar[id][calendar[dates].indexOf(filteredArray[bucket]) + 1];
      }
    });
}