import React from 'react';
import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom';
import about from './about';
import home from './home';
import login from './login';
import analysis from './analysis';
import ticker from './ticker';

const pagenotfound = () =>(
        <div>
        <NavLink to ="/" activeClassName="is-active" exact={true}>go home</NavLink>
        <NavLink to="/about" activeClassName="is-active">about</NavLink>
        </div>
        );
    
const AppRouter=() =>(

<BrowserRouter>
<Switch>
<Route path ="/" component={home} exact={true}/>
<Route path ="/about" component={about}/>
<Route path ="/exchange" component={about}/>
<Route path ="/markets" component={about}/>
<Route path ="/login" component={login}/>
<Route path ="/analysis" component={analysis}/>
<Route path ="/home" component={home}/>
<Route path ="/ticker" component={ticker}/>

<Route  component={pagenotfound}/>
</Switch>
</BrowserRouter>

);

export default AppRouter;