import React, {Component} from 'react';

class InfoRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.url}</td>
                <td>{this.props.responseCode}</td>
                <td>{this.props.status}</td>
            </tr>
        );
    }
}

export default InfoRow;
