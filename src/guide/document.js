import React from 'react'
import ReactDOM from 'react-dom'

const modules = {}

function pathToName(path) {
  const name = path.match('./(.*).usage.js', '')[1]
  return name[0].toUpperCase() + name.slice(1)
}

// TODO: make update bg fade after 5 seconds
function Usage({ name, render, updated }) {
  return (
    <div
      style={{
        margin: 40,
        backgroundColor: updated ? 'tomato' : 'transparent'
      }}
    >
      <h1>{name}</h1>
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

// hot reload modules

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
      <Usage name={pathToName(path)} render={module.default} updated={true} />,
      mount
    )
  } catch (e) {
    console.error(e)
  }
}
