# ES6 Classes

Markdown
# ES6 Classes 🏗️

This project covers the implementation of classes in JavaScript (ES6), including constructors, inheritance, static methods, and getters/setters.

## Tasks 📋

- **[0. You used to attend a place like this at some point](./0-classroom.js)**
  - Implement a class named `ClassRoom` that accepts one attribute named `maxStudentsSize` (Number) and assigned to `_maxStudentsSize`.

- **[1. Let's make some classrooms](./1-make_classrooms.js)**
  - Import the `ClassRoom` class and implement a function named `initializeRooms`. It should return an array of 3 `ClassRoom` objects with the sizes 19, 20, and 34 (in this order).

- **[2. A Course, Getters, and Setters](./2-hbtn_course.js)**
  - Implement a class named `HolbertonCourse`. It should verify the type of attributes (`name`, `length`, `students`) during object creation and implement getters and setters for each.

- **[3. Methods, static methods, computed methods names..... MONEY](./3-currency.js)**
  - Implement a class named `Currency` with a method named `displayFullCurrency` that returns the attributes in the format `name (code)`.

- **[4. Pricing](./4-pricing.js)**
  - Import the `Currency` class and implement a class named `Pricing`. It should include a method `displayFullPrice` and a static method `convertPrice`.

- **[5. A Building](./5-building.js)**
  - Implement a class named `Building`. This class should be considered abstract, ensuring any class that extends it overrides the `evacuationWarningMessage` method.

- **[6. Inheritance](./6-sky_high.js)**
  - Implement a class named `SkyHighBuilding` that extends from `Building`. It should override the `evacuationWarningMessage` method.

- **[7. Airport](./7-airport.js)**
  - Implement a class named `Airport`. The default string description of the class should return the airport `code`.

- **[8. Primitive - Holberton Class](./8-hbtn_class.js)**
  - Implement a class named `HolbertonClass`. When the class is cast into a `Number`, it returns the `size`; when cast into a `String`, it returns the `location`.

- **[9. Hoisting](./9-hoisting.js)**
  - Fix the provided code to make it work by handling hoisting issues with class declarations.

- **[10. Vroom](./10-car.js)**
  - Implement a class named `Car` with a method named `cloneCar` that returns a new object of the class using ES6 Symbols.