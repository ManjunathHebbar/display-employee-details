
const initial = {
  employeesDetails: [],
}

export default (state = initial, action) => {
    //  Reducer for employeesDetails
    switch (action.type) {
      case 'SIMPLE_ACTION':
       console.log(action.payload)
      return {
        employeesDetails: action.payload 
      }
      
      // Reducer for changed employeeDetails
      case 'SIMPLE_CHANGE':
          console.log(action.payload)
            let userData = state.employeeDetails
            console.log(userData)
            let id = action.payload.id
            for(let i=0; i< userData.length; i++)
            {
                if(userData[i].id === id){
                  userData[i] = action.payload
                  break;
                }
            }
        return {
          employeesDetails: userData
     }
     default:
      return state
    }
   }

   
       
      