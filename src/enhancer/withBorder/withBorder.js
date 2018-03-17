import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import _memoize from 'lodash/memoize';

import './withBorder.scss';

const appendClass = function(condition, name) {
  return condition ? name : '';
}

const getClassName = function({withHover, withCursor, withFade, withActiveColor, withColor, borderSize = 'md', circular, withFocus}, {isFocussed}) {
  return `border__enhancer ${borderSize}  ${appendClass(withHover, 'withHover')}
    ${appendClass(withCursor, 'withCursor')} ${appendClass(withFade, 'withFade')}
    ${appendClass(withColor, 'withColor')} ${appendClass(circular, 'circular')}
    ${appendClass(withActiveColor, 'withActiveColor')} ${appendClass(withFocus && isFocussed, 'withFocus')}`;
}

function withBorder(ComposedComponent) {
  return class withBorder extends PureComponent {

    state = {isFocussed: false};

    toggleFocus = _memoize((bool) => (event) => {
      this.setState({isFocussed: bool});
    })

    render() {
      return (
        <div onFocus={this.toggleFocus(true)} onBlur={this.toggleFocus(false)} className={getClassName(this.props, this.state)}>
          <ComposedComponent {...this.props} />
        </div>
      )
    }
  }

  withBorder.propTypes = {
    withHover: PropTypes.bool, // adds border on hover
    withCursor: PropTypes.bool, // adds cursor pointer
    withFade: PropTypes.bool, // add fade background only works with withFocus/withHover
    withActiveColor: PropTypes.bool, // add border with theme color
    withFocus: PropTypes.bool, // add border on focus
    circular: PropTypes.bool, // add border-radius 50% to make it round
    borderSize: PropTypes.string, // border size can be sm,md
  }
}

export default withBorder;
