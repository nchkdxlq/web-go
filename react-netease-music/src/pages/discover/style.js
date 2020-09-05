import styled from 'styled-components'

export const DiscoverWrapper = styled.div`
  .top {
    height: 30px;
    background-color: #C20C0C;
  }
`

export const TopMenu = styled.div`
  display: flex;
  padding-left: 180px;
  padding-right: 354px;
  justify-content: space-around;
  .item {
    padding-top: 4px;
    a {
      padding: 4px 13px;
      color: #fff;

      &:hover, &.active{
        text-decoration: none;
        background-color: #9B0909;
        border-radius: 20px;
      }
    }
  }
`