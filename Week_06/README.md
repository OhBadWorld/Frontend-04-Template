学习笔记
#### 浏览器
```
URL (http)-> html(parse)-> dom(css computing) -> dom with css(layout) -> dom with position(render) ->bitmap
```

##### 有限状态机处理字符串
1. 每一个状态都是一个机器
  - 在每个机器里，我们可以做计算，存储，输出。。。
  - 所有的这些机器接受的输入是一致的
  - 状态机的每一个机器本身没有状态，如果我们用函数来表示，他应该是纯函数(无副作用)
2. 每一个机器知道下一个状态
  - 每个机器都有确定的下一个状态(moore)
  - 每个机器根据输入决定下一个状态(mealy)  

 ##### http 解析
  1. 第一步 HTTP请求总结
   设计一个HTTP请求的类
   content type 是一个必要的字段，要有默认值
   http请求的body 是 键值对 格式
   不同的content-type 影响body的格式
   还有一个 Content-Length

  2. 第二步 send函数总结
  在Request的构造器中收集必要的信息
  设计一个send函数，把请求真实发送到服务器
  send函数应该是异步的，所以返回Promise

  3. 第三步 发送请求
  设计支持已有的connection 或者 自己新建connec
  收到数据传给parser
  根据parser的状态resolve Promise

  4. 第四步 ResponseParser总结
  Response必须分段构造，所有我们要用一个ResponseParser来装配
  ResponseParser分段处理ResponseText，我们用状态机来分析文本的结构

  5. 第五步
  Response的body 可能根据 Content-Type 有不同的结构，因此我们会采用子Parser的结构来解决问题
  以TrunkBodyParser为例，我们同样用状态机来处理body的格式
  

