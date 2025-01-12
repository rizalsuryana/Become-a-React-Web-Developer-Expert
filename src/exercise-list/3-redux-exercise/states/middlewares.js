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


// thunk middle ware for thunk func

const thunk = (store) => {
    return (next) => (action) => {
        if (typeof action === 'function') {
            return action(store.dispatch, store.getState);
        }

        return next(action);
    };
}


export {todoDeletionCheck, thunk};