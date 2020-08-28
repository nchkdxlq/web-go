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
  display: flex;
  align-items: center;
  color: #ccc;
  font-size: 12px;

  .search {
    width: 158px;
    height: 32px;
    border-radius: 16px;

    /*【?】这是什么选择器 */
    input {
      &::placeholder {
        font-size: 12px;
      }
    }
  }

  .center {
    width: 90px;
    height: 32px;
    line-height: 32px;
    text-align: center; 
    border: 1px solid #666;
    border-radius: 16px;
    margin: 0 16px;
    background-color: transparent;
  }

  div {
    cursor: pointer;
  }
`