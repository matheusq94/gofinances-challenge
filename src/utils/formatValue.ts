const formatValue = (value: number): string => {
  const formattedValue = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

  return formattedValue;
}; // TODO

export default formatValue;
