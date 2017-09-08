import React , { Component } from 'react';
import { HashRouter,Route } from 'react-router-dom';//Redirect <Redirect exact path="/" to="/UserList"/>
import { createBrowserHistory } from 'history';


const history = createBrowserHistory();

class RouterMap extends Component{
	render(){
		return (
		<HashRouter history={history}>
          <div>
            <Route exact path="/" component={Login}/>
          </div>
        </HashRouter>
		)
	}
}

export default RouterMap;
