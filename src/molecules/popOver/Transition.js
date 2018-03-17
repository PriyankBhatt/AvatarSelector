import React, {PureComponent} from 'react';
import {CSSTransitionGroup} from 'react-transition-group';

const TRANSITION_LEAVE_TIMEOUT = 300;
const TRANSITION_APPEAR_TIMEOUT = 500;

import './popOver.scss';

class Transition extends PureComponent {

  componentWillReceiveProps(nextProps) {
    if (this.props.in && !nextProps.in) {
      setTimeout(this.toggleShowTransitionGroup, TRANSITION_LEAVE_TIMEOUT);
    }
  }

  toggleShowTransitionGroup = () => {
    this.props.onExited();
  }

  render() {
    return (
      <CSSTransitionGroup
        transitionName="popOver__transition"
        className="popOver__transition"
        component="div"
        transitionEnter={false}
        transitionAppearTimeout={TRANSITION_APPEAR_TIMEOUT}
        transitionLeaveTimeout={TRANSITION_LEAVE_TIMEOUT}
        transitionLeave
        transitionAppear
      >
        {this.props.in ? this.props.children : null}
      </CSSTransitionGroup>
    )
  }
}

export default Transition;
