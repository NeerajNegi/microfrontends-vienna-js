import React from 'react';
import {Provider} from 'react-redux';
import ElementInput from './element-input';
import reactLogo from '../assets/react-logo.png';


export default class Root extends React.Component {

    state = {
        store: this.props.store,
        globalEventDistributor: this.props.globalEventDistributor,
        elementList: []
    };

    componentDidCatch(error, info) {
        console.log(error, info);
    }

    render() {

        let ret = <div>

        </div>;

        if (this.state.store && this.state.globalEventDistributor) {
            this.state.store.subscribe(value => {
                this.setState({...this.state, elementList: this.state.store.getState().elementList.filter(item => !item.completed)});
            });

            ret =
                <Provider store={this.state.store}>
                    <div className="card">
                        <div className="header">
                            <h2>Add items to list</h2>
                            <img className="header-logo" src={reactLogo} style={{width: 100}}/> <br/>
                        </div>
                        <div className="container">
                            This was rendered by App1, which is written in React.
                            <br/>
                            Items in list TODO: <strong>{this.state.elementList.length}</strong>
                            <ElementInput globalEventDistributor={this.state.globalEventDistributor}/>
                        </div>
                    </div>

                </Provider>;
        }

        return ret;
    }

    getFinsihedTasksCount(){
        return this.state.elementList.filter(item => item.completed).length;
    }
}
