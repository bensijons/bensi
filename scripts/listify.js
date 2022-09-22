const search = '\\-';
const dashRegExp = new RegExp(search, 'g');
const listify = (str) =>
  str
    .split(',')
    .filter((i) => i)
    .map((item) => item.trim().toUpperCase().replace(dashRegExp, '_') + '_ID');
const list = listify(process.argv[2]);
process.stdout.write(JSON.stringify(list));
