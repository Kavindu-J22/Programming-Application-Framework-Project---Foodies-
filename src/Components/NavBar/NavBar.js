import React, { Component } from 'react'
import './NavBar.css'
import { Grid } from '@material-ui/core'
import { FaHome } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaSearchLocation } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import Avatar from '@material-ui/core/Avatar';
import pp from '../images/pp.png';

class NavBar extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <div className='navbar_barvontent'>
                    <Grid container>
                        <Grid item xs={2}></Grid>
                        <Grid item xs={3} className='navbar_Appname'>
                            Foodies
                        </Grid>
                        <Grid item xs={3}>
                            <input text="text" className='navbar_searchBar' placeholder="Search" />
                        </Grid>
                        <Grid item xs={3} style={{"display":"flex"}}>
                            <i className='navbar_img' style={{"width":"25px"}}><FaHome /></i>
                            <i className='navbar_img' style={{"width":"25px"}}><FaFacebookMessenger /></i>
                            <i className='navbar_img' style={{"width":"25px"}}><FaSearchLocation /></i>
                            <i className='navbar_img' style={{"width":"25px"}}><FaRocket /></i>
                            <Avatar src={pp} className='navbar_img' style={{"maxWidth":"25px","maxHeight":"25px"}} />
                        </Grid>
                        <Grid item xs={1}></Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

 
export default NavBar;