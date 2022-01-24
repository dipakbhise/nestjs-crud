import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Register from './Register';

const Home = () => {

  const [data, setData] = useState([])


  useEffect(() => {

    fetchData()
  }, [data])

  const fetchData = () => {

    axios.get("http://localhost:3000/users").then((response) => {

      setData((response.data.users).reverse())
    })


  }

  const deleteData = (id) => {
    console.log(id)
    if (window.confirm("Do You want't to Delete this Student?")) {
      axios.delete(`http://localhost:3000/users/${id}`).then((response) => {

        console.log(response)
      })

    }


  }


  return (
    <>

      <Register />

      <h3 className="text-center p-3 text-secondary mt-5">Registered Users</h3>

      <table class="table my-5 text-center">
        <thead>
          <tr>
            <th scope="col">Sr. NO.</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Gender</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>

          {data.map((item, index) => {
            return (

              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
                <td>
                  <NavLink to={`/viewuser/${item.id}`}><button className="btn btn-primary">View</button></NavLink>
                  <NavLink to={`/edituser/${item.id}`}><button className="btn btn-primary mx-3" >Edit</button></NavLink>
                  <button className="btn btn-primary" onClick={() => deleteData(item.id)}>Delete</button></td>
              </tr>)
          })

          }




        </tbody>
      </table>

    </>
  )
}

export default Home
