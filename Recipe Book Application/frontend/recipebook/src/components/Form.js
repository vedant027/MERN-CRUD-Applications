import React, { useState } from 'react'

export default function Form() {
  const [formData,setFormData] = useState({
    email:'',
    password: '',
    phone: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const submitData = () => {
    const pattern = '^[A-Za-z0-9]+@[A-Za-z]+\\.[A-Za-z]{2,3}'
    if(formData.email!=='' || formData.password!=='' || formData.phone!==''){
      if(isNaN(formData.phone) || formData.phone.length!==10){
        alert("phone number is invalid")
      }
      if(!formData.email.match(pattern)){
        alert("Invalid email")
      }
        console.log(JSON.stringify(formData));
    }
  }

  return (
    <div>
       <form style={{ margin: "10px" }}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              className="form-control"
              id="password"
              name="password"
              placeholder="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              name="phone"
              placeholder="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

            <button type="button" onClick={submitData} className="btn btn-primary">
              Submit
            </button>
        </form>
    </div>
  )
}
