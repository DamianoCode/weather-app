import "./css/style.css";
import React,{ Component } from "react";
import instance from "./axiosConfig";
import WeatherDisplay from "./components/WeatherDisplay";
class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      city: 'Warsaw',
      citySearch:'',
      weatherData:{}
    };
  }
  getData = () =>{
    instance.get('',
    {
      params:{
        q:`${this.state.city}`,
      }
    }).then(res => {
      this.setState({weatherData:res.data});
    })
  }
  componentDidMount(){
    this.getData();
  }
  handleChange = (event) => {
    this.setState({citySearch: event.target.value});
  }
  updateCity = () => {
    if(this.state.citySearch!==''){
    this.setState({city:this.state.citySearch, citySearch:''});
    this.getData();}
  }
  
  render(){
  return (
    <main className="App">
      <div className="wrapper">
        <div className="inputWrapper">
          <input className="cityName" type="text" onChange={this.handleChange} value={this.state.citySearch} placeholder="Podaj miasto"/>
          <button onClick={this.updateCity}>
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z"/></svg>
          </button>
        </div>
        <div className="weatherForCity">
          <h2>{this.state.city}</h2>

        </div>
      </div>
    </main>
  );
}
}
export default App;
