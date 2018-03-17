import React from 'react';
import AvatarSelector from './AvatarSelector';
import { storiesOf } from '@storybook/react';

const AVATAR_LIST = [
  {id: 1, label: "Avatar 1", src: "https://raw.githubusercontent.com/JoinColony/coding-challenge/master/avatar1.png"},
  {id: 2, label: "Avatar 2", src: 'https://raw.githubusercontent.com/JoinColony/coding-challenge/master/avatar2.png'},
  {id: 3, label: "Avatar 3", src: 'https://raw.githubusercontent.com/JoinColony/coding-challenge/master/avatar3.png'},
  {id: 4, label: "Avatar 4", src: 'https://raw.githubusercontent.com/JoinColony/coding-challenge/master/avatar4.png'},
  {id: 5, label: "Avatar 5", src: 'https://raw.githubusercontent.com/JoinColony/coding-challenge/master/avatar5.png'},
  {id: 6, label: "Avatar 6", src: 'https://raw.githubusercontent.com/JoinColony/coding-challenge/master/avatar6.png'},
]


storiesOf('Avatar Selector', module)
  .add('default', () => {
    return (
      <AvatarSelector avatars={AVATAR_LIST} />
    )
  });
