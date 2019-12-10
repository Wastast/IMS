import { asyncRouters } from './index';
import { findRouter } from '@/api/back-router';

function filterRouter(data) {
  let arr = [];
  let list = data;
  asyncRouters.forEach(item => {
    let index = list.findIndex(e => {
      return e.url === item.path;
    });
    if (~index) {
      arr.push(item);
      list.splice(index, 1);
    }
  });
  return arr;
}

// 过滤路由
export const getAsyncRouter = code => {
  return new Promise((resolve, reject) => {
    findRouter({
      status: 1,
      url: code
    }).then(data => {
      if (data.code === 100) {
        let list = filterRouter(data.data);
        resolve(list);
      }
    });
  });
};
