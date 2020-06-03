import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
    load,
} from '../redux/actions';

@connect(
    state => ({
        data: state.data,
    }),
    { load, },
)
class AppNav extends Component {
    static propTypes = {
        data: PropTypes.object,
        load: PropTypes.func,
    };

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    loadData = () => {
        const { load } = this.props;
        load();
    };

    render() {
        const { data } = this.props;
        console.log(data);
        return (
            <Fragment>
                <div>{JSON.stringify(data)}</div>
                <button onClick={this.loadData} >Load</button>
            </Fragment>
        );
    }
}

export default AppNav;
