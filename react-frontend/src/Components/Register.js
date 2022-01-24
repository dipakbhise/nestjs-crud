import axios from 'axios'
import React, { useState } from 'react'

const Register = () => {

    const [state, setstate] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        cpassword: "",
        gender: ""
    })

    const handler = (e) => {
        setstate({ ...state, [e.target.name]: e.target.value })
    }

    const submitevent = (e) => {
        e.preventDefault();

        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (state.password != state.confirmpassword) {
            alert("Passwords are Not Matching")

        } else if (state.email.match(validRegex)) {

            axios.post("http://localhost:3000/users", state).then((response) => {

                console.log(response)

                setstate({
                    firstname: "",
                    lastname: "",
                    email: "",
                    password: "",
                    confirmpassword: "",
                    gender: ""
                })
                alert("User Registered Successfully")
            }).catch((error) => {
                console.log(error)
            })



        } else {

            alert("Enter Proper Email Address")



        }
    }


    return (
        <>

            <h3 className="text-center p-3 text-secondary">Registration</h3>

            <form onSubmit={(e) => submitevent(e)}>

                <div class="d-flex justify-content-center">

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

                    </div>



                </div>

                <div class="d-flex justify-content-center">

                    <button type="submit" class="btn btn-primary">Register</button>

                </div>

            </form>

        </>
    )
}

export default Register
