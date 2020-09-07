import React, { memo } from 'react';

import TopBanner from './c-cpns/top-banner'

import {
  Wrapper
} from './style'


function Recommend(props) {
  return (
    <Wrapper>
      <TopBanner />
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



