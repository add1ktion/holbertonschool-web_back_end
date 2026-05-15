const fs = require('fs');

function countStudents(path) {
  let data;

  try {
    data = fs.readFileSync(path, 'utf8');
  } catch (error) {
    throw new Error('Cannot load the database');
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
}

module.exports = countStudents;
