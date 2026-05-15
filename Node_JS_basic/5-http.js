const http = require('http');
const fs = require('fs');

const databaseFile = process.argv[2];

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
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstName);
      });

      let report = `Number of students: ${total}`;
      const sortedFields = Object.keys(fields).sort((a, b) =>
        a.localeCompare(b, undefined, { sensitivity: 'base' })
      );

      sortedFields.forEach((field) => {
        report += `\nNumber of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`;
      });
      resolve(report);
    });
  });
}

const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const report = await countStudents(databaseFile);
      res.end(report);
    } catch (error) {
      res.end(error.message);
    }
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

app.listen(1245);

module.exports = app;