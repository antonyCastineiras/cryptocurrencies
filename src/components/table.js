import React, {Component} from 'react';
import {TableHeader} from "./tableHeader";
import {TableRows} from "./tableRows";

class Table extends Component {

    render(){

        return(
            <div>
                <table className={"table table-hover col-8 offset-2"}>
                <TableHeader />

                    <TableRows
                        results={this.props.results}
                        currency={this.props.currency}
                    />


                </table>
            </div>
        )
    }

}

export {Table}
