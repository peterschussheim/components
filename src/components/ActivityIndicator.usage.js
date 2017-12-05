import React from 'react'
import Div, { glamorous } from 'glamorous'
import Spinner from 'react-cli-spinners'
import ActivityIndicator from './ActivityIndicator'

export default () => {
  return (
    <div>
      <ActivityIndicator
        defaultOn={true}
        onToggle={on => console.log('toggle', on)}
        onReset={on => console.log('reset', on)}
        render={toggle => (
          <button>
            Click me! {' '}
            <Spinner
              {...toggle.getTogglerProps({ on: toggle.on })}
              type="arc"
            />
          </button>
        )}
      />
    </div>
  )
}
