import React from 'react';
import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom';
import about from './about';
import home from './home';
import login from './login';
import analysis from './analysis';
import ticker from './ticker';  
import admin from './admin';
import transactionlist from './transactionlist';
import dashboard from './dashboard';
import signin from './signin';
import signup from './signup';
import createtransaction from './createtransaction';
import news from './news';
import test from './test';
import exchange from './exchange';
import trade from './trade';
import scanner from './scanner';
import crossrates from './crossrates';
import crypto from './crypto';
import callender from './callender';







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
<Route path ="/markets" component={about}/>
<Route path ="/login" component={login}/>
<Route path ="/analysis" component={analysis}/>
<Route path ="/home" component={home}/>
<Route path ="/ticker" component={ticker}/>
<Route path ="/admin" component={admin}/>
<Route path ="/dashboard" component={dashboard}/>
<Route path ="/signin" component={signin}/>
<Route path ="/signup" component={signup}/>
<Route path ="/createtransaction" component={createtransaction}/>
<Route path ="/news" component={news}/>
<Route path ="/test" component={test}/>
<Route path ="/exchange" component={exchange}/>
<Route path ="/trade" component={trade}/>
<Route path ="/scanner" component={scanner}/>
<Route path ="/crossrates" component={crossrates}/>
<Route path ="/crypto" component={crypto}/>
<Route path ="/callender" component={callender}/>







<Route  component={pagenotfound}/>
</Switch>
</BrowserRouter>

);

export default AppRouter;