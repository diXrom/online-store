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

const filterByValue = <T>(arr: T[], filters: [keyof T, number[] | string[] | boolean[]][]) => {
  return filters.reduce((acc, [key, filter]) => {
    return acc.filter(item => filter.length ? filter.some((value) => {
      const itemValue = item[key];
      if (typeof itemValue === 'number' && typeof value === 'number') return itemValue === value;
      if (typeof itemValue === 'string' && typeof value === 'string') return itemValue === value;
      if (typeof itemValue === 'boolean' && typeof value === 'boolean') return itemValue === value;
      return false;
    }) : true);
  }, arr);
};
const filterByRange = <T>(arr: T[], filters: [keyof T, [number, number]][]) => {
  return filters.reduce((acc, [key, [min, max]]) => {
    return acc.filter(item => {
      const itemValue = item[key];
      if (typeof itemValue === 'number') return max >= itemValue && itemValue >= min;
      return false;
    });
  }, arr);
};

export { getAmount, compareType, filterByRange, filterByValue };
