
import React ,{ Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import NewsList from './components/newslist';
import JSON from './db.json';
class App extends Component {
   
    state = {
        news: JSON,
        filtered:[]
    }
    getKeyword= (event) => {
      console.log('event=' +event.target.value);
      let keyword = event.target.value.toLowerCase();
      let filtered = this.state.news.filter((item)=>{
        return item.title.toLowerCase().indexOf(keyword) > -1
      });
      this.setState({
        filtered: filtered
      })

    }
    render() {
        let filteredNews = this.state.filtered;
        let wholeNews = this.state.news;
        return (
            <div>
              <Header keywords={this.getKeyword}/>
              <NewsList news={filteredNews.length === 0 ?  wholeNews : filteredNews } >
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
