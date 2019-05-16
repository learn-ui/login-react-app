import React , {Component} from 'react';
import '../css/style.scss';


class Header extends Component {
   
    constructor(props) {
        super(props);

        this.state = {
            keyword: 'hello',
            title: 'The keyword is : ',
            active: 'non-active'
        }

    }

   
    inputClickHandler(event ) {
        let value = event.target.value !== '' ? 'active': 'non-active';
       this.setState({
            keywords: event.target.value,
            active: value
        })
    }


    render () {
        console.log(this.props.keywords);
        return (
            <header className={this.state.active}>
                <div className="logo"> LOGO </div>
                <input type="text" onChange={ this.props.keywords }/>

                <div>{this.state.title} {this.state.keywords} </div>
            </header>
        )

    }
    
}

export default Header;