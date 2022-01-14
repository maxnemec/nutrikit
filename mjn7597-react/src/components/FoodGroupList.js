import '../../src/App.css';
import React from 'react';
import FoodGroupOption from './FoodGroupOption'

import 'bootstrap/dist/css/bootstrap.min.css';
import {DropdownMenu } from 'reactstrap';




class FoodGroupList extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            value: "proteins", 
            
        };
        
    }

   

    renderOptions(foodGroups)
    {
        return (
            <DropdownMenu className="button">
                <FoodGroupOption id="foodGroupList" value={foodGroups[0]}/>
                <FoodGroupOption id="foodGroupList" value={foodGroups[1]}/>
                <FoodGroupOption id="foodGroupList" value={foodGroups[2]}/>
                <FoodGroupOption id="foodGroupList" value={foodGroups[3]}/>
                <FoodGroupOption id="foodGroupList" value={foodGroups[4]}/>
            </DropdownMenu>
            
        );
    }

    handleChange = (e) =>
    {
        console.log("this happens")
        this.setState({value: e.target.value});
        this.props.newCategory(e.target.value);
        
    }

    
 
    render() {
        
        return (
            
            
            <DropdownMenu  onClick={this.handleChange }className="top" id="foodGroupList" name="foods" >
                {this.renderOptions(this.props.foodGroups)}
            </DropdownMenu>
            
            
        );

    }

}
export default FoodGroupList;