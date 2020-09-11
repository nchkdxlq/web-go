import styled from 'styled-components';


export const Wrapper = styled.div`
  height: 35px;
  padding: 0 10px 0 34px;
  background-position: -225px -156px;
  border-bottom: 2px solid #C10D0C;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    align-self: flex-start;
    display: flex;
    align-items: center;
  }

  .title {
    font-size: 20px;
    font-weight: normal;
    line-height: 28px;
  }

  .keyword {
    display: flex;
    margin: 5px 0 0 20px;

    .item {
      font-size: 12px;
      color: #333;
      font-family: Arial, Helvetica, sans-serif;
    }

    .divider {
      margin: 0 10px;
      color: #ccc;
    }

    /* [?] 同类元素的最后一个元素 */
    span:last-child {
      display: none;
    }
  }


  .right {
    display: flex;
    align-items: center;
  }

  .icon {
    /* [?]  display: inline-block 为块级元素，同时可以设置宽高 */
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-left: 4px;
    background-position: 0 -240px;
  }
`