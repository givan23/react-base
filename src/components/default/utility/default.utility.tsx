export const getSum = (n1: number, n2: number): number => {
  return n1 + n2;
};

type BuildDataType = {
  fullName: string;
};
export const buildData = (name: string, lastName: string): BuildDataType => {
  return { fullName: name + lastName };
};

export const getAuth = () => {
  throw new Error("authentication error");
};

export const getList = () => {
  return [{name: "Tom"}, {name: "Jerry"}]
};
