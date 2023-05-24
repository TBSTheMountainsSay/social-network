export const updateObjectInArray = (items, itemId, newObjProps) => {
  return items.map((user) => {
    if (user.id === itemId) {
      return { ...user, ...newObjProps };
    }
    return user;
  });
};
