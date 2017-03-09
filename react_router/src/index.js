
import React from 'react'
import {render} from 'react-dom'
import {Router,Route,hashHistory,IndexRoute} from 'react-router'

import App from './componrnts/app'
import Home from './componrnts/home'
import About from './componrnts/about'
import Repos from './componrnts/repos'
import Repo from './componrnts/repo'
render(
    (
       <Router history={hashHistory}>
          <Route path='/' component={App}>
              <IndexRoute component={Home}/>
              <Route path='/about' component={About}></Route>
              <Route path='/repos' component={Repos}>
                  <Route path="/repos/:username/:repoName" component={Repo}></Route>
              </Route>
          </Route>

       </Router>
    ),document.getElementById('app')
)