import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './avatar.scss';

const ENTER_KEY_CODE = 13;

class Avatar extends Component {

  shouldComponentUpdate(nextProps) {
    return (this.props.src !== nextProps.src);
  }

  handleClick = () => {
    this.props.onClick(this.props.id);
  }

  onKeyPress = (event) => {
    if (event.keyCode === ENTER_KEY_CODE) {
      this.props.onClick(this.props.id);
    }
  }

  render() {
    const {src, circular} = this.props;
    return (
      <div tabIndex="0" onClick={this.handleClick} onKeyDown={this.onKeyPress} className="avatar__image__container">
        <img src={src} className={classnames('avatar__image', {circular: circular})} />
      </div>
    )
  }
}

Avatar.propTypes = {
  id: PropTypes.number,
  src: PropTypes.string,
  circular: PropTypes.bool,
  onClick: PropTypes.func,
}

export default Avatar;
