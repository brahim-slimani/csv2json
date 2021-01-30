

const csv2json = (csv, delimiter = ';') => {
    var titles = csv.slice(0, csv.indexOf('\n')).split(delimiter);
    const rows = csv.slice(csv.indexOf('\n') + 1).split('\n');
    return rows.map(row => {
        const values = row.split(delimiter);
        return titles.reduce((object, current, index) =>
            (object[current.trim()] = values[index], object), {});
    });
}
