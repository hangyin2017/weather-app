const TimeToDay = (time) => {
  return new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(new Date(time));
}

export default TimeToDay;