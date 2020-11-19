type RecordItem = { //在ts中声明类型
  tags: string[];
  notes: string;
  type: string;
  amount: number;//数据类型
  createdAt?: Date;//类/构造函数  ?意思是数据可以不存在
}