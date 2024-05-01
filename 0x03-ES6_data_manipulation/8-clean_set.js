export default function (set, startString) {
  if (
    (!set && !startString && !(set instanceof Set) && typeof startString !== 'string') || startString === ''
  ) {
    return '';
  }
  return Array.from(set).filter((val) => val.startsWith(startString)).map((val) => val.slice(startString.length)).join('-');
}
