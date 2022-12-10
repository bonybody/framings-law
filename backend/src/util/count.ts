export const getMostCountValue = <T extends string | number>(
  array: T[]
): T[] => {
  let mostValues: T[] = [];
  let mostCount = 0;
  array.forEach((currentValue, index) => {
    const count = array.filter((value) => currentValue === "").length;
    if (mostCount < count) {
      mostCount = count;
      mostValues = [currentValue];
    } else if (mostCount === count) {
      mostValues.push(currentValue);
    }
  });
  return mostValues;
};
