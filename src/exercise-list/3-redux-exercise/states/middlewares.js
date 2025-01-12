const todoDeletionCheck = (store) => {
    return (next) => (action) => {
        if (action.type === 'DELETE_TODO') {
            const {todos} = store.getState();
            const todosTobeDeleted = todos.find((todo)=> todo.id === action.payload.id );

            if (!todosTobeDeleted.complete) {
                alert('Unable to delete unfinished to-dos.');
                return;
            }
        }

        return next(action);
    };
}


export {todoDeletionCheck};