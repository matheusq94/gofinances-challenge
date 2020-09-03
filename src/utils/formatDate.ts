const formatDate = (date: Date): string => {
  const formattedDate = Intl.DateTimeFormat('pt-BR').format(
    new Date(String(date)),
  );

  return formattedDate;
}; // TODO

export default formatDate;
