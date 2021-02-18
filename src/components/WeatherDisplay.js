import React, {Component} from 'react';

class WeatherDisplay extends Component {
    constructor(props){
        super();
    }
    render(){
        return(
            <div>
                {this.props.temp}
            </div>
        );
    }
}
export default WeatherDisplay;