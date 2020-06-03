import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class Grid extends Component {
    static propTypes = {
        grid: PropTypes.object,
        gridAction: PropTypes.func,
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    action = () => {
        const { gridAction } = this.props;
        gridAction();
    }

    render() {
        const { grid } = this.props;
        return (
            <Fragment>
                <div>{JSON.stringify(grid)}</div>
                <button onClick={this.action}>Grid Action</button>
            </Fragment>
        );
    }
}

export default Grid;
