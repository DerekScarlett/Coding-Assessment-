import React, {Component} from "react";
import "../test" ;
import axios from "axios";
import Stations from "../test";

class Main extends Component {
  constructor(props) {
  super(props);

    this.state = {
      url: "http://api.citybik.es/v2/networks/",
      name:null,
      id:null,
      result: []
        }
      }

  componentDidMount (){

  axios.get(this.state.url).then( (response) =>{
    const networkID = response.data.networks[1].id;//.data.networks[1].id;
    this.setState({id:networkID});

    axios.get(this.state.url + this.state.id).then( (response) =>{
      this.setState(() => {
           return {
             result: response.data.network.stations
           };
         });
       });
     })
     .catch( (error) => {
       console.log(error);
     });
   }

  render (){
    let mappedSations = this.state.result.map(stations => {
     return (
       <Stations
         name={stations.name}
         empty_slots={stations.empty_slots}
         free_bikes={stations.free_bikes}
       />
     );
   });
   return mappedSations;
 }
}

export default Main;
