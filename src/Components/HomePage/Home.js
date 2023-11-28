import react, { Component } from 'react';
import "./Home.css";
import NavBar from '../NavBar/NavBar';
import MainContent from '../MainContent/MainContent';

class Home extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div>
                <NavBar/>
                <MainContent />
            </div>
         );
    }
}
 
export default Home;