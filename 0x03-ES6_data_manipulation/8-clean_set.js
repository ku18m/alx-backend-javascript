export default function (set, value) {
  return value !== '' ? Array.from(set).filter((val) => val.startsWith(value)).map((val) => val.slice(value.length)).join('-') : '';
}
