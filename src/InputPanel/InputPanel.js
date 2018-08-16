import React, {Component} from 'react';
import './InputPanel.css'

class InputPanel extends Component {
    render() {
        return (
            <div className="InputPanel">
                <div className="input-group">
                    <input type="text" className="form-control" id="inputURL" placeholder="URL"/>
                    <div className="input-group-append">
                        <input type="submit" className="input-group-append btn btn-outline-secondary" id="addURL" value="Add" />
                    </div>
                </div>
            </div>
        );
    }
}

export default InputPanel;
