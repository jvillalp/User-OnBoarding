import React from 'react';
import './App.css';
import UserForm from './UserForm'
import styled from 'styled-components';

const AppStyle = styled.div`
margin: 0 auto;
background:blue;
padding: 2%;
`;

function App() {
  return (
    <AppStyle>
    <div className="App">
      <UserForm users="juana"/>
    </div>
    </AppStyle>
  );
}

export default App;
