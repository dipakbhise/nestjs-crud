import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom';

const Viewuser = () => {


    const [state, setstate] = useState("")


    const { id } = useParams();




    useEffect(() => {

        fetchData()
    }, [])

    const fetchData = () => {

        axios.get(`http://localhost:3000/users/${id}`).then((response) => {



            setstate(response.data.data)
        })

    }




    return (
        <>

            <h3 className="text-center p-3 text-primary">Individual user Information</h3>
            <NavLink exact to="/"><button className="btn btn-primary mx-5">Home Page</button></NavLink>

            <div class="d-flex justify-content-center">

                <div>

                    <h3 className="text-center p-3 text-secondary"> First Name: {state.firstname}</h3>
                    <h3 className="text-center p-3 text-secondary"> Last Name: {state.lastname}</h3>
                    <h3 className="text-center p-3 text-secondary"> Email: {state.email}</h3>
                    <h3 className="text-center p-3 text-secondary"> Gender: {state.gender}</h3>


                </div>

            </div>

        </>
    )
}

export default Viewuser
