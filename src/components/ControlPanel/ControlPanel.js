import React, {Component} from 'react';
import axios from 'axios';

class ControlPanel extends Component
{
 state = {
    fetchedHeroes: []
 }
 
 componentDidMount()
 {
  axios.get("https://api.opendota.com/api/heroStats")
  .then(response => {
     this.setState({fetchedHeroes: response.data})
  }).catch(error =>{
      console.log(error)
  });

 }


 render()
 {
  let images = this.state.fetchedHeroes.map(image => <img key={image.id} src={'http://cdn.dota2.com/'+ image.img}/>)
   return (<div>
    <p>Strength</p>
    {images}
    <p>Agility</p>
    <p>Intelligence</p>
    </div>
    );
 }
}

export default ControlPanel;