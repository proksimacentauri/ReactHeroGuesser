import React, {Component} from 'react';
import axios from 'axios';
import classes from './ControlPanel.css';

class ControlPanel extends Component
{
 state = {
    fetchedHeroes: []
 }
 
 componentDidMount()
 {
  axios.get("https://api.opendota.com/api/heroStats")
  .then(response => {
      console.log(response.data)
      var sortedData = response.data.sort((a,b) => {
        if (a.localized_name < b.localized_name)
        {
         return -1;
        }
        if (a.localized_name > b.localized_name)
        {  
         return 1;
        }
        return 0;
      })
     this.setState({fetchedHeroes: response.data})
  }).catch(error =>{
      console.log(error)
  });

 }



 render()
 {
    
  const imagesStr = this.state.fetchedHeroes.map(image =>{  
      if(image.primary_attr === 'str')
      {return (<img className={classes.hero} key={image.id} src={'http://cdn.dota2.com/'+ image.img}/>)}})

  const imagesAgi = this.state.fetchedHeroes.map(image =>{  
        if(image.primary_attr === 'agi')
        {return (<img className={classes.hero} key={image.id} src={'http://cdn.dota2.com/'+ image.img}/>)}})
        
  const imagesInt = this.state.fetchedHeroes.map(image =>{  
            if(image.primary_attr === 'int')
            {return (<img className={classes.hero} key={image.id} src={'http://cdn.dota2.com/'+ image.img}/>)}})
   
   return (<div>
    <div className={classes.strength}><p>Strength</p>
    {imagesStr}
    </div>
    <br/>
    <div className={classes.agility}><p>Agility</p>
    {imagesAgi}
    </div>
    <br/>
    <div className={classes.intelligence}><p>Intelligence</p>
    {imagesInt}
    </div>
    </div>
    );
 }
}

export default ControlPanel;