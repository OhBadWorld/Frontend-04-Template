学习笔记

Object.create(Array)方法
复制一个一维数组，
  |--创建一个新对象，以Array为原型
  |--继承了原来Array的方法，也继承了原来Array的数据，实现完美clone
  |--新clone出的Array生命周期短于老的Array，可以节省很多内存空间

javascript 异步处理机制
 |
 |--callback
 |
 |--Promise
 |
 |--async/await