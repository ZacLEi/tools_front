import './App.css';
import React from 'react';
import MainLayout from "./layout/MainLayout";

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
// function App() {
//   return (
//     <div className="App">
//       <MainLayout/>
//     </div>
//   );
// }

export default App;
