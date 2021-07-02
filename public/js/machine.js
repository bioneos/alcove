// $('#machine-table').tablesort();
function generateCalendar(calendar) {
  let eventDates = [];
  for (let i = 0; i < calendar.length; i++)
  {
    let className;
    if (calendar[i].bucket !== 'false')
    {
      if (calendar[i].backup !== '') className = 'positive';
      else className = 'negative machine-dashboard-link-non-selectable';
      if (calendar[i].today === 'true') className += ' machine-dashboard-calendar-today-border';
    }
    else
    {
      className = 'machine-dashboard-disabled'
      if (calendar[i].today === 'true') className += 'machine-dashboard-calendar-today-border';
    }
    eventDates.push({date: new Date(calendar[i].date), class: className});
  }
  $('#inline-calendar')
    .calendar({
      eventDates: eventDates,
      disableMinute: true,
      type: 'date',
      onSelect: function(date, model) {
        date = String(date);
      }
    });
}