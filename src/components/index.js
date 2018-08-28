import 'styles/components/index'
import { createVuePlugin } from 'libs/util'

import AvatarComponent from './avatar/avatar'
import BtnScalableJump from './btn-scalable-jump/btn-scalable-jump'
import ButtonComponent from './button/button'
import CloseComponent from './close/close'
import GridComponent from './grid/grid'
import GridItemComponent from './grid-item/grid-item'
import LoadingComponent from './loading/loading'
import NavBarComponent from './navbar/navbar'
import NomoreTipComponent from './nomore-tip/nomore-tip'

import ToastPlugin from './toast'

export const JslAvatar = createVuePlugin('JslAvatar', AvatarComponent)
export const JslBtnScalableJump = createVuePlugin('JslBtnScalableJump', BtnScalableJump)
export const JslButton = createVuePlugin('JslButton', ButtonComponent)
export const JslClose = createVuePlugin('JslClose', CloseComponent)
export const JslGrid = createVuePlugin('JslGrid', GridComponent)
export const JslGridItem = createVuePlugin('JslGridItem', GridItemComponent)
export const JslLoading = createVuePlugin('JslLoading', LoadingComponent)
export const JslNavBar = createVuePlugin('JslNavBar', NavBarComponent)
export const JslNomoreTip = createVuePlugin('JslNomoreTip', NomoreTipComponent)
export const JslToast = ToastPlugin
