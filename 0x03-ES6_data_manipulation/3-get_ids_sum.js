export default (array) => {
  let newArr = [];
  if (!Array.isArray(array)) {
    return newArr;
  }
  newArr = array.reduce((acc, student) => acc + student.id, 0);
  return newArr;
};
