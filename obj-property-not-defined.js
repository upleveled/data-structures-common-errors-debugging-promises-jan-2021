function greetName(person) {
  console.log(`Hello ${person.name}`);
}

const personKarl = { name: 'Karl' };

greetName(personKarl); // Hello Karl
greetName({ name: 'Janos' }); // Hello Janos

// TypeError: Cannot read property 'name' of undefined
// This is because the "person" parameter is not being passed here.
// This passes in `undefined`, which leads to the `greetName`
// function trying to access `.name` on `undefined` 💥
greetName();
