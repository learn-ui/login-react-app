import React , {Component} from 'react';
import '../css/style.scss';
import JSON from '../db.json';

class Header extends Component {
   
    constructor(props) {
        super(props);

        this.state = {
            keyword: 'hello',
            title: 'The keyword is : '
        }

    }

   
    inputClickHandler(event ) {
       this.setState({
            keywords: event.target.value
        })
    }


    render () {
        console.log(this.state.keywords);
        return (
            <header>
                <div className="logo"> LOGO </div>
                <input type="text" onChange={ this.inputClickHandler.bind(this) }/>
                <div>{this.state.title} {this.state.keywords} </div>
            </header>
        )

    }
    
}

export default Header;