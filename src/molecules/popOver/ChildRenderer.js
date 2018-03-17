import React, {PureComponent} from 'react';

import './popOver.scss';

class ChildRenderer extends PureComponent {

  renderTwisty() {
    const {props} = this;
    const {arrowOffsetLeft: left = 0, arrowOffsetTop: top = 0} = props;
    return (
      <div style={{left, top}} className={`popOver__twisty ${props.placement}`} />
    )
  }

  renderContent() {
    return (
      <div className="popOver__content__container">
        {this.props.showTwisty && this.renderTwisty()}
        {this.props.children}
      </div>
    );
  }

  render() {
    return (
      <div style={this.props.style} className="popOver__container">
        {this.renderContent()}
      </div>
    );
  }
}

export default ChildRenderer;
