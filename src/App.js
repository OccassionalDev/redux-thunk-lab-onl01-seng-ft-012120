import React, { Component } from 'react';
import { conenct } from 'react-redux'

class App extends Component {
 
  componentDidMount() {
    console.log(this.props)
    this.props.fetchCats()
  }
 
  render() {
    console.log(this.props.catPics)
    return (
      <div className="App">
        <h1>CatBook</h1>
        {/* missing component */}
      </div>
    );
  }
}
 
const mapStateToProps = state => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    fetchCats: () => dispatch(fetchCats())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)