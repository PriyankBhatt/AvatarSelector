import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import './withCircularLoading.scss';

function withCircularLoading(ComposedComponent) {
  return class withCircularLoading extends PureComponent {
    render() {
      return (
        <div className="loading__enhancer">
          <ComposedComponent {...this.props} />
          {this.props.loading && <div className={`spinner ${this.props.borderSize}`} />}
        </div>
      )
    }
  }
  
  withCircularLoading.propTypes = {
    loading: PropTypes.bool, // show/hide circular spinner 
    borderSize: PropTypes.string, // customize spinner's border size can be sm,md
  }
}

export default withCircularLoading;
