import { User } from './models/User';

const user = new User({ name: 'new record', age: 0 });

// A quick reminder on accessors
// class Person {
//     constructor(public firstName: string, public lastName: string) {}

//     // getter allows you to not have to call a function
//     get fullName(): string {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// const person = new Person('firstname', 'lastname');
// console.log(person.fullName);

user.on('change', () => {
    console.log('user was changed');
});