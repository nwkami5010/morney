const localStorageKeyName = 'recordList';//常量代替
const recordListModel = {
  fetch() {//获取数据 as 强制规定类型为RecordItem
    return JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem;

  },
  save(data: RecordItem[]) {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(data));
  },
//第一步model.js改成ts后缀，把报错改掉
//类型在其他文件，把共用的类型放到custom.d.ts.不需要引用
  clone(data: RecordItem[] |RecordItem) {//类型或者数组
    return JSON.parse(JSON.stringify(data));
  }
};
export default recordListModel;