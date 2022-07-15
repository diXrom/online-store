const getAmount = <T>(arr: T[], key: keyof T): number => {
  return arr.reduce((acc, item) => {
    const value = item[key];
    if (typeof value === 'number') return value + acc;
    return 0;
  }, 0);
};
const compareType = (itemA: string | number | boolean, itemB: string | number | boolean, isAsc: boolean) => {
  if (typeof itemA === 'string' && typeof itemB === 'string') {
    return isAsc ? itemB.localeCompare(itemA) : itemA.localeCompare(itemB);
  }
  if (typeof itemA === 'number' && typeof itemB === 'number') {
    return isAsc ? itemA - itemB : itemB - itemA;
  }
  return 0;
};
export { getAmount, compareType };