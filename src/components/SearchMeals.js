import React, { Component } from "react";
import {
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Button,
} from "react-bootstrap";
import "../style/index.css";
import { connect } from "react-redux";
import { setMeals } from "../actions";

class SearchMeals extends Component {

  constructor() {
    super();

    this.state = {
      meal: ''
    }
  }

  search(){
    let { meal } = this.state;

    console.log(meal);

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`

    console.log(url);
    
    fetch(url, {
      method: 'GET'
    }).then(response => response.json())
      .then(json => 
        this.props.setMeals(json.meals)
        )
  }

  render() {
    return (
      <Form className="form-inline">
        <FormGroup className="form-group">
          <FormLabel>
            Meal
          </FormLabel>{" "}
          <FormControl 
          type="text" 
          placeholder="chicken"
          onChange={ event => this.setState({meal: event.target.value})}
          >
          </FormControl>
        </FormGroup>
        {" "}
        <Button onClick={() => this.search()} className="button">Submit</Button>
      </Form>
    );
  }
}

export default connect(null, {setMeals}) (SearchMeals);
