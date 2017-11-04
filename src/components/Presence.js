import React from 'react'
import { glamorous } from 'glamorous'
import { css } from 'glamor'
import Svg from './Svg'

// export const like = css => (
//   <Svg viewBox="0 0 54 72">
//     <path
//       {...css}
//       d="M38.723 12c-7.187 0-11.16 7.306-11.723 8.13-.563-.824-4.496-8.13-11.723-8.13C8.79 12 3.533 18.163 3.533 24.647 3.533 39.964 21.89 55.907 27 56c5.11-.093 23.467-16.036 23.467-31.353C50.467 18.163 45.21 12 38.723 12z"
//     />
//   </Svg>
// )

const BusyCircle = glamorous.circle({
  fill: `${themed({ light: colors.R300, dark: colors.R200 })}`
})

const BusyPath = glamorous.path`fill: ${colors.background};`
const OfflineOuter = glamorous.path`
  fill: ${themed({ light: colors.N200, dark: colors.DN100 })};
`
const OfflineInner = glamorous.path`
  fill: ${themed({ light: colors.N40, dark: colors.DN500 })};
`
const OnlineCircle = glamorous.circle`
  fill: ${themed({ light: colors.G300, dark: colors.G200 })};
`

export default function getPresenceSvg(presence: string) {
  switch (presence) {
    case 'busy':
      return (
        <Svg>
          <BusyCircle cx="4" cy="4" r="4" />
          <BusyPath d="M3.3,1.9l2.8,2.8c0.2,0.2,0.2,0.5,0,0.7L5.4,6.1c-0.2,0.2-0.5,0.2-0.7,0L1.9,3.3c-0.2-0.2-0.2-0.5,0-0.7l0.7-0.7C2.8,1.7,3.1,1.7,3.3,1.9z" />
        </Svg>
      )
    case 'offline':
      return (
        <Svg>
          <OfflineOuter d="M4,8 C6.209139,8 8,6.209139 8,4 C8,1.790861 6.209139,0 4,0 C1.790861,0 0,1.790861 0,4 C0,6.209139 1.790861,8 4,8 Z M4,6 C5.1045695,6 6,5.1045695 6,4 C6,2.8954305 5.1045695,2 4,2 C2.8954305,2 2,2.8954305 2,4 C2,5.1045695 2.8954305,6 4,6 Z" />
          <OfflineInner d="M4,6 C5.1045695,6 6,5.1045695 6,4 C6,2.8954305 5.1045695,2 4,2 C2.8954305,2 2,2.8954305 2,4 C2,5.1045695 2.8954305,6 4,6 Z" />
        </Svg>
      )
    case 'online':
      return (
        <Svg>
          <OnlineCircle cx="4" cy="4" r="4" />
        </Svg>
      )
    default:
      return null
  }
}
