import React, { useState } from 'react';
import bookImage from '../../assets/book.png';
import './SignUp.css'; // Import the CSS file

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState(null);
  const divStyle = {
    backgroundImage: `url(${bookImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff', // Text color on top of the background image
    // You can add additional styles as needed
  };
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', { username, password, email, image });
  };

  return (
    <div className="sign-up-container" style={divStyle}>
      <h1>Sign Up</h1>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <label className="sign-up-label">
          Username:
          <input className="sign-up-input" type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label className="sign-up-label">
          Password:
          <input className="sign-up-input" type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <label className="sign-up-label">
          Email:
          <input className="sign-up-input" type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label className="sign-up-label">
          Upload Self Portrait:
          <input className="sign-up-input" type="file" accept="image/*" onChange={handleImageChange} />
        </label>
        <br />
        <button className="sign-up-button" type="submit">Confirm</button>
      </form>
    </div>
  );
}