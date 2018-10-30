import React from 'react';
import {Provider, connect} from 'react-redux';
import Counter from './counter';
import reactLogo from '../assets/react-logo.png'


export default class Root extends React.Component {


    state = {
      store: this.props.store,
      globalEventDistributor: this.props.globalEventDistributor,
    };

    componentDidCatch(error, info) {
        console.log(error, info);
    }

    render() {

        let ret = <div>

        </div>;

        if (this.state.store && this.state.globalEventDistributor) {
            ret =
                <Provider store={this.state.store}>
                    <div className="card">
                        <div className="header">
                            <h2>Add items to list</h2>
                            <img className="header-logo" src={reactLogo} style={{width: 100}}/> <br />
                        </div>
                        <div className="container">
                                This was rendered by App1, which is written in React.
                                <Counter globalEventDistributor={this.state.globalEventDistributor}/>
                        </div>
                    </div>

                </Provider>
        }

        return ret;
    }
}
