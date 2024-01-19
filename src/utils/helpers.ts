export const convertDateFormat = (dateString: string) => {
  const date = new Date(dateString);
  const hours = date.getUTCHours().toString();
  const minutes = date.getUTCMinutes().toString();

  return `${hours}:${minutes}`;
};
