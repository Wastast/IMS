import { asyncRouters } from './index';
import { findRouter } from '@/api/back-router';

// 过滤路由
export const filterRouter = () => {
  return new Promise((resolve, reject) => {
    findRouter().then(data => {
      if (data.code === 100) {
        let arr = [];
        let list = data.data;
        asyncRouters.forEach(item => {
          let index = list.findIndex(e => {
            return e.url === item.name;
          });

          if (~index) {
            arr.push(item);
            list.splice(index, 1);
          }
        });
        resolve(arr);
      }
    });
  });
};
