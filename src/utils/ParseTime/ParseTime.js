const toDayShort = (time) => {
  return new Intl.DateTimeFormat('en-AU', { weekday: 'short' }).format(new Date(time));
}

const toDayTime = (time) => {
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    weekday: 'long',
  };
  return new Intl.DateTimeFormat('en-AU', options).format(new Date(time));
}

export { toDayShort, toDayTime };