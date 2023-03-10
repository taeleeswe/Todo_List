//for no infinite loof
let input = prompt('What Would you like to do?');
const todos = [];
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('****************');
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('****************');
    } else if (input === 'new') {
        const newTodo = prompt('Enter the new todo');
        todos.push(newTodo);
        console.log(`${newTodo} added to list`);
    } else if (input === 'delete') {
        const remove = parseInt(prompt('what do you want to delete on todo list(index)?'));
        if (!Number.isNaN(remove)) {
            const deleted = todos.splice(remove, 1);
            console.log(`${deleted[0]} is deleted`);
        } else {
            console.log('UnKnown Index');
        }
    }
    input = prompt('What Would you like to do?');
}
console.log('OK, YOU QUIT THE APP!');


