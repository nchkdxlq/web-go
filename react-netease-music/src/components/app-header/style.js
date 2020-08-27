import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  height: 75px;
  background-color: #242424;

  .content {
    height: 70px;

    display: flex;
    justify-content: space-between;
  }

  .divider {
    height: 5px;
    background-color: #C20C0C;
  }
`


export const HeaderLeft = styled.div`
  display: flex;

  .logo {
    display: block;
    width: 176px;
    height: 69px;
    background-position: 0 0;
    text-indent: -9999px;
  }

  .select-list {
    display: flex;
    line-height: 70px;

    .select-item {
      position: relative;
    }
  }

`

export const HeaderRight = styled.div`
  color: #fff;
`