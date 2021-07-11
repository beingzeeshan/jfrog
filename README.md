# Description

This project provides GUI for Observability. It uses ReactJS as a UI library to leverage the componentization approach create building blocks to support the reusability of components across multiple different pages.

## Instalation

#### Pre-requisites

- NodeJS
- Shell / Termial
- IDE => Atom / VSCode / VIM / Sublime ...

#### Dependences
In the project directory, you can run:
```bat
npm install
```

It will install all node modules and project dependences.


## Playbook

In the project directory, you can run:
```bat
npm start
```

Runs the app in the development mode.\
Opens (http://localhost:5000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

```bat
npm build
```

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Concepts and Best Practices

- Follow the patterns and if you need to modify it, make sure to share it with other team members and also document the changes and also the motivation
- Avoid adding libraries that you don't know about.
- Keep components small and function-specific
- Reusability is important, so keep creation of new components to the minimum required
- Consolidate duplicate code – DRY your code
- Comment only where necessary
- All files related to any one component should be in a single folder
- Follow linting rules, break up lines that are too long
- Take care of the naming. Please make sure that everyone will understand the name meaning.
- Avoid connecting all components with Redux. Prefer to connect the Page in Redux and it will orchestrate the data flow between the nested components, this can avoid problems like re-rendering.
- Avoid blocking the entire screen for background processes such as API requests. Prefer to block and show the loading spinner to itself component.

#### Redux
We know that Redux adds a little complexity to products created with ReactJS. As such, **it does not necessarily have to be mandatory**, especially in cases where the component or the user's journey is very simple. Find below some reasons why we should use it.
- We need to share the same information between different components that are far from the same hierarchical structure.
- The parent component has no responsibility for changing the specific part of the information.
- When we need to maintain the state of one or more components between changes in routes and navigation.
- When we have information that needs to be changed in different parts or even in different components.

```
note: Before starting to implement new features using Redux let's discuss the Use Case and validate the best approach. It is very important to make sure that you understand the main concepts behind that lib.
```
[See Redux Concepts](https://redux.js.org/introduction/learning-resources "Redux Concepts")


## Project Structure

+ src
	+ assets
	+ components
		+ shared
	+ elements
	+ hepers
	+ pages
	+ services
		+ api
	+ store
		+ actions
		+ reducers


##### Pages
Pages should be a component container. Pages are often associated with navigation routes. Page should orchestrate the information flow. It will request the information through the APIs and then it will feed the child components using Props or Context.
Components must be exported with the page name + Page prefix. e.g.: HomePage

##### Components
Components will be used by pages and other components. Keep them small so that one component corresponds to one function. Ideally, a single component should render a specific bit of your page or modify a particular behavior. Keep them reusable as much as possible.
> In many cases, we need to create shared components, so we can create them into the shared folder.

##### Elements
Elements should be used for a tiny component that will be used in different places and also shared by other components. E.g., select box, label, button, etc.
> Before creating new elements, please make sure that this one is not already created.

##### Assets
Should be used to add static files such as images, fonts, svg.


##### Helpers
Should be used for shared or common functions; e.g., date-time functions, calculation functions, UUID, conversions functions, etc.
>Keep it DRY. Make sure that there is no other function for the same necessity.

##### Services
Should be used for external integrations, e.g., http api, (local / session / application) storage, websockets, cookies, background services, etc.

##### Store (Redux)
Should be used in case the requirement follows the above recommendations. Find bellow the basic Reduxs blocks.
+ **Reducers** -> They are used as functions to change the global state. Reducer file name and export type must be name + Reducer, e.g., customerReducer.js.
+ **Actions** -> You can think of an action as an event that describes something that happened in the application. Usually, they are used to create functions that will be integrated with an API or external data source. Action file name and export type must be name + Action, e.g., customerAction.js.

> Eventually, we can dispatch a Reducer without calling an action. E.g., dispatch({ type: 'User/OnLogout' });

###### Redux Implementation Steps
```
Add new data state into initialState.js file.
Create the Reducers.
Add the Reducers into the store.js file.
Create the Actions.
```

## React Functional Components or Class Components
This is a recommendation, prefer to use Functional Component + React Hooks. Class Components should be used only in case the components must handle complex logic.


## UI Libraries
We are using Material UI as the main UI library. Before creating any new component, just play around with the Material UI components, it will be helpful to speed up the developement.
[See Material UI documentation](https://material-ui.com/)


## UI Styling
Apply portal styling using Sass and CSS classes.


## Errors
Follow the current SAE approach

## Alerts
Follow the current SAE approach
