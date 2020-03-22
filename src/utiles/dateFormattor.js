const dataFormattor = date => {
  let dateObject = {};
  dateObject.year = new Date(date).getFullYear();
  dateObject.newDate = new Date(date);
  return dateObject;
};

export default dataFormattor;
