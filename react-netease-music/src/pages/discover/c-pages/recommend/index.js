import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';

import { getTopBannerAction } from '../recommend/store/actionCreators'

import {
  Wrapper
} from './style'


function Recommend(props) {
  const { getBanners } = props;

  useEffect(() => {
    getBanners();
  }, [getBanners])

  return (
    <Wrapper>
      <div className='wrap-v1'>
        content
      </div>
    </Wrapper>
  )
}

// export default memo(Recommend);

const mapStateToProps = state => {
  return {
    topBanners: state.recommendReducer.topBanners
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getBanners: () => {
      dispatch(getTopBannerAction())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommend));



