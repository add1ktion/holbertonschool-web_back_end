export default class AppController {
  static getHomepage(_request, response) {
    return response.status(200).send('Hello Holberton School!');
  }
}
