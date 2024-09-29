export const verifyItems = (items, stock) => {
  return items.every(item => stock.includes(item.name));
};
