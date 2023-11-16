import React from 'react';
import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div style={{
      backgroundImage: `url("${process.env.PUBLIC_URL + '/assets/images/foundimg.jpg' }")`, backgroundSize: 'cover' , height: '100%', style:'background: linear-gradient(45deg, rgba(219, 185, 163, 0.296), rgba(241, 152, 107, 0.603))'
    }}>
      <div class="form-container">
        <MyForm />
      </div>
    </div>

  );
}

export default App;