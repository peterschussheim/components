// @flow

/**
 * Taken from React Dev Tools. The idea is to have a similar effect as dev tools
 * uses (highlight updates feature) so that the color indication of an updated
 * component fades after a set period of time.
 * 
 * Currently not working. :bat:
 */

type DOMElement = {
  style: Object,
  offsetTop: number
}

function flash(
  node: DOMElement,
  flashColor: string,
  baseColor: string,
  duration: number
) {
  node.style.transition = 'none'
  node.style.backgroundColor = flashColor
  // force recalc
  void node.offsetTop
  node.style.transition = `background-color ${duration}s ease`
  node.style.backgroundColor = baseColor
}

export default flash
