const localStorageKeyName = 'tagList';
type TagListModel= {
  data: string[]
  fetch:()=>string[]
  create: (name:string)=> string
  save:()=>void
}
const tagListModel: TagListModel = {
  data: [],
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') ;
    return this.data;
  },
  create(name: string){
    if(this.data.indexOf(name) >=0){return false;}
    this.data.push(name);
    this.save();
    return true;
  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  },
//第一步model.js改成ts后缀，把报错改掉
//类型在其他文件，把共用的类型放到custom.d.ts.不需要引用

};
export default tagListModel