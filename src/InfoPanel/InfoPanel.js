import React, {Component} from 'react';
import InfoRow from "./InfoRow";

class InfoPanel extends Component {
    render() {
        const infoRows = this.props.infoRows.map(infoRow => (
            <InfoRow url={infoRow.url} responseCode={infoRow.responseCode} status={infoRow.status}/>
        ));

        return (
            <div className="InfoPanel">
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>URL</th>
                        <th>Response Code</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                        {infoRows}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default InfoPanel;
