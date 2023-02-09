export const splitTitle: Function = (title: string): string => {
  const split = title.split(" ");
  const newTitle = `${split[0]} ${split[1]}`;
  return newTitle;
};
