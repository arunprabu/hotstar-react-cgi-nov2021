import React, { Component } from 'react'

class TrendingShows extends Component {
  // state, if/else, lists and keys, props in class comp 

  constructor(props){
    super(props); // must call super() to get 'this' keyword
    console.log(props);
    // have state data within constructor
    this.state = {
      period: props.day,
      trendingShowList: [
        { id: 1, name: 'Planet Earth', host: 'David Attenborough', isInWatchlist: false, ranking: 1},
        { id: 2, name: 'T20 CWC', host: 'Saurav Ganguly', isInWatchlist: false, ranking: 2},
        { id: 3, name: 'Man VS Wild', host: 'Bear Grylls', isInWatchlist: false, ranking: 3},
        { id: 4, name: 'Planet Earth II', host: 'David Attenborough', isInWatchlist: false, ranking: 4 },
      ]
    }
  }

  handleAddToWatchlist = (index) => {
    console.log(index);

    // updating state immutably
    let dupShowList = [ ...this.state.trendingShowList ]; // shallow copy
    dupShowList[index].isInWatchlist = !dupShowList[index].isInWatchlist;
    
    this.setState({
      trendingShowList: dupShowList
    });
  }

  render() {
    // ideal place for you to loop thru the state data
    // Let's work on lists
    let shows = null;
    shows = this.state.trendingShowList.map( (show, index) => {
      console.log(show);
      return(
        <li className="list-group-item" key={show.id}> 
          #{show.ranking} {show.name} | Host: {show.host}
          <button type="button" 
            className="btn btn-primary btn-sm float-end" 
            onClick={this.handleAddToWatchlist.bind(this, index)}>
            { show.isInWatchlist? 'In Watchlist': 'Add to Watchlist'}
          </button>
        </li>
      )
    });

    return (
      <div>
        <h4>Trending {this.state.period}</h4>
        <ul className="list-group">
          {/* conditional rendering */} 
          { 
            this.state.trendingShowList && this.state.trendingShowList.length > 0?
              shows
            : 
              <div className="alert alert-warning">
                No Trending Shows Found!
              </div>
          }   
        </ul>

      </div>
    )
  }
}

export default TrendingShows;