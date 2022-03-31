import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import UpdatePersonalInfo from './Components/UpdatePersonalInfo'
import styleForm from './styleform.css';


const PersonalInfoPage = () =>{
    return(
        <>
            <h2>Update Personal Information</h2>
            <div class ={'Conatiner'}>
                
                <div class ={'FormComtainer'}>
                    <form>
                        <lable> <p> First Name </p> 
                            <input type="text" placeholder="John"></input>
                        </lable>

                        <br></br>

                        <lable> <p> Surname </p> 
                            <input type="text" placeholder="Smith"></input>
                        </lable>

                        <br></br>

                        <lable> <p> Email </p> 
                            <input type="email" placeholder="JohnSmith@fmd.com"></input>
                        </lable>

                        <br></br>

                        <lable> <p> Personal Phone </p> 
                        <input type="tel" id="Personalphone" name="Personal Phone" placeholder="07679234809" pattern="[0-9]{11}" required></input>
                        </lable>

                        
                        <br></br>

                        <lable> <p> Work Phone </p> 
                        <input type="tel" id="Workphone" name="Work Phone" placeholder="07679234809" pattern="[0-9]{11}" required ></input>
                        </lable>

                        <br></br>

                        <lable> <p> Street </p> 
                        <input type="text" placeholder="9 Park Lane"></input>
                        </lable>
                        
                        <br></br>

                        <lable> <p> City </p> 
                        <input type="text" placeholder="London"></input>
                        </lable>

                        <br></br>
                        
                        <lable> <p> County </p>
                        <input name = 'County 'type="text" placeholder="West London"></input>
                        </lable>

                        <br></br>
                        
                        <lable> <p> Postcode </p>
                        <input type="text" placeholder="W1 3NJ"></input> 
                        </lable>

                        <br></br>
                        <input type="submit" id = 'discard' value="Discard Changes"></input>
                        
                        <input type="submit" id = 'submit' value="Save Changes"></input>

                    </form>
                </div>
            </div>
        </>
       
        // <div className={'containerFluid'}>
        //      <div>
        //         <form>
        //             <input type="text" placeholder="John"> Name</input>
        //             <input type="text" placeholder="Smith">Surname</input>
        //             <input type="email" placeholder="JohnSmith@fmd.com">Email</input>
        //             <input type="tel" id="Personalphone" name="Personal Phone" placeholder="07679234809" pattern="[0-9]{11}" required></input>
        //             <input type="tel" id="Personalphone" name="Work Phone" placeholder="07679234809" pattern="[0-9]{11}" required ></input>
        //             <input type="text" placeholder="9 Park Lane"> Street </input>
        //             <input type="text" placeholder="London"> City </input>
        //             <input type="text" placeholder="West London"> County </input>
        //             <input type="text" placeholder="W1 3NJ"> Postcode </input> 
        //         </form>
        
        //      </div>

        // </div>
    )
}
export default PersonalInfoPage