export default (array) => {
  let newArr = [];
  if (!Array.isArray(array)) {
    return newArr;
  }
  newArr = array.map((student) => student.id);
  return newArr;
};
