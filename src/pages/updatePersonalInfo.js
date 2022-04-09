import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {UserService, users} from '../lib/UserService'
import {AccountService, Accounts} from '../lib/AccountService'
import styleForm from './styleform.css';

class updatePersonalInfo extends React.Component{
    
    constructor(props) {
        super(props);
        this.accounts = Accounts;
        this.userEmail = JSON.parse(window.localStorage.getItem("user")).email;
        this.account = AccountService.getAccountbyEmail(this.userEmail);
        this.state = {
          Fname: this.account.name,
          Fsurname: this.account.surname,
          Femail: this.account.email,
          FpersonalPhone: this.account.personalPhone,
          FworkPhone: this.account.workPhone,
          Fstreet: this.account.street,
          Fcity: this.account.city,
          Fcounty: this.account.county,
          Fpostcode: this.account.postcode
        };

        this.handleInputChange = this.handleInputChange.bind(this);
      }
      
    handleInputChange(event) {
        const target = event.target;
        const value =  target.value;
        const name = target.name;

        this.setState({
            [name]: value
        
        });
    }

    render(){
        return(
        
            <div className={'containerFluid'}>
    
                
                <h2>Update Personal Information</h2>
                <div class ={'Conatiner'}>
                    
                    <div class ={'FormComtainer'}>
                        <form >
                            <lable> <p> First Name </p> 
                                <input onChange= {this.handleInputChange} value= {this.state.Fname} name= 'Fname' type="text" ></input>
                            </lable>
    
                            <br></br>
    
                            <lable> <p> Surname </p> 
                                <input onChange= {this.handleInputChange} value= {this.state.Fsurname} name= 'Fsurname' type="text"></input>
                            </lable>
    
                            <br></br>
    
                            <lable> <p> Email </p> 
                                <input onChange= {this.handleInputChange} value= {this.state.Femail} name= 'Femail' type="email" ></input>
                            </lable>
    
                            <br></br>
    
                            <lable> <p> Personal Phone </p> 
                            <input onChange= {this.handleInputChange} value= {this.state.FpersonalPhone} name= 'FpersonalPhone' type="tel" name="Personalphone" name="Personal Phone"  pattern="[0-9]{11}" required></input>
                            </lable>
    
                            
                            <br></br>
    
                            <lable> <p> Work Phone </p> 
                            <input onChange= {this.handleInputChange} value= {this.state.FworkPhone} name= 'FworkPhone' type="tel" name="Workphone" name="Work Phone"  pattern="[0-9]{11}" required ></input>
                            </lable>
    
                            <br></br>
    
                            <lable> <p> Street </p> 
                            <input onChange= {this.handleInputChange} value= {this.state.Fstreet} name= 'Fstreet' type="text" ></input>
                            </lable>
                            
                            <br></br>
    
                            <lable> <p> City </p> 
                            <input onChange= {this.handleInputChange} value= {this.state.Fcity} name= 'Fcity' type="text" ></input>
                            </lable>
    
                            <br></br>
                            
                            <lable> <p> County </p>
                            <input onChange= {this.handleInputChange} value= {this.state.Fcounty}  name= 'Fcounty' name = 'County' type="text" ></input>
                            </lable>
    
                            <br></br>
                            
                            <lable> <p> Postcode </p>
                            <input onChange= {this.handleInputChange} value= {this.state.Fpostcode}  name= 'Fpostcode' type="text" ></input> 
                            </lable>
    
                            <br></br>
                            <input type="submit" id = 'discard' value="Discard Changes"></input>
                            
                            <input type="submit" id = 'submit' value="Save Changes"></input>
    
                        </form>
                    </div>
                </div>
            </div>
    
            
                    
        )

    }
}
export default updatePersonalInfo;

