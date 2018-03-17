import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import _map from 'lodash/map';

import Avatar from '../../atoms/avatar';
import withBorder from '../../enhancer/withBorder';
import withCircularLoading from '../../enhancer/withCircularLoading';

import {
  AVATAR_LIST_LOADING_PROPS,
  SELECTED_AVATAR_LIST_PROPS,
  AVATAR_LIST_PROPS
} from './propConstant';

import './avatarList.scss'

const getAvatarListExtraProps = ({selectedAvatar, clickedAvatar, loading}, currentId) => {

  // if currentId matches to one which is clicked and loading is true that means api is called
  // and we are waiting for response hence render with loader props
  if (currentId == clickedAvatar.id && loading) {
    return AVATAR_LIST_LOADING_PROPS;
  }
  // if currentId matches with avatar that is currently selected then send selected avatar props
  // containing border with md size
  if (currentId === selectedAvatar.id) {
    return SELECTED_AVATAR_LIST_PROPS;
  }
  return AVATAR_LIST_PROPS;
}

const AvatarComponent = withBorder(withCircularLoading(Avatar));

class AvatarList extends PureComponent {

  renderTitle() {
    return (
      <div className="avatar__list__title">Choose your avatar</div>
    )
  }

  renderAvatar = (id) => {
    const data = this.props.dataById[id];
    const extraProps = getAvatarListExtraProps(this.props, id);
    return (
      <li key={id}>
        <div className="avatar__container">
          <AvatarComponent
            onClick={this.props.onClick}
            {...data}
            {...extraProps}
          />
        </div>
      </li>
    )
  }

  render() {
    return (
      <div className="avatar__list__container">
        {this.renderTitle()}
        <ul className="avatar__list">
          {_map(this.props.ids, this.renderAvatar)}
        </ul>
      </div>
    );
  }

}

AvatarList.propTypes = {
  ids: PropTypes.array, // array of avatar Ids
  dataById: PropTypes.object, // object containing id vs avatar Object
  onClick: PropTypes.func, // function to handle click on single avatar
}

export default AvatarList;
