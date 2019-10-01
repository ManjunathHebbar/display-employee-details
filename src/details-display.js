import React, {Component} from 'react';
import Logo from './man-user.png';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import {userChangeActions} from './actions/simpleActions';
import { connect } from 'react-redux';

class DetailsDispaly extends Component{
    //constructor initialization
    constructor(props){
        super(props);
        this.state = {
          show: false,
          name:'',
          activeUserName:''
        }
      }

  //renderCardView function
  renderCardView(details, index){
   return(
        <div className="card" key={index}>
            <div className="card-image-name">
                    <div className="card-image">
                        <img className="style-image" src={Logo} alt="logo" height="65" width="65"/>
                    </div>
                    <div className="card-name">
                        {details.employee_name}
                    </div>
            </div>
            <div className="card-salary-age">
                 <div className="card-salary"><span>Employee salary: </span>{details.employee_salary}</div>
                 <div className="card-age"><span>Employee age:</span>{details.employee_age}</div>
            </div>
            <Button
                variant="primary"
                onClick={() => this.open(details.id)}
                 >
                Change Name
            </Button>
        </div>
     );
    }
      // close function
      close = () =>{
        this.setState({ 
          show: false,
          name:'',
          });
      }
      
      // open function
      open = (id) =>{
        this.setState({ 
            show: true,
            activeUserId:id
        });
      }

      //save function
      save = () =>{
        const{ name, activeUserId} = this.state
        fetch(`http://dummy.restapiexample.com/api/v1/employees/${activeUserId}`, {
          method: 'PATCH',
          body: JSON.stringify({
            name : name
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        })
        .then(response => response.json())
        .then(result => {
          console.log(result)
          this.props.userChangeActions(result);
          this.setState({
            show: false,
            name:''
          }
          );
      },
      
      (error) => {
        console.log(error)
        this.setState({
          error
        });
      }
      )
     }

    

      //onChange function
      onChange = (event) => {
          console.log(event.target.value)
          this.setState({ name: event.target.value})
      }
      
      //changeName function
      changeName(){
        const { show, name} = this.state
          return(
            <div>
                <Modal show={show} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Change Name</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                           <Form.Control type="text"  value={name} placeholder="Name" onChange={this.onChange}/>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.save}>Save</Button>
                        <Button onClick={this.close}>close</Button>
                    </Modal.Footer>
                </Modal>
           </div>
        );
    }

// render function
render(){
        const { display } = this.props
        const {show} = this.state
        return(
        <div>
            <div className="flex-container">
              {display.map((details, index) => this.renderCardView(details, index))}
          </div>
            {show && this.changeName()}
        </div>
     );
    }          
}

//redux function
const mapStateToProps = state => ({

})
const mapDispatchToProps = dispatch => ({
  userChangeActions: (value) => dispatch(userChangeActions(value)),
 })


 export default connect(mapStateToProps, mapDispatchToProps)(DetailsDispaly);