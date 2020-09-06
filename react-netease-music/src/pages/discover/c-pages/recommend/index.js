import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getTopBannerAction } from '../recommend/store/actionCreators';

import {
  Wrapper
} from './style'


function Recommend(props) {
  const { topBanners } = useSelector(state => {
    return {
      // topBanners: state.get('recommend').get('topBanners')
      topBanners: state.getIn(['recommend', 'topBanners'])
    }
  }, shallowEqual);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch])

  return (
    <Wrapper>
      <div className='wrap-v1'>
        content {topBanners.length}
      </div>
    </Wrapper>
  )
}

export default memo(Recommend);

// function Recommend(props) {
//   const { getBanners, topBanners } = props;

//   useEffect(() => {
//     getBanners();
//   }, [getBanners])

//   return (
//     <Wrapper>
//       <div className='wrap-v1'>
//         content {topBanners.length}
//       </div>
//     </Wrapper>
//   )
// }

// const mapStateToProps = state => {
//   return {
//     topBanners: state.recommendReducer.topBanners
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getBanners: () => {
//       dispatch(getTopBannerAction())
//     }
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommend));



