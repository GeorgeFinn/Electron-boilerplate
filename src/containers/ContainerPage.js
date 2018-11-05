import React, { Component } from 'react';
import { HomeContainer } from '../styles/containers.styles'
import { connect } from 'react-redux'
import { getContainers, getComponents, getStyles } from '../actions/generatorActions'


class ContainerPage extends Component {
  componentDidMount() {
    this.props.getContainers()
    this.props.getComponents()
    this.props.getStyles()
  }

  generateComponentTree(component) {
    const componentTree = { wrapper: this.props.styles.find(e => e._id === component.wrapper), styles: [], components: [] }
    componentTree.wrapper = this.props.styles.find(e => e._id === component.wrapper)
    component.children.forEach(child => {
      const compChildren = this.props.components.find(e => e._id === child)
      const styleChildren = this.props.styles.find(e => e._id === child)
      compChildren ? componentTree.components.push(compChildren) : componentTree.styles.push(styleChildren)
    })
    return componentTree
  }
  renderComponentChild(component, i) {
    const tree = this.generateComponentTree(component)
    const wrapperStyle = {}
    tree.wrapper.attributes.forEach(attribute => {
      wrapperStyle[attribute.name] = attribute.value.toString()
    })
    console.log("3", wrapperStyle)
    return (<div key={i} style={wrapperStyle}>Hello</div>)
  }

  renderComponentTree(componentTree) {
    const wrapperStyle = {}
    componentTree.wrapper.attributes.forEach(attribute => {
      wrapperStyle[attribute.name] = attribute.value.toString()
    })
    console.log("2", wrapperStyle)
    return (<div style={wrapperStyle}>
      {componentTree.components.map((comp, i) => {
        return this.renderComponentChild(comp, i)
      })}
      </div>)
  }

  renderComponents() {
    const containerTree = this.generateComponentTree(this.props.containers[0])
    console.log("containerTree",containerTree)
    return this.renderComponentTree(containerTree)
  }
  render() {
    return this.props.styles.length && this.props.components.length && this.props.containers.length ? this.renderComponents() : (
      <span>Loading Tree...</span>
    )
  }
}

const mapStateToProps = state => {
  return {
    containers: state.generator.containers,
    components: state.generator.components,
    styles: state.generator.styles
  }
}
export default connect(mapStateToProps, { getContainers, getComponents, getStyles })(ContainerPage);
