import React, {Component} from 'react';
import Aux from '../../hoc/Aux/Aux';
import ControlPanel from '../../components/ControlPanel/ControlPanel';

export class HeroGuesser extends Component
{

 render ()
 {
   return (
       <Aux>
        <ControlPanel/>
       </Aux>
   );
 }
}

export default HeroGuesser;