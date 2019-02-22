import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PieceOfSwot from './components/PieceOfSwot';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Grid container spacing={16} xs={8} style={{ margin: 'auto', marginTop: '8rem' }}>
          <Grid item xs={6}>
            <PieceOfSwot title='Strengths' />
          </Grid>
          <Grid item xs={6}>
            <PieceOfSwot title='Weaknesses' />
          </Grid>
          <Grid item xs={6}>
            <PieceOfSwot title='Opportunities' />
          </Grid>
          <Grid item xs={6}>
            <PieceOfSwot title='Threats' />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
