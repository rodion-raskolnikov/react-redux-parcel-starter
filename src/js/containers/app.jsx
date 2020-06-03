import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import AppNav from './app-nav';
import AppGame from './app-game';

class App extends Component {
    static propTypes = {
    };

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        const { data } = this.props.match.params;
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <Fragment>
                <AppNav />
                <AppGame />
            </Fragment>
        );
    }
}

export default App;
