import 'styles/components/index'
import { createVuePlugin } from 'libs/util'

import AvatarComponent from './avatar/avatar'
import ButtonComponent from './button/button'
import CloseComponent from './close/close'
import LoadingComponent from './loading/loading'
import NavBarComponent from './navbar/navbar'
import NomoreTipComponent from './nomore-tip/nomore-tip'

export const JslLoading = createVuePlugin('JslLoading', LoadingComponent)
export const JslNavBar = createVuePlugin('JslNavBar', NavBarComponent)
export const JslNomoreTip = createVuePlugin('JslNomoreTip', NomoreTipComponent)
export const JslAvatar = createVuePlugin('JslAvatar', AvatarComponent)
export const JslButton = createVuePlugin('JslButton', ButtonComponent)
export const JslClose = createVuePlugin('JslClose', CloseComponent)
