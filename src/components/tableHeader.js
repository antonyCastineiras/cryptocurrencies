import React, {Component} from 'react';

class TableHeader extends Component {

    render(){
        return(
            <thead>
                <tr>
                    <th scope={"col"}></th>
                    <th scope={"col"}>Cryptocurrency</th>
                    <th scope={"col"}>Price</th>
                    <th scope={"col"}>Market Cap</th>
                    <th scope={"col"}>24hr Change</th>
                </tr>
            </thead>
        )
    }

}

export {TableHeader}
