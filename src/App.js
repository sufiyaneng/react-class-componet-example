// import logo from './logo.svg';
import React from 'react';
import Form from './Form';
import { CardList } from './CardList'
import './App.css';
const testData = [
  { name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook" },
  { name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu" },
  { name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook" },
];
class App extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {}
  // }
  // const [profiles,setProfiles]=useStae(testData)
  state = {
    profiles: testData
  }
  onSucess = (newData) => {

    this.setState((prevState) =>
    ({
      profiles:
        [...prevState.profiles, newData]
    }))
  }
  render() {
    return (
      <div>
        <div className="header">
          {this.props.title}
        </div>
        <Form onSucess={this.onSucess}></Form>
        <CardList profiles={this.state.profiles}></CardList>
      </div>
    )
  }
}

export default App;
