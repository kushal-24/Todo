import { createContext, useContext } from "react"

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false,
        }
    ],
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { }
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider;


/**
TODOCONTEXT.JS
s1 -> create the elements(variables+objects+methods) 
s2 -> export for using the Todo context with the help of A hook useContext()as TodoProvider for
s3 -> export to display data w help of context API
    so basically(create a context having method+ variables, and exporting it for calling to use
    and to display the data as well)

APP.JSX
s1 -> write the functionality of all the methods we've defined for the context API
s3 -> Wrap everything inside the contextProvider wrapper to give access to use the values of context API
 */