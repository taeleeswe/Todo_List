let input = prompt('What would you like to do for your ToDo list?');
const todos = ['Study Coding'];

while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('***************************');

        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('***************************');
    } else if (input === 'new') {
        const newTodo = prompt('What would you like to add your new ToDo list?');
        todos.push(newTodo);
        console.log(`${newTodo} is added on ToDo list`)
    } else if (input === 'delete') {
        const remove = parseInt(prompt("What Would you like to delete(index) on list?"));
        if (!Number.isNaN(remove)) {
            const deleted = todos.splice(remove, 1);
            console.log(`${deleted[0]} is delted`);
        } else {
            console.log('Try again to type number')
        }
    }
    input = prompt('What would you like to do for your ToDo list?');
}
console.log('Bye Bye');