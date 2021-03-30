function cronCode(timeObj) {
  // convert time object into (five star) cron code
  const { dayOfMonth, dayOfWeek, month, time } = timeObj;
  // dayOfMonth: "1"
  // dayOfWeek: "Wednesday"
  // month: "2021-03"
  // time: "17:34"
  const minute = parseInt(time.split(':')[1], 10);
  const hour = parseInt(time.split(':')[0], 10);

}

module.exports = cronCode;
