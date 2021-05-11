import React, {useEffect, useState} from 'react';
import EventsExample from "./components/EventsExample";
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import UserPage from "./components/UserPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from './components/TodoItemPage';
import PhotosPage from "./components/PhotosPage";

const App = () => {
    const Nav =  {
        color: 'white',
        padding: '1rem',
        textDecoration:'none',
        fontSize: '20px'
    }

  return (
    <BrowserRouter>
      <EventsExample />
      <div>
          <div style={{marginTop:'1rem',background:'lightblue',height:'25px'}}>
              <NavLink style={Nav} to={"/users"}>Пользователи</NavLink>
              <NavLink style={Nav} to={"/todos"}>Список дел</NavLink>
              <NavLink style={Nav} to={"/photos"}>Фото</NavLink>
          </div>


          <Route path={"/users"} exact>
              <UserPage />
          </Route>
          <Route path={"/todos"} exact>
              <TodosPage />
          </Route>
          <Route path={"/photos"} exact>
              <PhotosPage />
          </Route>


          <Route path={"/users/:id"}>
              <UserItemPage />
          </Route>
          <Route path={"/todos/:id"}>
              <TodoItemPage />
          </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
