import React from 'react';
import './body.scss';
import Side from './side';



class login extends React.Component{
    constructor(props){
        super(props);
    }
    render()
    {
        return(
            <div className="parent">
            <Side/>
            <div className="parent1">
            <div className="loginform">
            
            
            
            </div>
            </div>
            </div>
        );
    }
}
export default login;