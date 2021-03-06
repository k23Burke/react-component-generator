import React from 'react';
IMMUTABLE
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class COMPONENT_NAME extends React.Component {
  static propTypes = {
PROP_TYPES
  };

  static defaultProps = {DEFAULT_PROPS
  };

  constructor(props) {
    super(props);
    this.state = {
STATE_VARIABLES
    };
  }

  render() {
    return (
      <div>
        <h1>COMPONENT_NAME Component</h1>
        <pre>{JSON.stringify(this.props)}</pre>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    // state.get(...)
  };
}

export default connect(
  mapStateToProps,
  {
    // action creators
  },
)(COMPONENT_NAME);
