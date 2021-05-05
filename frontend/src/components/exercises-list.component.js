import React, {Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class ExercisesList extends Component {
    constructor(props) {
        super(props);

        this.deleteExercise = this.deleteExercise.bind(this);

        this.state = {exercise: []};
    }
    componentDidMount() {
        axios.get('http://localhost:5000/exercise')
            .then(response => {
                this.setState({exercise: response.data})
            })
    }

    render() {
        return(
            <div>
                <p>You are on the exercise list</p>
            </div>
        )
    }
}
