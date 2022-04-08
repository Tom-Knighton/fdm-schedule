import { useState } from 'react'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import {UserService, users} from '../lib/UserService.ts'
// import users from '../lib/UserService.ts'

  
const Search = () =>{
    const [population, setPopulation] = useState(users)
    const [count, setCount] = useState(users.length)

    const handleOnChange = async (e) => {
        let value = e.target.value;
        if (value.length > 2) {
          let search = await UserService.SearchByName(value);
          setPopulation(search)
          setCount(search.length)
        } else {
          setPopulation(users)
          setCount(users.length)
        }
      }
    return(
        <div className={'containerFluid'}>
            <h3 className='training-programs'>User Search</h3>
            <div className={'searchbox'}>
                <input style={{ width: '18rem'}} type="text" name="search" id="search" placeholder="Search User" onChange={handleOnChange}/>
            </div>
            <>
                {population.map(person => (
                    <Card key={person.username} style={{ width: '18rem'}} className='main-card'>
                        <Card.Body>
                            <Card.Text>
                                <p>Name: {person.name}</p>
                                <p>Email: {person.email}</p>
                                <p>Location: {person.location}</p>
                            </Card.Text>
                            <Card.Link href={'/profile/' + person.username}>Link to Profile</Card.Link>
                        </Card.Body>    
                    </Card>
                    ))}
            </>

        </div>
    )
}
export default Search