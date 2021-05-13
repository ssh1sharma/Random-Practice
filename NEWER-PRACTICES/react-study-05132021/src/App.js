import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';

const App = () => {
  return (
    <>
      <Switch>
        <Route path='/' exact> <AllMeetupsPage /> </Route>
        <Route path='/new-meetup'> <NewMeetupPage /> </Route>
        <Route path='/favorites'> <FavoritesPage /> </Route>
      </Switch>
    </>
  )
}

export default App;
