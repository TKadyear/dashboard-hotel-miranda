export const splitForPagination = (allItems, itemsPerPage = 10) => {
  let list = [];
  for (let pageNumber = 0; pageNumber < allItems.length; pageNumber += itemsPerPage) {
    const newList = allItems.slice(pageNumber, pageNumber + itemsPerPage);
    list.push(newList);
  }
  return list;
};
