import React from 'react';
import './body.scss';
import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom';


class body extends React.Component{

    constructor(props){
        super(props);

    }

render()
{
    return(
        <div>

        <div className="parent">
        <div className="sidedec">

<p className="a">The New Way to Trade, Exchnage and Analyze</p>
</div>
            <img src='./logo.png' className="logoimage"/>
            <div className="services">
            <center>
            <div className="exchange"><NavLink to="./exchange"><h1>Exchange</h1></NavLink></div>
            <div className="charts"><NavLink to="./analysis"><h1>Analysis</h1></NavLink></div>
            <div className="analyze"><NavLink to="./charts"><h1>Charts</h1></NavLink></div>
            </center>
            </div>  
         
        </div>  
        </div>
    );
}


}
export default body;