export default function (set, value) {
  if (
    (!set && !value && !(set instanceof Set) && typeof value !== 'string') || value === ''
  ) {
    return '';
  }
  return Array.from(set).filter((val) => val.startsWith(value)).map((val) => val.slice(value.length)).join('-');
}
