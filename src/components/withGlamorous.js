import glamorous from 'glamorous'
import { fontSize, width, space, color } from 'styled-system'

export default Component => {
  const SystemComponent = glamorous(Component)(fontSize, width, space, color)
  return SystemComponent
}
