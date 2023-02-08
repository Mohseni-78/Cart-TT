export const splitTitle = (title: string) => {
  const split = title.split(" ");
  const newTitle = `${split[0]} ${split[1]}`;
  return newTitle;
};
