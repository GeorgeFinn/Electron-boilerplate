import React, { Component } from 'react';
import {connect} from 'react-redux'
import { TopBarMenuWrapper } from '../styles/containers.styles'
import { TopBarMenuButtonList, TopBarMenuButton } from '../styles/menu.styles'
import { createStyle, createComponent } from '../actions/generatorActions'

class TopBarMenu extends Component {
  addGrid() {
    let gridStyle = {
      name: "GridContainer10",
      category: "container",
      type: "div",
      attributes: [{
        name: "display",
        value: "grid",
      },
      {
        name: "gridTemplateColumns",
        value: "repeat(5, 20vw)"
      },
      {
        name: "gridTemplateRows",
        value: "repeat(5, 20vh)"
      },
      {
        name: "color",
        value: "#fff"
      }
    ]}
    let gridSquareWrapperStyle = {
      name: "GridSquareWrapper",
      category: "container",
      type: "div",
      attributes: []}
  }

  render() {
    return (
      <TopBarMenuWrapper>
        <TopBarMenuButtonList>
          <TopBarMenuButton onClick={this.addGrid}>Grid</TopBarMenuButton>
          <TopBarMenuButton>Button 1</TopBarMenuButton>
        </TopBarMenuButtonList>
      </TopBarMenuWrapper>
    );
  }
}
export default connect(null, { createStyle, createComponent })(TopBarMenu)
