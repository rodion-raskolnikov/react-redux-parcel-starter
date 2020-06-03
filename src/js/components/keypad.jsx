import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class Keypad extends Component {
    static propTypes = {
        keypad: PropTypes.object,
        keypadAction: PropTypes.func,
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    action = () => {
        const { keypadAction } = this.props;
        keypadAction();
    }

    render() {
        const { keypad } = this.props;
        return (
            <Fragment>
                <div>{JSON.stringify(keypad)}</div>
                <button onClick={this.action}>Keypad Action</button>
            </Fragment>
        );
    }
}

export default Keypad;
