import axios from 'axios'
import { getServerIp } from 'root/configs/server'
import { methods as utils } from 'src/plugin/electron'

const _instance = axios.create({
    // withCredentials: true, // 默认值为 false，值为 true 时，跨域请求强制带 cookie
    baseURL: window.isBrowser ? '/' : getServerIp(), // 如果是浏览器就请求根路径
})

_instance.interceptors.request.use(config => {
    return config
}, error => {
    console.error('request错误请求', error)
    return Promise.reject(error)
})

_instance.interceptors.response.use(({ data }) => {
    return data
}, error => {
    console.error('response错误请求', error)
    return Promise.reject(error)
})

export default _instance
