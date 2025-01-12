const mockAPI = (()=> {
    let todos = getTodosFromStorage() || [
        {
            id      : 'todo-odo-1664268511621',
            text    : 'Wash Motorbike',
            complete: false
        },
        {
            id      : 'todo-1664268553422',
            text    : 'Pickup litle brother from school',
            complete: true
        }
    ]
})