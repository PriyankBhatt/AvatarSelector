import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Overlay from 'react-overlays/lib/Overlay';

import Transition from './Transition';
import ChildRenderer from './ChildRenderer';

import './popOver.scss';

const DEFAULT_PADDING = 14;
const ARROW_WIDTH = 8;

class PopOver extends PureComponent {

  renderWithAnimation(props) {
    return (
      <Transition {...props} />
    )
  }

  render() {
    const {props} = this;
    return (
      <div>
        <Overlay
          show={props.show}
          onHide={props.onHide}
          placement={props.placement}
          container={document.body}
          rootClose={props.rootClose}
          transition={props.animate && this.renderWithAnimation}
          target={props.target}
        >
          <ChildRenderer children={this.props.children} showTwisty={this.props.showTwisty} />
        </Overlay>
      </div>
    )
  }
}

PopOver.propTypes = {
  animate: PropTypes.bool, // animate dialogBox while mouting and unmouting
  show: PropTypes.bool, // show/hide popover dialog box
  rootClose: PropTypes.bool, // determine whether to hide dialogBox by clicking outside
  showTwisty: PropTypes.bool, // show/hide triangular point determining where target was clicked
  target: PropTypes.object, // target relative to which popover should be shown
  children: PropTypes.object, // elements to be rendered within dialog box
  placement: PropTypes.string, // where to show dialog box ['bottom', 'right', 'left', 'up'] to target
  onHide: PropTypes.func, // function to called when clicked outside dialogBox helpful in case of rootClose
}

export default PopOver;
