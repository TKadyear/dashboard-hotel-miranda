export const splitForPagination = (allItems: Array<unknown>, itemsPerPage = 10): Array<unknown> => {
  const list = [];
  for (let pageNumber = 0; pageNumber < allItems.length; pageNumber += itemsPerPage) {
    const newList = [...allItems].slice(pageNumber, pageNumber + itemsPerPage);
    list.push(newList);
  }
  return list;
};
