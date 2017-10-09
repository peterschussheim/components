/**
 * Makes it easier to create a glamorous component which
 * accepts props to enable/disable certain styles.
 *
 * accepts an object where the key is a prop and the value
 * is the styles that should be applied if that prop is
 * passed. Returns a function which you pass to a
 * glamorousComponentFactory.
 *
 * https://codesandbox.io/s/AGRRMl63
 *
 * @param {Object} styles The prop to styles object
 * @return {Function} the dynamic styles function
 */

export default function propStyles(styles) {
  return function dynamicStyles(props) {
    return Object.keys(props).map(key => {
      if (props[key]) {
        return typeof styles[key] === 'function'
          ? styles[key](props)
          : styles[key]
      }
      return null
    })
  }
}