export const calculateTotal = (elements: Array<number>) => {
  const total = elements.reduce((sum, element) => {
    return sum + element;
  }, 0);

  return +total.toFixed(2);
};

export const calculateMean = (elements: Array<number>) => {
  const mean = calculateTotal(elements) / elements.length;
  return +mean.toFixed(2);
};

export const calculatePercentageRatio = (
  metric: number,
  totalAccountable: number,
) => {
  return +((metric / totalAccountable) * 100).toFixed(2);
};
