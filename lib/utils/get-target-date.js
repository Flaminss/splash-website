export const getTargetDate = () => {
  const date = new Date();
  date.setUTCDate(date.getUTCDate() + 13); // Add 13 days to the current date
  date.setUTCHours(0);
  date.setUTCMinutes(0);
  date.setUTCSeconds(0);
  date.setUTCMilliseconds(0);
  return date;
};
