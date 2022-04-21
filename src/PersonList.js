import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://reqres.in/api/users?page=2`)
      .then(res => {
        const persons = res.data.data;
        this.setState({ persons });
        //console.log(res.data.data)
      })
  }

  render() {
    return (
      <ul>
        {
          this.state.persons
            .map(person =>
              <li key={person.id}>{person.email}</li>
            )
        }
      </ul>
    )
  }
}