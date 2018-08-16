import React, {Component} from 'react';
import InfoPanel from "../InfoPanel/InfoPanel";
import InputPanel from "../InputPanel/InputPanel";
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Site Monitor</h1>
                </header>
                <InfoPanel infoRows={[]}/>
                <InputPanel />
            </div>
        );
    }
}

export default App;
