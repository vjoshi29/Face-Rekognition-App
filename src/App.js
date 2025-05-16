import React, { useState } from 'react';
import './App.css';
import companyLogo from './visitors/logo.jpg'; // Place logo in src/assets/
const uuid = require('uuid');

function App() {
  const [image, setImage] = useState('');
  const [uploadResultMessage, setUploadResultMessage] = useState('Please upload an image to authenticate.');
  const [visitorName, setVisitorName] = useState('placeholder.jpeg');
  const [isAuth, setAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  function sendImage(e) {
    e.preventDefault();

    if (!image) {
      setUploadResultMessage('Please select an image before submitting.');
      return;
    }

    const visitorImageName = uuid.v4();
    setVisitorName(image.name);
    setIsLoading(true);

    fetch(`https://wjz6aqc343.execute-api.us-east-1.amazonaws.com/dev/visitor--pics/${visitorImageName}.jpeg`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'image/jpeg'
      },
      body: image
    }).then(async () => {
      const response = await authenticate(visitorImageName);
      setIsLoading(false);

      if (response.Message === 'Success') {
        setAuth(true);
        setUploadResultMessage(`Hi ${response.firstName} ${response.lastName}, welcome to work.Hope you have a productive day!`);
      } else {
        setAuth(false);
        setUploadResultMessage('Authentication Failed: This person is not an employee.');
      }
    }).catch(error => {
      setIsLoading(false);
      setAuth(false);
      setUploadResultMessage('Error during authentication. Please try again.');
      console.error(error);
    });
  }

  async function authenticate(visitorImageName) {
    const requestUrl = 'https://wjz6aqc343.execute-api.us-east-1.amazonaws.com/dev/employee?' +
      new URLSearchParams({
        objectKey: `${visitorImageName}.jpeg`
      });

    return await fetch(requestUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
      .then((data) => data)
      .catch(error => console.error(error));
  }

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <div className="header">
        <img src={companyLogo} alt="Company Logo" />
        <h1>FaceEntry</h1>
      </div>

      <div className="toggle-switch">
        <label>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          Dark Mode
        </label>
      </div>

      <form onSubmit={sendImage}>
        <input
          type='file'
          name='image'
          onChange={e => {
            setImage(e.target.files[0]);
            setVisitorName(e.target.files[0]?.name || 'placeholder.jpeg');
          }}
        />
        <button type='submit'>Authenticate</button>
      </form>

      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <div className={isAuth ? 'Success' : 'Failure'}>
          {uploadResultMessage}
        </div>
      )}

      <img
        src={require(`./visitors/${visitorName}`)}
        alt="Visitor"
        height={250}
        width={250}
      />

      <footer className="footer">
        © 2025 FaceEntry Inc. | Powered by AWS Rekognition
      </footer>
    </div>
  );
}

export default App;



