// $('#machine-table').tablesort();

function generate_calendar(calendar) {
  let eventDates = [];
  console.log(calendar[3])
  for (let i = 0; i < calendar[0].length; i++)
  {
    let className;
    if (calendar[0][i] != 'false') 
    { 
      if (calendar[2][i] != '') className = 'positive';
      else className = 'negative machine-dashboard-link-non-selectable';
      if (calendar[1][i] === 'true') className += ' machine-dashboard-calendar-today-border'
    }
    else 
    {
      className = 'machine-dashboard-disabled'
      if (calendar[1][i] === 'true') className += ' machine-dashboard-calendar-today-border'
    }
    eventDates.push({date: new Date(calendar[4][i]), class: className});
  }
  $('#inline_calendar')
    .calendar({
      eventDates: eventDates,
      disableMinute: true,
      type: 'date',
      onSelect : function(date, model) {
        date = String(date)
        filtered_array = calendar[4].filter(calendar_dates => calendar_dates.includes(date.substring(0, date.indexOf(2020) + 4)))
        window.location = '#backupevent-' + calendar[3][calendar[4].indexOf(filtered_array[0]) + 1]
      }
    });
}


