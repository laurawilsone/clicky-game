// dependencies
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import FriendCard from "./components/FriendCard";
import Footer from "./components/Footer";
import dog from "./dog.json";
import "./App.css";
// import images

// sets score to 0
class App extends Component {
  state = {
    dog,
    clickedDog: [],
    score: 0
  };

imageClick = event => {
  const currentDog = event.target.alt;
  const DogAlreadyClicked =
    this.state.clickedDog.indexOf(currentDog) > -1;

  // clicked on dog alread selected
  if(DogAlreadyClicked) {
    this.setState({
      dog: this.state.dog.sort(function(a, b) {
        return 0.5 - Math.random();
      }),
      clickedDog: [],
      score: 0
    });
      alert("You lose. Play again?");
  } else {
    this.setState(
      {
        dog: this.state.dog.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedDog: this.state.clickedDog.concat(
          currentDog
        ),
        score: this.state.score + 1
      },
      // if you get all 12 Dog 
      () => {
        if(this.state.score === 12) {
          alert("You Win!")
          this.setState({
            dog: this.state.dog.sort(function(a, b) {
              return 0.5 - Math.random();
            }),
            clickedDog: [],
            score: 0
          });
        }
      }
    );
  }
};

// the order of components to be rendered: navbar, jumbotron, friendCard, footer
  render() {
    return (
      <div>
        <Navbar
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.dog.map(dog => (
            <FriendCard 
              imageClick={this.imageClick}
              id={dog.id}
              key={dog.id}
              image={dog.image}
            />
          ))}
      </div>
      <Footer />
      </div>
    );
  }
}

export default App;


