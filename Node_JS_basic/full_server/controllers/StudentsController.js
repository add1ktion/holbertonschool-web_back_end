import readDatabase from '../utils.js';

export default class StudentsController {
  static getAllStudents(_request, response) {
    const databaseFile = process.argv[2];

    return readDatabase(databaseFile)
      .then((data) => {
        const fields = Object.keys(data).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
        let totalStudents = 0;

        fields.forEach((field) => {
          totalStudents += data[field].length;
        });

        let output = 'This is the list of our students';
        output += `\nNumber of students: ${totalStudents}`;

        fields.forEach((field) => {
          output += `\nNumber of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}`;
        });

        response.status(200).send(output);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const major = request.params.major;
    if (!['CS', 'SWE'].includes(major)) {
      return response.status(500).send('Major parameter must be CS or SWE');
    }

    const databaseFile = process.argv[2];

    return readDatabase(databaseFile)
      .then((data) => {
        const students = data[major] || [];
        response.status(200).send(`List: ${students.join(', ')}`);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}
