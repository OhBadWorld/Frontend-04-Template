学习笔记

## 寻路算法
1.  广度优先算法

js 中的数组，是一个天然的队列，或者是栈

js 的数组 如果用 push 入队， shift 出队  -----就变成了深度优先搜索
js 的数组 如果用 push 入队， pop 出队，  -----就变成了深度优先搜索

入队，或者说 入栈
```
push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。
此方法改变数组的长度！
```

出栈
```
pop()方法用于删除数组的最后一个元素并返回删除的元素。
此方法改变数组的长度！
```

出队
```
shift() 方法用于把数组的第一个元素从其中删除，并返回删除后的元素。
此方法改变数组的长度！
```

typeof Object  和 typeof null 结果都是 Object 

高级算法

启发式搜索 A*

LL算法 构建 AST 抽象语法树
语法分析算法： LL算法  LR算法
LL算法(Left Left 算法) 从左到右扫描，从左到右规约
