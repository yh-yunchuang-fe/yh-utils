/**
 * @Author zhangyi
 * @Date 2019/1/21
 **/
import User from './User'
import Location from './Location'
import Share from './Share'
import AppInfo from './AppInfo'
import Track from './Track'
import Network from './Network'
import NativeStore from './NativeStore'
import Pay from './Pay'
import WebPage from './WebPage'

export default [
    {
        component: User,
        name: '用户 User',
        path: '/jsBridge/user'
    },{
        component: Location,
        name: '定位 Location',
        path: '/jsBridge/location'
    },{
        component: Share,
        name: '分享 Share',
        path: '/jsBridge/share'
    },{
        component: AppInfo,
        name: 'App信息 AppInfo',
        path: '/jsBridge/appInfo'
    },{
        component: Track,
        name: '埋点 Track',
        path: '/jsBridge/track'
    },{
        component: Network,
        name: '网络 Network',
        path: '/jsBridge/network'
    },{
        component: NativeStore,
        name: '存储 NativeStore',
        path: '/jsBridge/nativeStore'
    },{
        component: Pay,
        name: '支付 Pay',
        path: '/jsBridge/pay'
    },{
        component: WebPage,
        name: '页面控制 WebPage',
        path: '/jsBridge/webPage'
    }
]
