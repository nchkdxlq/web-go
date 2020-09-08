import React, { memo, useState, useCallback, useEffect, useRef } from 'react';
import { useSelector, useDispatch, shallowEqual, connect } from 'react-redux';

import { getTopBannerAction } from '../../store/actionCreators';

import { Carousel } from 'antd';
import { 
  BannerWrapper,
  BannerLeft,
  BannerRight,
  BannerControl
} from './style';

// export default memo(function TopBanner() {

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const { topBanners } = useSelector(state => {
//     return {topBanners: state.getIn(['recommend', 'topBanners'])}
//   }, shallowEqual)

//   const dispatch = useDispatch();

//   const bannerRef = useRef();
//   useEffect(() => {
//     dispatch(getTopBannerAction());
//   }, [dispatch]);

//   const bannerChange = useCallback((from, to) => {
//     setImmediate(() => setCurrentIndex(to));
//   }, [])

//   const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl + "?imageView&blur=40x20")

//   return (
//     <BannerWrapper bgImage={bgImage}>
//       <div className='banner wrap-v2'>
//         <BannerLeft>
//           <Carousel effect='fade' autoplay ref={bannerRef} beforeChange={bannerChange}>
//           {
//             topBanners.map((item, index) => {
//               return (
//                 <div className="banner-item" key={item.imageUrl}>
//                   <img className="image" src={item.imageUrl} alt={item.typeTitle} />
//                 </div>
//               )
//             })
//           }
//           </Carousel>
//         </BannerLeft>
//         <BannerRight />
//         <BannerControl>
//           <button className="btn left" onClick={e => bannerRef.current.prev()}></button>
//           <button className="btn right" onClick={e => bannerRef.current.next()}></button>
//         </BannerControl>
//       </div>
//     </BannerWrapper>
//   )
// })




class TopBanner extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
    };
    this.carouselRef = null;
  }

  componentDidMount() {
    const { fetchTopBanner } = this.props;
    fetchTopBanner();
  }

  bannerChange = (from, to) => {
    setImmediate(() => {
      this.setState({
        currentIndex: to
      });
    });
  }

  nextPage = () => {
    this.carouselRef.next();
  }

  prePage = () => {
    this.carouselRef.next();
  }

  render() {
    const { topBanners } = this.props;
    const { currentIndex } = this.state;
    let bgImage = null;
    if (topBanners && topBanners.length > currentIndex) {
      bgImage = topBanners[currentIndex].imageUrl + "?imageView&blur=40x20";
    }

    return (
      <BannerWrapper bgImage={bgImage}>
        <div className='banner wrap-v2'>
          <BannerLeft>
            <Carousel effect='fade' autoplay ref={e => this.carouselRef = e} beforeChange={this.bannerChange}>
            {
              topBanners.map((item, index) => {
                return (
                  <div className="banner-item" key={item.imageUrl}>
                    <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                  </div>
                )
              })
            }
            </Carousel>
          </BannerLeft>
          <BannerRight />
          <BannerControl>
            <button className="btn left" onClick={e => this.prePage()}></button>
            <button className="btn right" onClick={e => this.nextPage()}></button>
          </BannerControl>
        </div>
      </BannerWrapper>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     topBanners: state.getIn(['recommend', 'topBanners'])
//   }
// }

// 返回当前组件需要使用的数据
const mapStateToProps = state => ({
  topBanners: state.getIn(['recommend', 'topBanners'])
})


// 返回当前组件需要使用的action
const mapDispatchToProps = dispatch => ({
  fetchTopBanner: () => { dispatch(getTopBannerAction()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(TopBanner);