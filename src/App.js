import React from 'react';

// class App extends Component {
//   render() {
//     return (
//         <React.Fragment>
//           <label htmlFor="bar">bar</label>
//           <input type="text" onChange={() => {console.log("I am changed!")}}/>
//         </React.Fragment>
//     );
//   }
// }

const App = () => {
  const profiles = [
    { name: "Taro", age: 10},
    { name: "Hanako", age: 5},
    { name: "NoAge"}
  ]
  return (
      <div>
        {
          profiles.map((profiles, index)=>{
            return <User name={profiles.name} age={profiles.age} key={index} />
          })
        }
      </div>
  )
}

const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old! </div>
}

User.defaultProps = {
  age: 1
}

export default App;
