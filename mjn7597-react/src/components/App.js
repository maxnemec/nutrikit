import '../../src/App.css';
import React from 'react';
import '../../src/foodData.json'

import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, DropdownToggle, ButtonDropdown } from 'reactstrap';

import MyHeader from './MyHeader';
import FoodGroupList from './FoodGroupList';
import FoodBox from './FoodBox';
import AddButton from './AddButton';
import SelectedBox from './SelectedBox';
import RemoveButton from './RemoveButton';

import FoodNutritionFacts from './FoodNutritionFacts';
import TotalNutritionFacts from './TotalNutritionFacts';
import ChangeGoalModal from './ChangeGoalModal';
import EditModal from './EditModal.js';
import DeleteMessageModal from './DeleteMessageModal.js';
import AddFoodItemModal from './AddFoodItemModal';
import ProgressBars from './ProgressBars';


var foodGroups = ["proteins", "fruits", "vegetables", "dairy", "grains"];
class App extends React.Component {
  constructor(props) 
  {
    super(props);
    this.state = {
      category: '',
      menuItems: '',
      foodGroups: foodGroups,
      currMenuSelection: '',
      currCalories: 0,
      currTotalFat: 0,
      currSaturatedFat: 0,
      currTransFat: 0,
      currProtein: 0,
      currCarbs: 0,
      selectedItems: [],
      deselect: false,
      dropdownOpen: false,
      calorieGoal: 0,
      totalFatGoal: 0,
      proteinGoal: 0,
      carbGoal: 0,
      totalCalories: 0,
      totalFat: 0,
      totalSaturatedFat: 0,
      totalTransFat: 0,
      totalProtein: 0,
      totalCarbs: 0,
      data: "",
      isModalOpen: false,
      isDeleteModalOpen: false,
      isAddFoodItemModalOpen: false,
      isChangeGoalModalOpen: false,
    };
  }

  getResponse(response)
  {
    if (response.status === 200)
    {
      return response.json(); 
    }
    else
    {
      console.log("HTTP error:" + response.status + ":" +  response.statusText);
      return ([ ["status ", response.status]]);
    }
  }

  updateData = (apiResponse) => {
    this.setState({data: apiResponse})
    console.log("data: " + this.state.data);
  }

  updateGoalData = (apiResponse) => {
    this.setState({
        calorieGoal: apiResponse[0],
        totalFatGoal: apiResponse[1],
        proteinGoal: apiResponse[2],
        carbGoal: apiResponse[3],
      })
   
  }

  fetchData = () => {
    //In package.json add "proxy": "http://localhost:5000" 
    //This will allow redirect to REST api in Flask w/o CORS errors
    fetch('/fetchData')
    .then(response => this.getResponse(response))//The promise response is returned, then we extract the json data
    .then ((jsonOutput) => //jsonOutput now has result of the data extraction
              {
                this.updateData(jsonOutput);
              }
          )
    .catch((error) => 
            {console.log(error);
                this.updateData("");
             } )
  }



  fetchGoalData = () => 
  {
    fetch('/fetchGoalData')
    .then(response => this.getResponse(response))//The promise response is returned, then we extract the json data
    .then ((jsonOutput) => //jsonOutput now has result of the data extraction
              {
                this.updateGoalData(jsonOutput);
              }
          )
    .catch((error) => {console.log(error);})
  }

  fetchFoodData = (food) => {
    fetch('/getFood/' + food)
    .then(response => this.getResponse(response))
    .then ((jsonOutput) => //jsonOutput now has result of the data extraction
              {
                
                this.setState({
                  currMenuSelection: jsonOutput[1],
                  currCalories: jsonOutput[3],
                  currTotalFat: jsonOutput[4],
                  currSaturatedFat: jsonOutput[5],
                  currTransFat: jsonOutput[6],
                  currProtein: jsonOutput[7],
                  currCarbs: jsonOutput[8]
                })
              }
          )
    .catch((error) => 
            {console.log(error);
                
             })
  }

  fetchFoodsByCategory = (category) => {
    console.log("category: " + category);
    fetch('/getFoodsByCategory/' + category)
    .then(response => this.getResponse(response))
    .then((jsonOutput => {
      this.setState({menuItems: jsonOutput})
    }))
    .catch((error) => {console.log(error);})
    
    
  }

  componentDidMount() {
    this.fetchData();
    this.fetchGoalData();
  }

  newCategory = (childData) =>{
    this.fetchFoodsByCategory(childData);
    this.setState({category: childData});
    console.log("category: " + this.state.category + "| menuItems: " + this.state.menuItems);
  }

  handleMenuItemChange = (childData) => {
    this.fetchFoodData(childData[0]);
    this.setState({currMenuSelection: childData[0], deselect: childData[1]})
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  addItemButtonClick = () => {
    let currSelectedItems = this.state.selectedItems;
    let totalCalories = this.state.totalCalories;
    let totalFat = this.state.totalFat;
    let totalSaturatedFat = this.state.totalSaturatedFat;
    let totalTransFat = this.state.totalTransFat;
    let totalProtein = this.state.totalProtein;
    let totalCarbs = this.state.totalCarbs;
    
    currSelectedItems.push(this.state.currMenuSelection);
    totalCalories = totalCalories + Math.round(this.state.currCalories);
    totalFat = totalFat + Math.round(this.state.currTotalFat);
    totalSaturatedFat = totalSaturatedFat + Math.round(this.state.currSaturatedFat);
    totalTransFat = totalTransFat + Math.round(this.state.currTransFat);
    totalProtein = totalProtein + Math.round(this.state.currProtein);
    totalCarbs = totalCarbs + Math.round(this.state.currCarbs);
    
    this.setState({selectedItems: currSelectedItems, 
                  totalCalories: totalCalories,
                  totalFat: totalFat,
                  totalSaturatedFat: totalSaturatedFat,
                  totalTransFat: totalTransFat,
                  totalProtein: totalProtein,
                  totalCarbs: totalCarbs,
                });
  }

  removeItemClick = () => {
    let currSelectedItems = this.state.selectedItems;
    let currMenuSelection = this.state.currMenuSelection;
    let totalCalories = this.state.totalCalories;
    let totalFat = this.state.totalFat;
    let totalSaturatedFat = this.state.totalSaturatedFat;
    let totalTransFat = this.state.totalTransFat;
    let totalProtein = this.state.totalProtein;
    let totalCarbs = this.state.totalCarbs;

    for(var i = 0; i < currSelectedItems.length; i++)
    {
      if(currSelectedItems[i] === currMenuSelection)
      {
        currSelectedItems.splice(i, 1); 
        totalCalories = totalCalories - Math.round(this.state.currCalories);
        totalFat = totalFat - Math.round(this.state.currTotalFat);
        totalSaturatedFat = totalSaturatedFat - Math.round(this.state.currSaturatedFat);
        totalTransFat = totalTransFat - Math.round(this.state.currTransFat);
        totalProtein = totalProtein - Math.round(this.state.currProtein);
        totalCarbs = totalCarbs - Math.round(this.state.currCarbs);
        break;
      }
    }

    this.setState({selectedItems: currSelectedItems, 
                    totalCalories: totalCalories,
                    totalFat: totalFat,
                    totalSaturatedFat: totalSaturatedFat,
                    totalTransFat: totalTransFat,
                    totalProtein: totalProtein,
                    totalCarbs: totalCarbs,
                  });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({calorieGoal: e.target.caloriesInput.value});
  }

  toggleModal = () => {
    this.setState({isModalOpen: !this.state.isModalOpen});
  }

  toggleDeleteMessage = () => {
    this.setState({isDeleteModalOpen: !this.state.isDeleteModalOpen});
    console.log('toggleDeleteMessage: ' + this.state.isDeleteModalOpen);
  }

  toggleAddFoodItemModal = () => {
    this.setState({isAddFoodItemModalOpen: !this.state.isAddFoodItemModalOpen});
    console.log('toggleAddFoodItemModal: ' + this.state.isAddFoodItemModalOpen);
  }

  toggleChangeGoalModal = () => {
    this.setState({isChangeGoalModalOpen: !this.state.isChangeGoalModalOpen});
    console.log('toggleChangeGoalModal: ' + this.state.isChangeGoalModalOpen);
  }




  
  render() {
    return (
      
      <Container fluid>
        <EditModal 
          isModalOpen={this.state.isModalOpen} 
          currSelectedFood={this.state.currMenuSelection}
          calories={this.state.currCalories}
          totalFat={this.state.currTotalFat}
          saturatedFat={this.state.currSaturatedFat}
          transFat={this.state.currTransFat}
          protein={this.state.currProtein}
          carbs={this.state.currCarbs}
          toggleModal={this.toggleModal}
          refreshFoodData={this.fetchFoodData}>
        </EditModal>
        <DeleteMessageModal 
          isModalOpen={this.state.isDeleteModalOpen}
          currSelectedFood={this.state.currMenuSelection}
          toggleDeleteMessage={this.toggleDeleteMessage}
          refreshMenuItems={this.fetchFoodsByCategory}
          category={this.state.category}
        />
        <AddFoodItemModal
          isAddFoodItemModalOpen={this.state.isAddFoodItemModalOpen}
          toggleAddFoodItemModal={this.toggleAddFoodItemModal}
          foodGroups={this.state.foodGroups}
          refreshMenuItems={this.fetchFoodsByCategory}
        />
        <ChangeGoalModal
          isModalOpen={this.state.isChangeGoalModalOpen}
          toggle={this.toggleChangeGoalModal}
          calorieGoal={this.state.calorieGoal}
          totalFatGoal={this.state.totalFatGoal}
          proteinGoal={this.state.proteinGoal}
          carbGoal={this.state.carbGoal}
          updateGoalData={this.fetchGoalData}
        />
        <Row >
          <MyHeader ></MyHeader>
        </Row>
        <Row>
          <Col className="class-col" xs={6}>
            <h6>Categories</h6>
          </Col>
          <Col className="class-col" xs={6}>
            <h6>MenuItems</h6>
          </Col>
        </Row>
        <Row>
          <Col className="class-col" xs={6}>
            <ButtonDropdown className="button" toggle={this.toggle} isOpen={this.state.dropdownOpen}>
              <DropdownToggle caret 
              className="button"
              onClick={this.toggle}
              aria-expanded={this.state.dropdownOpen}
              data-toggle="dropdown"
              >
              Food Categories
              </DropdownToggle>
              <FoodGroupList  className="button" newCategory={this.newCategory} foodGroups={this.state.foodGroups} />  
            </ButtonDropdown>
          </Col>
          <Col className="class-col" xs={6}>
            <FoodBox handleMenuItemChange={this.handleMenuItemChange} category={this.state.category} menuItems={this.state.menuItems}/>
          </Col>
          <Col className="row-padding" xs={6}>
              <p><AddButton onClick={this.addItemButtonClick}/></p>
          </Col>
          <Col className="row-padding" xs={6}>
              <RemoveButton onClick={this.removeItemClick}/>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <SelectedBox handleMenuItemChange={this.handleMenuItemChange} selectedItems={this.state.selectedItems}/>
          </Col>
          <Col>
            <ProgressBars 
              calorieProgress={(this.state.totalCalories/this.state.calorieGoal) * 100}
              totalFatProgress={(this.state.totalFat/this.state.totalFatGoal) * 100}
              proteinProgress={(this.state.totalProtein/this.state.proteinGoal) * 100}
              carbProgress={(this.state.totalCarbs/this.state.carbGoal) * 100}
              toggle={this.toggleChangeGoalModal}
            />
          </Col>
        </Row>
        <Row className="row-padding">
          <Col xs={6}>
            <TotalNutritionFacts 
              totalCalories={this.state.totalCalories}
              totalFat={this.state.totalFat}
              totalSaturatedFat={this.state.totalSaturatedFat}
              totalTransFat={this.state.totalTransFat}
              totalProtein={this.state.totalProtein}
              totalCarbs={this.state.totalCarbs}
              toggleAddFoodItemModal={this.toggleAddFoodItemModal}
            >

            </TotalNutritionFacts>
          </Col>
          <Col xs={6}>
            <FoodNutritionFacts 
              toggleModal={this.toggleModal} 
              toggleDeleteMessage={this.toggleDeleteMessage}
              currSelectedFood={this.state.currMenuSelection}
              calories={Math.round(this.state.currCalories)}
              totalFat={Math.round(this.state.currTotalFat)}
              saturatedFat={Math.round(this.state.currSaturatedFat)}
              transFat={Math.round(this.state.currTransFat)}
              protein={Math.round(this.state.currProtein)}
              carbs={Math.round(this.state.currCarbs)}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default App;
