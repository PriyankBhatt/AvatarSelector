import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import _reduce from 'lodash/reduce';

import {setAvatar} from '../../actions/user';

import Avatar from '../../atoms/avatar';
import withBorder from '../../enhancer/withBorder';
import withCircularLoading from '../../enhancer/withCircularLoading';
import PopOver from '../../molecules/popOver';
import AvatarList from '../../organisms/avatarList';

import {SELECTED_AVATAR_ACTIVE_PROPS, SELECTED_AVATAR_PROPS} from './propConstant';

import './avatarSelector.scss';

const constructIdVsParam = (params) => {
  return _reduce(params, (acc, data) => {
    acc.ids.push(data.id);
    acc.dataById[data.id] = data;
    return acc;
  }, {dataById: {}, ids: []});
}

const AvatarComponent = withBorder(Avatar);

const EMPTY_READ_OBJECT = {};

class AvatarSelector extends PureComponent {

  constructor(props) {
    super(props);
    const {dataById, ids} = constructIdVsParam(props.avatars);
    this.state = {show: false, loading: false, selectedAvatar: props.avatars[0], clickedAvatar: EMPTY_READ_OBJECT, dataById, ids};
  }

  onSuccess = () => {
    this.setState({selectedAvatar: this.state.clickedAvatar, clickedAvatar: EMPTY_READ_OBJECT, loading: false, show: false});
  }

  onError = () => {
    this.setState({loading: false, show: false, clickedAvatar: EMPTY_READ_OBJECT});
  }

  onAvatarClick = (id) => {
    const data = this.state.dataById[id];
    this.setState({clickedAvatar: data, loading: true});
    setAvatar(data).then(this.onSuccess).catch(this.onError);
  }

  togglePopOver = (event) => {
    this.setState({show: !this.state.show});
  }

  setSelectedAvatarRef = (ref) => {
    this.selectedAvatarRef = ref;
  }

  renderAvatarList = () => {
    return (
      <AvatarList
        onClick={this.onAvatarClick}
        {...this.state}
      />
    )
  }

  renderPopOver() {
    return (
      <PopOver
        onHide={this.togglePopOver}
        show={this.state.show}
        target={this.selectedAvatarRef}
        placement="bottom"
        animate
        showTwisty
        rootClose
      >
        {this.renderAvatarList()}
      </PopOver>
    )
  }


  renderSelectedAvatar() {
    const extraProps = this.state.show ? SELECTED_AVATAR_ACTIVE_PROPS : SELECTED_AVATAR_PROPS;
    return (
      <div ref={this.setSelectedAvatarRef} className="avatar__container">
        <AvatarComponent
          onClick={this.togglePopOver}
          {...this.state.selectedAvatar}
          {...extraProps}
        />
      </div>
    )
  }

  render() {
    return (
      <div className="avatar__selector__container">
        {this.renderSelectedAvatar()}
        {this.renderPopOver()}
      </div>
    )
  }

}

AvatarSelector.propTypes = {
  avatars: PropTypes.array,
}

export default AvatarSelector;
