import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {UserService, users} from '../lib/UserService'
import {AccountService, Accounts} from '../lib/AccountService'
import styleForm from './styleform.css';
import {useNavigate} from "react-router-dom";

class updatePersonalInfo extends React.Component{
    
    constructor(props) {
        super(props);
        this.accounts = Accounts;
        this.userEmail = JSON.parse(localStorage.getItem("user")).email;
        this.account = AccountService.getAccountbyEmail(this.userEmail);
        this.state = {
          Fname: this.account.name,
          Fsurname: this.account.surname,
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

    handleSubmit = (event) => {
        event.preventDefault()
        var name = event.target.Fname.value;
        var surname = event.target.Fsurname.value;
        var personalPhone = event.target.FpersonalPhone.value;
        var workPhone = event.target.FworkPhone.value;
        var street = event.target.Fstreet.value;
        var city = event.target.Fcity.value;
        var county = event.target.Fcounty.value;
        var postcode = event.target.Fpostcode.value;
        if(name == this.account.name && surname == this.account.surname && personalPhone == this.account.personalPhone && workPhone == this.account.workPhone && street == this.account.street && city == this.account.city && county == this.account.county && postcode == this.account.postcode){
            alert("You have not changed information");
        }
        else{
            AccountService.updateAccountInfo(this.account,name, surname, personalPhone, workPhone, street, city, county, postcode)
            alert('Your details have been sucessfully updated')
        
        }
       //TODO: Add navigation
    
      }

      discard(event){
        event.preventDefault()
        alert('Your changes will not be saved');
         //TODO: Add navigation
      }

    render(){
        return(
        
            <div className={'containerFluid'}>
                <h2>Update Personal Information</h2>
                <div class ={'Conatiner'}>
                    
                    <div class ={'FormComtainer'}>
                        <form onSubmit={this.handleSubmit}>
                            <lable> <p> First Name </p> 
                                <input id= 'Fname' onChange= {this.handleInputChange} value= {this.state.Fname} name= 'Fname' type="text" ></input>
                            </lable>
    
                            <br></br>
    
                            <lable> <p> Surname </p> 
                                <input onChange= {this.handleInputChange} value= {this.state.Fsurname} name= 'Fsurname' type="text"></input>
                            </lable>
    
                        
                            <lable> <p> Personal Phone </p> 
                            <input onChange= {this.handleInputChange} value= {this.state.FpersonalPhone} name= 'FpersonalPhone' type="text"  pattern="[0-9]{11}" required></input>
                            </lable>
    
                            
                            <br></br>
    
                            <lable> <p> Work Phone </p> 
                            <input onChange= {this.handleInputChange} value= {this.state.FworkPhone} name= 'FworkPhone' type="tel" pattern="[0-9]{11}" required ></input>
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
                            <input onChange= {this.handleInputChange} value= {this.state.Fcounty}  name= 'Fcounty' type="text" ></input>
                            </lable>
    
                            <br></br>
                            
                            <lable> <p> Postcode </p>
                            <input onChange= {this.handleInputChange} value= {this.state.Fpostcode}  name= 'Fpostcode' type="text" pattern='([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([AZa-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z]))))[0-9][A-Za-z]{2})' ></input> 
                            </lable>
                            <br></br>
                            <input type="submit" onClick={this.discard} id = 'discard' value="Discard Changes"></input>
                            
                            <input type="submit" id = 'submit' value="Save Changes"></input>
                        </form>
                    </div>
                </div>
            </div>

    
            
                    
        )

    }
}
export default updatePersonalInfo;

