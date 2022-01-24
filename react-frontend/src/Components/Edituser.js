import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router'
import { NavLink } from 'react-router-dom';

const Edituser = () => {


    const [state, setstate] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        cpassword: "",
        gender: ""
    })

    const history = useHistory();
    const { id } = useParams();


    useEffect(() => {

        fetchData()
    }, [])

    const fetchData = () => {

        axios.get(`http://localhost:3000/users/${id}`).then((response) => {

            setstate(response.data.data)
        })

    }


    const handler = (e) => {
        setstate({ ...state, [e.target.name]: e.target.value })

        console.log(state)
    }

    const submitevent = (e) => {
        e.preventDefault();

        if (state.branch === "") {
            alert("select your Branch")

        } else {

            axios.patch(`http://localhost:3000/users/${id}`, state).then((response) => {

                console.log(response)

                alert("User Data Updated Successfully")

                history.push("/")
            }).catch((error) => {
                console.log(error)
            })

        }
    }



    return (
        <>

            <h3 className="text-center p-3 text-secondary">Update user Data</h3>
            <NavLink exact to="/"><button className="btn btn-primary mx-5">Home Page</button></NavLink>

            <form class="d-flex justify-content-center" onSubmit={(e) => submitevent(e)}>



                <div className="mx-5">

                    <div class="mb-3">

                        <label for="fname" class="form-label" >First Name</label>

                        <input type="text" class="form-control" id="fname" name="firstname" value={state.firstname} onChange={(e) => handler(e)} required />

                    </div>

                    <div class="mb-3">

                        <label for="lname" class="form-label">Last Name</label>

                        <input type="text" class="form-control" id="lname" name="lastname" value={state.lastname} onChange={(e) => handler(e)} required />

                    </div>

                    <div class="mb-3">

                        <label for="email" class="form-label">Email</label>

                        <input type="text" class="form-control" id="email" name="email" value={state.email} onChange={(e) => handler(e)} required />

                    </div>

                    <div class="mb-3">

                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" name="password" value={state.password} onChange={(e) => handler(e)} required />

                    </div>

                    <div class="mb-3">

                        <label for="cpassword" class="form-label">Confirm Password</label>
                        <input type="password" class="form-control" id="cpassword" name="confirmpassword" value={state.confirmpassword} onChange={(e) => handler(e)} required />

                    </div>



                    <div class="mb-3">


                        <label for="gender" class="form-label">Gender</label>

                        <select class="form-select" name="gender" id="gender" value={state.gender} onChange={(e) => handler(e)} required>
                            <option value="">Select Your Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>

                    </div>


                    <button type="submit" class="btn btn-primary">UPDATE USER DATA</button>

                </div>

            </form>

        </>
    )
}

export default Edituser
