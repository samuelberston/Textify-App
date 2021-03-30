// this is technically a helper function ?
function cronCode(timeObj) {
  let cron = '';
  // convert time object into (five star) cron code
  const { time } = timeObj;
  let {
    dayOfMonth, dayOfWeek, month,
  } = timeObj;
  const minute = parseInt(time.split(':')[1], 10);
  const hour = parseInt(time.split(':')[0], 10);

  if (dayOfWeek === null) {
    dayOfWeek = '*';
  }

  if (dayOfMonth === null) {
    dayOfMonth = '*';
  }

  if (month === null) {
    month = '*';
  }

  cron = [minute, hour, dayOfWeek, dayOfMonth, month].join(' ');
  return cron;
}

module.exports = cronCode;
