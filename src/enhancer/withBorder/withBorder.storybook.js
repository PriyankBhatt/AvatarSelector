import React from 'react';
import withBorder from './withBorder';
import Avatar from '../../atoms/avatar';
import { storiesOf } from '@storybook/react';


storiesOf('Avatar with border', module)
  .add('Medium size border on hover with fade', () => {
    const EnhancedComponent = withBorder(Avatar);
    return (
      <div style={{width: '60px', height: '60px'}}>
        <EnhancedComponent
          src="https://raw.githubusercontent.com/JoinColony/coding-challenge/master/avatar1.png"
          circular
          withHover
          withFade
        />
      </div>
    )
  })
  .add('Medium size border with theme color', () => {
    const EnhancedComponent = withBorder(Avatar);
    return (
      <div style={{width: '60px', height: '60px'}}>
        <EnhancedComponent
          src="https://raw.githubusercontent.com/JoinColony/coding-challenge/master/avatar1.png"
          circular
          withActiveColor
        />
      </div>
    )
  })
  .add('Small size border on hover', () => {
    const EnhancedComponent = withBorder(Avatar);
    return (
      <div style={{width: '60px', height: '60px'}}>
        <EnhancedComponent
          src="https://raw.githubusercontent.com/JoinColony/coding-challenge/master/avatar1.png"
          circular
          withHover
          borderSize="sm"
        />
      </div>
    )
  })
;
