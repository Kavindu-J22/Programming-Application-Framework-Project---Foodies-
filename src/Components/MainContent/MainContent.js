import React, { Component } from 'react';
import "./MainContent.css";
import { Grid } from '@material-ui/core'
import StatusBar from '../StatusBar/StatusBar';
import MainPage from '../MainPage/MainPage';

class MainContent extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div>
                <Grid container>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={6}>
                        <div>
                            <StatusBar />
                            <MainPage />
                        </div>
                    </Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={2}></Grid>
                </Grid>
            </div>
         );
    }
}
 
export default MainContent;