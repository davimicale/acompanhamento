export const calculateBudget = (items) => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};
