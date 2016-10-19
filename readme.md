
# Project
THis is a simple to do app using redux and react.

Essentially Redux allows us to build React app as you are but delegate all the State and Actions to Redux.

This is based on https://medium.com/@rajaraodv/step-by-step-guide-to-building-react-redux-apps-using-mocks-48ca0f47f9a#.xd8099s04


## Step 1: Mock
-page should show list of to do items
-input text UI for addition of list items
-strike through text as item is checked off as complete
-filter for all, outstanding, completed

## Step 2: Components
-react components on page consist of:
* adding list items
  ** input UI
  ** submit button
* List containing list items
  ** list item
* buttons to filter
  ** each button

## Step 3: Actions and States for each components
In redux, every component has 2 things:
State: DOM is rendered based on some data (state)
Action: Listen to the user and other events and send them to JS functions

#### Adding list items component:
* states: no internal state
* actions: ADD_TO_DO
  ** notify other components when list item is typed in and submitted
  ** listens to DOM events, reads data from input field, mapped into a JSON object, called Action:
    {
      type: "ADD_TO_DO"
      payload:
        { data: "stuff typed in input field",
          id: 1,
          completed: false
        }
    }

#### To do list component:
* states: To-do (array), visibility filter (T/F)
* actions: STATUS_UPDATE (notify other components when list item is checked off as done or not). This action is descirbed with the JSON object:
  {
    type: "STATUS_UPDATE"
    payload:
      {
        type: "TOGGLE_TODO"
        payload: {id: <todoItem's id> }
    }
  }

#### Filter component:
* states: current filter that is applied
* actions: APPLY_FILTER (notify other components when the filter is changed)
  {
    type: "SET_VISIBILITY"
    payload: {filter: 'completed'}
  }
