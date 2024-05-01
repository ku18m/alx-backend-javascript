export default function (set, startString) {
  if (
    !set && !startString && !(set instanceof Set) && typeof startString !== 'string'
  ) {
    return '';
  }

  const suffixStrs = [];

  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const suffix = value.substring(startString.length);

      if (suffix && suffix !== value) {
        suffixStrs.push(suffix);
      }
    }
  }
  return suffixStrs.join('-');
}
