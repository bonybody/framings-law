import dayjs from "dayjs";

export const getNow = () => {
  return dayjs();
};

export const fromDate = (date: Date) => {
  return dayjs(date);
};

export const addSeconds = (dayjsObj: dayjs.Dayjs, addSeconds: number) => {
  return dayjsObj.add(addSeconds, "s");
};
