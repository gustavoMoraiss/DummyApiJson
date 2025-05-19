export const formatUSD = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
};

export const formatDateToReadable = (isoDate: string): string => {
  const date = new Date(isoDate);

  return date.toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
};

export const formatDecimal = (value: number): string => {
  if (Number.isInteger(value)) {
    return `${value}.0`;
  }

  return value.toFixed(1);
};
