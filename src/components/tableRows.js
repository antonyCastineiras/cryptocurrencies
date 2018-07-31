import React, {Component} from 'react';

class TableRows extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        const results = this.props.results;
        const currency = this.props.currency;


        const rows = results
            .map( (result, i) => {

            return (
                <tr key={result.id}>
                    <th scope={"row"}>{i + 1}</th>

                    <td>{this.props.currency}</td>
                    <td>{result['quotes']['USD']['price']}</td>
                    <td>{result['quotes']['USD'].market_cap}</td>
                    <td>{result['quotes']['USD'].percent_change_24h}%</td>
                </tr>
            )

        });

        return(
            <tbody>
                {rows}
            </tbody>
        )
    }

}

export {TableRows}
