import React, {Component} from 'react';
import DetailsDisplay from '../src/details-display';
import { connect } from 'react-redux';
import { simpleActions} from './actions/simpleActions';
import './App.css';

// web template to display employee name, image , salary, age consuming open Rest API
class App extends Component {
//constructor fuction initialization
constructor(props){
  super(props);
  this.state = {}
}

// init function
init(){
  this.fetchEmployesDetails();
}

// fetchEmployesDetails() 
fetchEmployesDetails(){
  fetch("http://dummy.restapiexample.com/api/v1/employees")
          .then(res => res.json())
          .then(
            (result) => {
                  console.log(result)
                  this.props.simpleActions(result);
              
            },
    
         (error) => {
              this.setState({
                error
              });
            }

        )
        
}

//componentDidMount function
componentDidMount(){
   this.init();
}


// render function
 render(){
    const { employeesDetails } = this.props;
    return(
    <div>
      {employeesDetails.length ? 
      <DetailsDisplay
        display = { employeesDetails }
      /> : null } 
    </div>
    );
  }
}


// redux function
const mapStateToProps = state => ({
  employeesDetails: state.employees.employeesDetails
})
const mapDispatchToProps = dispatch => ({
  simpleActions: (value) => dispatch(simpleActions(value)),
 })


 export default connect(mapStateToProps, mapDispatchToProps)(App);