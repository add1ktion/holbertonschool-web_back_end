const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim());
      lines.shift();

      const fields = {};
      let total = 0;

      lines.forEach((line) => {
        const parts = line.split(',');
        if (parts.length !== 4) return;

        const firstName = parts[0].trim();
        const field = parts[3].trim();

        if (!firstName || !field) return;

        total += 1;
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstName);
      });

      console.log(`Number of students: ${total}`);

      Object.keys(fields)
        .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))
        .forEach((field) => {
          console.log(
            `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`,
          );
        });

      resolve();
    });
  });
}

module.exports = countStudents;
