let nextTodoId = 0


export const addToDo = (text) => {
  return {
    type: 'ADD_TO_DO',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleToDo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
