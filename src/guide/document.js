// @flow

// NOTE: currently the browser needs to be manually refreshed when adding new
// usage files.

import React from 'react'
import ReactDOM from 'react-dom'
import flash from '../util/flash'

const modules = {}

function pathToName(path) {
  const name = path.match('./(.*).usage.js', '')[1]
  return name[0].toUpperCase() + name.slice(1)
}

// TODO: make update bg fade after 5 seconds
// if (updated):
// transition backgroundColor: 'tomato' and then transition BACK to backgroundColor: 'transparent'
function Usage({ name, render, updated }) {
  return (
    <div
      style={{
        margin: 40
      }}
    >
      <h3
        style={{
          borderBottom: 'solid 1px'
        }}
      >
        {name}
      </h3>
      {render()}
    </div>
  )
}

export default function render(rootNode) {
  const guides = Object.keys(modules)
    .map(path => {
      return {
        path,
        name: pathToName(path),
        key: path
      }
    })
    .sort()

  guides.forEach(({ path, name, key }) => {
    const mount = document.createElement('div')
    mount.id = path
    rootNode.appendChild(mount)

    ReactDOM.render(<Usage name={name} render={modules[key].default} />, mount)
  })
}

// hot reload modules, taken from webpack docs

var context = require.context('../components', false, /\.usage.js$/)

context.keys().forEach(function(key) {
  var module = context(key)
  modules[key] = module
})

if (module.hot) {
  module.hot.accept(context.id, () => {
    var reloadedContext = require.context('../components', false, /\.usage.js$/)
    var changedModules = reloadedContext
      .keys()
      .map(key => {
        return [key, reloadedContext(key)]
      })
      .filter(reloadedModule => {
        return modules[reloadedModule[0]] !== reloadedModule[1]
      })
    changedModules.forEach(module => {
      // ensure cache is current
      modules[module[0]] = module[1]
      reloadUsage(module[0], module[1])
    })
  })
}

// Taken from James Long
function reloadUsage(path, module) {
  try {
    const mount = document.getElementById(path)
    ReactDOM.unmountComponentAtNode(mount)
    ReactDOM.render(
      <Usage name={pathToName(path)} render={module.default} />,
      mount
    )
  } catch (e) {
    console.error(e)
  }
}
