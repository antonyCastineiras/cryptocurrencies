import React, {Component} from 'react';

class Header extends Component {

    render(){

        // Currencies
        let currencyList = ['USD', 'GBP', 'EUR', 'JPY'];

        const currencies = currencyList.map(result =>{
            return(
                <option key={result.id} value={result}>{result}</option>
            )}
        );

        return(
            <div className={" col-8 offset-2 row"}>

                <div className={"col-4"}>
                    <h3>Logo</h3>
                </div>


                <div className={"col-8"}>

                    <div className={"col-6 order1"}>
                        <p> Last updated :
                             <span>{ this.props.timeSinceUpdate  }s ago</span>
                        </p>
                    </div>


                    <div className="col-6 order1">
                        <select name="currency-selector" id=""
                                ref = {(input)=> this.menu = input}
                                onChange={this.props.updateCurrency}>
                            {currencies}
                        </select>
                    </div>

                </div>
            </div>
        )
    }

}

export {Header}
