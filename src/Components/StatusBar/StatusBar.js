import React, { Component } from 'react';
import "./StatusBar.css";
import { Avatar } from '@material-ui/core';
import statusimg from '../images/pp.png';

class StatusBar extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = { 
            statusList: []
         }
    }
    componentDidMount() {
        this.getData();
    }
    

     getData = () => {
        let data = [
            {
                "username": "Kavindu_Jaye",
                "imageURL": "../images/pp.png"
            },
            {
                "username": "Test_User",
                "imageURL": "../images/pp.png"
            },
            {
                "username": "Kavindu_Jaye",
                "imageURL": "../images/pp.png"
            },
            {
                "username": "Test_User",
                "imageURL": "../images/pp.png"
            },
            {
                "username": "Kavindu_Jaye",
                "imageURL": "../images/pp.png"
            },
            {
                "username": "Test_User",
                "imageURL": "../images/pp.png"
            },
            {
                "username": "Kavindu_Jaye",
                "imageURL": "../images/pp.png"
            },
            {
                "username": "Test_User",
                "imageURL": "../images/pp.png"
            }
        ]

        this.setState({statusList: data})
     }
     
    render() { 
        return ( 
            <div>
                <div className='statusbar_container'>
                    {
                        this.state.statusList.map((item, index) => {
                            return (
                                <div className='status'>
                                    <Avatar className='statusbar_status' src={statusimg} />
                                    <div className='statusbar_text'>{item.username}</div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
         );
    }
}
 
export default StatusBar;