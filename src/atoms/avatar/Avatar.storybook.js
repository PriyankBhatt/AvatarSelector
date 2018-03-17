import React from 'react';
import Avatar from './Avatar';
import { storiesOf } from '@storybook/react';


storiesOf('Avatar', module)
  .add('default', () => (
    <div style={{height: '60px', width: '60px'}}>
      <Avatar
        src="https://raw.githubusercontent.com/JoinColony/coding-challenge/master/avatar1.png"
        circular
      />
    </div>
  ))
;
