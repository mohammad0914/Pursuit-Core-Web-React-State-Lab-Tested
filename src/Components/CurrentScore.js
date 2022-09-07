import React from "react";
import { Component } from "react/cjs/react.production.min";

class CurrentScore extends Component {
    constructor() {
        super();
        this.state = {
            score: 0,
            step: 1,
        };
    }

    ChangeScore() {
        const { score, step } = this.state;
        const nextScore = score + step;
        this.setState({
            score: nextScore,
        });
    }

    AddStep() {
        const { score, step } = this.state;
        const nextStep = step++
        const nextScore = score - 10
        if (nextScore >= 0) {
            this.setState({
                score: nextScore,
                step: nextStep
            })
        } else {
            window.alert("You can't afford that!")
        }
    }

    PlayAgain() {
        this.setState({
            score: 0,
            step: 0
        })
    }

    render() {
        let { score, step } = this.state;
        if (score >= 100) {
            return (
                <>
                    <h1>Current Scored:{score}</h1>
                    <h2>Play again</h2>
                    <button onClick={this.PlayAgain}>play again</button>

                </>
            );
        }

        return (
            <>
                <h1>Current Scored:{score}</h1>
                <button onClick={this.ChangeScore}>+{step}</button>
                <button onClick={this.AddStep}>Pay 10 points to change from +{step} to +{step++}</button>
            </>
        );
    }
}
export default CurrentScore;
