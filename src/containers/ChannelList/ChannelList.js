import React, { Component } from 'react'; // Learn about Obj destructuring in ES2015

class ChannelList extends Component{
  
  /* States are obj 
    States are mutable (editable)
    state is a keyword - available in class comp only 
    Do not mutate state directly.
  */

  state = {
    featureName: 'Class Comp with States',
    tvChannelList: [
      { name: 'NatGeo', desc: 'Best Infotainment Channel', logoUrl: 'http://placehold.it/200x140'},
      { name: 'Discovery', desc: '#1 Infotainment Channel', logoUrl: 'http://placehold.it/200x140'},
      { name: 'Star Sports', desc: 'Top Sports Channel', logoUrl: 'http://placehold.it/200x140'}
    ]
  }

  // writing the event handler with arrow fn -- I will have this keyword to modify state data
  handleAddToFav = () => {
    // mutating state using setState will result in re-rendering 
    this.setState( {
      tvChannelList: [
        { name: 'NatGeo [ Added ]', desc: 'Best Infotainment Channel', logoUrl: 'http://placehold.it/200x140'},
        { name: 'Discovery', desc: '#1 Infotainment Channel', logoUrl: 'http://placehold.it/200x140'},
        { name: 'Star Sports', desc: 'Top Sports Channel', logoUrl: 'http://placehold.it/200x140'}
      ]
    });
  }

  // class comp should render JSX
  render(){
    console.log("inside render");
    return(
      <div>
        <p>{this.state.featureName}</p>

        <div className="row">

          <div className="col-md-3">
            <div className="card">
              <img src={this.state.tvChannelList[0].logoUrl} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{this.state.tvChannelList[0].name}</h5>
                <p className="card-text">{this.state.tvChannelList[0].desc}</p>
                <button className="btn btn-primary" onClick={this.handleAddToFav}>Add to Fav</button>
              </div>
            </div>
          </div>


          <div className="col-md-3">
            <div className="card">
              <img src={this.state.tvChannelList[1].logoUrl} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{this.state.tvChannelList[1].name}</h5>
                <p className="card-text">{this.state.tvChannelList[1].desc}</p>
                <button className="btn btn-primary">Add to Fav</button>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <img src={this.state.tvChannelList[2].logoUrl} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{this.state.tvChannelList[2].name}</h5>
                <p className="card-text">{this.state.tvChannelList[2].desc}</p>
                <button className="btn btn-primary">Add to Fav</button>
              </div>
            </div>
          </div>


        </div>
      </div>
    )
  }
}

export default ChannelList;