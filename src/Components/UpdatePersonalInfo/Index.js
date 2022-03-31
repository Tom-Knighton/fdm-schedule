import React from 'react';
import stylesheet from './style.css'

const UpdatePersonalInfo = () =>{
    return(
      <div class={stylesheet.container}>
        <form class={stylesheet.formContainer}>
          <input type="text" placeholder="John"> Name</input>
          <input type="text" placeholder="Smith">Surname</input>
          <input type="email" placeholder="JohnSmith@fmd.com">Email</input>
          <input type="tel" id="Personalphone" name="Personal Phone" placeholder="07679234809" pattern="[0-9]{11}" required></input>
          <input type="tel" id="Personalphone" name="Work Phone" placeholder="07679234809" pattern="[0-9]{11}" required ></input>
          <input type="text" placeholder="9 Park Lane"> Street </input>
          <input type="text" placeholder="London"> City </input>
          <input type="text" placeholder="West London"> County </input>
          <input type="text" placeholder="W1 3NJ"> Postcode </input> 
        </form>
    </div>
    );
}

export default UpdatePersonalInfo;