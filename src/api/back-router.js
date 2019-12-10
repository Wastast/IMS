import { get, post } from './http';

// 添加路由
export const addRouter = data => post('/system/imSysResource/insert', data);

// 查找路由
export const findRouter = data => post('/system/imSysResource/findByList', data);

// 修改路由
export const updateRouter = data => post('/system/imSysResource/update', data);

// 删除路由
export const deleteRouter = data => post('/system/imSysResource/delete', data);
