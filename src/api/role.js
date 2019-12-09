import { get, post } from './http'

// 查找角色
export const findRole = data => post('/system/imSysRole/findByPage', data)