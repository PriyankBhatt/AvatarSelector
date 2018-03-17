import React from 'react';
import withCircularLoading from './withCircularLoading';
import Avatar from '../../atoms/avatar';
import { storiesOf } from '@storybook/react';


storiesOf('Avatar with loader', module)
  .add('loading with small border size', () => {
    const EnhancedComponent = withCircularLoading(Avatar);
    return (
      <div style={{width: '60px', height: '60px'}}>
        <EnhancedComponent
          src="https://raw.githubusercontent.com/JoinColony/coding-challenge/master/avatar1.png"
          borderSize="sm"
          circular
          loading
        />
      </div>
    )
  })
  .add('loading with medium border size', () => {
    const EnhancedComponent = withCircularLoading(Avatar);
    return (
      <div style={{width: '60px', height: '60px'}}>
        <EnhancedComponent
          src="https://raw.githubusercontent.com/JoinColony/coding-challenge/master/avatar1.png"
          borderSize="md"
          circular
          loading
        />
      </div>
    )
  });
