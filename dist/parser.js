

const csv2json = (csv, delimiter = ';') => {
    var titles = csv.slice(0, csv.indexOf('\n')).split(delimiter);
    const rows = csv.slice(csv.indexOf('\n') + 1).split('\n');
    return rows.map(row => {
        const values = row.split(delimiter);
        return titles.reduce((object, current, index) =>
            (object[current.trim()] = values[index], object), {});
    });
}

const csvFile2json = (file, delimiter) = new Promise((resolve, reject) => {
    try {
        if (file.name.split('.').pop() === "csv") {
            var reader = new FileReader();
            reader.readAsText(file);
            reader.onload = () => {
                let csvToString = reader.result;
                resolve(csv2json(csvToString, delimiter));
            };
        } else {
            reject(error);
        }
    } catch (error) {
        reject(error);
    }
});
