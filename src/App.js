/* eslint-disable no-template-curly-in-string */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import View from './components/Views';
import Courses from './components/Courses';
import Start from './components/layouts/Start';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get('https://carrerguideapi.onrender.com')
      .then((res) => setPosts(res.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
    <Router>
        <Switch>
          <Route exact path="/" component={Start} />
          <Route path="/course" render={() => <Courses posts={posts} />} />
          <Route path="/:id" render={props => <View {...props} posts={posts}/>} />     
        </Switch>
      </Router>
    </>
  );
}

export default App;
