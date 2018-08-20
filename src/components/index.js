import 'styles/components/index'
import { createVuePlugin } from 'libs/util'

import LoadingComponent from './loading/loading'
import NavbarComponent from './navbar/navbar'
import NomoreTipComponent from './nomore-tip/nomore-tip'

export const JslLoading = createVuePlugin('JslLoading', LoadingComponent)
export const JslNavBar = createVuePlugin('JslNavBar', NavbarComponent)
export const JslNomoreTip = createVuePlugin('JslNomoreTip', NomoreTipComponent)

export default {
  JslLoading,
  JslNavBar,
  JslNomoreTip
}
