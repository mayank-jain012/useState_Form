
import './App.css';
import { useState } from 'react';
function App() {
  const [formdata, setFormdata] = useState({
    Name: "",
    Email: "",
    Password: "",
    Confirm_Password: ""
  });
  const handle = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormdata((prev) => {
      return {
        ...prev, [name]: value
      }
    })
  }
  return (
    <div className="App">
      <div className='sub-app'>
        <div className='Form'>
          <p>Name</p>
          <input
            type="text"
            id='name'
            className='name'
            name='Name'
            placeholder='Enter your name'
            autoComplete='false'
            value={formdata.Name}
            onChange={handle}
          />
        </div>
        <div className='Form'>
          <p>Email</p>
          <input
            type="email"
            id='email'
            className='email'
            name='Email'
            placeholder='Enter your Email'
            autoComplete='false'
            value={formdata.Email}
            onChange={handle}
          />
        </div>
        <div className='Form'>
          <p>Password</p>
          <input
            type="password"
            id='password'
            className='password'
            name='Password'
            placeholder='Enter your Password'
            autoComplete='false'
            value={formdata.Password}
            onChange={handle}
          />
        </div>
        <div className='Form'>
          <p>Confirm Password</p>
          <input
            type="password"
            id='confirmPassword'
            className='confirmPassword'
            name='Confirm_Password'
            placeholder='Enter your Confirm Password'
            autoComplete='false'
            value={formdata.Confirm_Password}
            onChange={handle}
          />
        </div>
        <p>The name {formdata.Name} and email id {formdata.Email}</p>
      </div>

    </div>
  );
}

export default App;
