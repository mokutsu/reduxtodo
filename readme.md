
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
#### Adding list items component:
* actions: ADD_TO_DO (notify other components when list list item is typed in and submitted)
* states: no internal state

#### To do list component:
* actions: STATUS_UPDATE (notify other components when list item is checked off as done or not)
* states: To-do (array), visibility filter
