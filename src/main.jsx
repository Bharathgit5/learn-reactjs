import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
/*--------NOTES---------*/
/* 
react contains only one page i.e index.html (look at that file to understand better) thats the reason it is called as single page application
with the help of DOM we can able to achive to add something or remove something from the page
in our index.html we have  one div i.e <div id="root"></div>
we have main.jsx in that we have import React from 'react' to use react , 
import ReactDOM from 'react-dom/client' reactdom is a special type of DOM . like we have DOM in broswer wehave dom in react (dom-tree like structure) 
reactdom is known as virtual dom and it compares with real dom
In reactdom we have a method call createRoot() this will access(get) id="root" from index.html ReactDOM.createRoot(document.getElementById('root'))
After getting the root element reactdom renders in index.html by ReactDOM.createRoot(document.getElementById('root')).render(
the reactdom renders <APP/> component in index.html (<APP/> is custom tag)
  <React.StrictMode> is a safe mode and it is optinal
  in vite js is loaded directly in index.html in create-react-app we have react-scripts


  lets talk about <APP/>
  <APP/> is a function which returns html
  we should export the function to use in any other Component
  we should import the fucntion in which component we wants to use

  Naming convection of components
  <App/> functions or componet first letter should be capital and should be named as App.js or Chai.jsx


  play with components
  lets make a component called Done with Done.jsx and make a function and write some html inside it and export it 
  now you can import your Done.jsx in any component and use(display) html inside done.jsx



summary 
In index.html we have <div id='root'></div> and  <script type="module" src="/src/main.jsx"></script>(link between index.html and main.jsx) this script(main.jsx) run based oon react and react-dom to make a react dom 
and takes only root element and then game start adding data remove data. these is the reason we can make porject without reloading pages we can just use dom
ReactDom -virtualDom
*/