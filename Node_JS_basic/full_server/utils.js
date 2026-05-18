import fs from 'fs';

const readDatabase = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', (error, data) => {
    if (error) {
      reject(error);
      return;
    }

    const lines = data.split('\n').filter((line) => line.trim().length > 0);
    if (lines.length > 0) {
      lines.shift();
    }

    const result = {};

    lines.forEach((line) => {
      const parts = line.split(',');
      if (parts.length !== 4) return;

      const firstName = parts[0].trim();
      const field = parts[3].trim();

      if (!firstName || !field) return;

      if (!result[field]) {
        result[field] = [];
      }
      result[field].push(firstName);
    });

    resolve(result);
  });
});

export default readDatabase;
