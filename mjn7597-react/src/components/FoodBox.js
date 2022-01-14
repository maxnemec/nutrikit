import '../../src/App.css';
import React from 'react';
import FoodBoxSelect from './FoodBoxSelect';

import 'bootstrap/dist/css/bootstrap.min.css';

import {Input} from 'reactstrap';



class FoodBox extends React.Component {
    
    constructor(props)
    {
        super(props);
        
        this.state = {
            value: "proteins"
        };
        
        
    }

    renderOptions(menuItems)
    {
        const getCategoryContent = () => {
            const content = [];
            for(let item of menuItems) 
            {
                content.push(<FoodBoxSelect key={item} value={item}/>);
            }

            return content;
        }
        return (
            
            <React.Fragment>
                {getCategoryContent()}
            </React.Fragment>
        );
    }

    handleChange = (e) =>
    {
        var selectData = [];
        this.setState({value: e.target.value});
        selectData.push(e.target.value);
        selectData.push(false);
        this.props.handleMenuItemChange(selectData);
    }

    render()
    {
        
        return (
            
            <Input onChange={this.handleChange} id="foodbox" name="foods" type="select" size="5" >  
                {this.renderOptions(this.props.menuItems)}
            </Input>  
        );
    }


}
export default FoodBox;