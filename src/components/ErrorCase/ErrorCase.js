import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import classes from './ErrorCase.css';
import SFImage from '../../assets/images/sfImage.png';

class ErrorCase extends Component
{
 render ()
 {
   return (
     <div className={classes.ErrorPage}>
     <div>404 page not found</div>
     <img src={SFImage}/>
     <div>Click here to start a new game!</div>
     </div>  
   );
 }
}

export default ErrorCase;