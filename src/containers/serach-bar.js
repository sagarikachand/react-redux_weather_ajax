import React , { Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import  { fetchWeather } from '../actions/index.js'



class SearchBar extends Component {

    constructor(props){
        super(props);
        this.state ={
            term : ''
        }
        // Replace this.onInputChange to the bound version of onInputChange 
        this.onInputChange = this.onInputChange.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }

    onInputChange(event) {
        // console.log(event.target.value) 
        // When there is a direct reference then the 'this' keyword used below will be not the SearchBar context
        //So we have to bind this in constructor, In ES5 the 'this' context is autoBind, But With ES6 class we have to bind to  'this'
        this.setState ({
            term: event.target.value
        })

    }
    onFormSubmit(event){
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState ({
            term : ''
        })
    }

    // With form we get the sub,it form on 'ENTER' , with simple div we dont get that   
render() {
    return (
        <form onSubmit={ this.onFormSubmit } className="input-group">
        
        <input 
         placeholder ="City Name"
         className="form-control"
         value={this.state.term}
         onChange={this.onInputChange}/>
        <span className="input-group-btn">
        <button type="submit" className="btn btn-secondary" >Submit</button>
        </span>
        
        </form>
    );
}


}


function mapDispatchToProps(dispatch){
    //Syntax Long  ou use as below
    // return {
        //    actions : bindActionCreators(actions , dispatch)
    // }
    return bindActionCreators( { fetchWeather }, dispatch)
}

export default connect( null , mapDispatchToProps )(SearchBar)




/*   
There are 3 ways to call dispatch that is map your action creator to the component

A)

this.props.dispatch(fetchWeather() )               ------> That is ignore mapDispatchToProps and use dispatch in component

  1. More boilerPlate
  2. Redux concerns in child component

B) 
function mapDispatchToProps(dispatch){            --------> Manually wrap , the props that will be exposed will be individual keys
    return {
        fetchWeather : () =>{
          dispatch(fetchWeather() )
        },
        someotherAction : (argument) =>{
            dispatch(someotherAction(argument) )
        }
    }
}
  1. Redundant

C)

function mapDispatchToProps(dispatch){             ------>  Use BindActionCreators, The props that will be exposed is 'actions'
     return {
           actions : bindActionCreators(actions , dispatch)
     }
}


Additionally use can ditch mapDipatchToprops and directly pass this in connect. connect will call dispatch
// New short way to create action Creator and also using es6 syntax { word : word } === {word}


export default connect(mapStatetoProps, { fetchWeather })(SearchBar)



*/