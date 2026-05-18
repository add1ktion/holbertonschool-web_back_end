const express = require('express');
const fs = require('fs');

const app = express();
const databaseFile = process.argv[2];

function readDatabase(path) {
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
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstName);
      });
      resolve({ total, fields });
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const { total, fields } = await readDatabase(databaseFile);
    let output = 'This is the list of our students\n';
    output += `Number of students: ${total}`;

    Object.keys(fields)
      .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))
      .forEach((field) => {
        output += `\nNumber of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`;
      });
    res.send(output);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get('/students/:major', async (req, res) => {
  const { major } = req.params;
  if (major !== 'CS' && major !== 'SWE') {
    res.status(500).send('Major parameter must be CS or SWE');
    return;
  }
  try {
    const { fields } = await readDatabase(databaseFile);
    const list = fields[major] ? fields[major].join(', ') : '';
    res.send(`List: ${list}`);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(1245);

module.exports = app;