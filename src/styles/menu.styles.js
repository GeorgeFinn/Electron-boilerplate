import styled from 'styled-components'

export const TopBarMenuButton = styled.div`
  text-align: center;
  float: left;
  background-color: #fff;
  color: #000;
  transition: all .2s ease-out;
  vertical-align: middle;
  display: block;
  padding: 10px;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    background-color: #000;
    color: #fff;
  }
`

export const TopBarMenuButtonList = styled.div`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333333;
`
