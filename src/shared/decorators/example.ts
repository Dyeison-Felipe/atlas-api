import { Data } from './data.decorator';

@Data()
class User {
  private _name: string;
  private _age: number;
  private _email: string;

  constructor(name: string, age: number, email: string) {
    this._name = name;
    this._age = age;
    this._email = email;
  }
}

// Example usage:
const user = new User('John Doe', 30, 'john@example.com');

// Getters and setters are automatically generated
console.log(user.name); // 'John Doe'
user.name = 'Jane Doe';
console.log(user.name); // 'Jane Doe'

console.log(user.age); // 30
user.age = 31;
console.log(user.age); // 31

console.log(user.email); // 'john@example.com'
user.email = 'jane@example.com';
console.log(user.email); // 'jane@example.com' 