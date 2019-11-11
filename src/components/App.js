import React from 'react';
import CurrentTime from './CurrentTime'
import Schedule from './Schedule'

export default function App() {

  return (
    <div style={{ padding: '0 .5rem'}}>
    <headder style={{ display: 'flex', alignItems:"baseline" }}>
      <h1 style={{ flex:1}}>Chores</h1> 
      <CurrentTime />
    </headder>
    <Schedule />
    </div>
  );
}
