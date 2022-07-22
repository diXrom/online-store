import { ObjectEntries, ObjectType, ICard } from '../types';

function getTypedObjectEntries<OBJ_T extends ObjectType>(obj: OBJ_T): ObjectEntries<OBJ_T> {
  return Object.entries(obj) as ObjectEntries<OBJ_T>;
}

const convertArrayByValue = (arr: string[]) => {
  const arrParse: [keyof ICard, ICard[keyof ICard]][] = arr.map(item => JSON.parse(item));
  const arrObject = arrParse.reduce((acc, [key, value]) => {
    acc[key] = [...acc[key] || [], value];
    return acc;
  }, {} as Record<keyof ICard, ICard[keyof ICard][]>);
  return getTypedObjectEntries(arrObject);
};

const getAmount = <T>(arr: T[], key: keyof T): number => {
  return arr.reduce((acc, item) => {
    const value = item[key];
    if (typeof value === 'number') return value + acc;
    return 0;
  }, 0);
};

const compareType = <T,K>(itemA: T, itemB: K, isAsc: boolean) => {
  if (typeof itemA === 'string' && typeof itemB === 'string') {
    return isAsc ? itemB.localeCompare(itemA) : itemA.localeCompare(itemB);
  }
  if (typeof itemA === 'number' && typeof itemB === 'number') {
    return isAsc ? itemA - itemB : itemB - itemA;
  }
  return 0;
};

const filterByValue = <T>(arr: T[], filters: [keyof T, T[keyof T][]][]) => {
  return filters.reduce((acc, [key, filter]) => {
    return acc.filter(item => filter.length ? filter.some((value) => {
      const itemValue = item[key];
      return itemValue === value;
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

export { getAmount, compareType, filterByRange, filterByValue, convertArrayByValue };
