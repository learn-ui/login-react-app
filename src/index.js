
import React ,{ Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import NewsList from './components/newslist';
import JSON from './db.json';
class App extends Component {
   
    state = {
        news: JSON
    }
    getKeyword= (event) => {
      console.log('event=' +event.target.value);
    }
    render() {
     
        return (
            <div>
              <Header keywords={this.getKeyword}/>
              <NewsList news={this.state.news} >
               <h1>This is news feed-</h1>
              </NewsList>
          </div>
        )

    }

}

ReactDOM.render(<App/>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
