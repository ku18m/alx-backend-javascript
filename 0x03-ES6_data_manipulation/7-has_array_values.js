export default (set, values) => values.every((value) => set.has(value));
