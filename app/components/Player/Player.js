// @flow
import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/collection';

type Props = {};

class Player extends Component<Props> {
  props: Props;

  funkify() {
    console.log('yah');
  }

  render() {
    const {
      fetchCollection
    } = this.props;

    console.log(this.props);

    return (
        <AppBar position="static" color="default">
            <Toolbar>
                <form>
                <TextField
                    id="name"
                    label="Name"
                />
                </form>
                <button onClick={fetchCollection}>haha</button>
            </Toolbar>
        </AppBar>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(null, mapDispatchToProps)(Player);