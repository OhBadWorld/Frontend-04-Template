学习笔记

## 字符串分析算法
1. **字典树**
	大量高重复字符串
2. **KMP**
	在长字符串里找模式
3. **Wildcard**
	带通配符的字符串模式
4. **正则**
	字符串通用模式匹配
5. **状态机**
	通用的字符串分析
6. **LL LR**
	字符串多层级结构分析
---						
**字典树**可以用来找出 字符串中，出现次数**最多**，**最小**的值
应用的一个场合， 处理**大量的输入** 和 **字符串** 问题的场景

**哈希树**在字符串领域中 最直接的应用的体现就是**字典树**

字符串模式匹配算法KMP 
在长串(原串) 中找 短串(pattern串)

需要关注 字符串 的**自重复性行为**
pattern ： absdabcde
source:    abcdabcdabcdeabc
1. 找跳转表格   
2. 真正的匹配
leetcode.28

## proxy 与 双向绑定

1. MVVM 经典案例 调色盘  基于reactive 可监听的对象，响应式对象

## range 实现拖动
range 和 CSSOM 在 DOM API 里面的一些应用

知识扫盲(ps 看了老师的课，自行百度，普及了一些之前不知道的知识)：

1. document.body.childNodes;
- childNodes 属性返回节点的子节点集合，以 NodeList 对象。
- 提示：可以使用 length 属性来确定子节点的数量，然后您就能够遍历所有的子节点并提取您需要的信息。

2. textContent
- let text = someNode.textContent;
- someOtherNode.textContent = string;
- 一个字符串或 null.

3. document.createRange();
- 返回一个 Range 对象。
- range的介绍具体参考：`https://www.cnblogs.com/lijinwen/p/6254148.html`

- setStart:表示某个节点的range对象的起点位置;
- setEnd:表示某个节点的range对象的结束位置;

- range的方法参考：`https://www.cnblogs.com/chooper/p/6380837.html`

4. Element.getBoundingClientRect() 方法返回元素的大小及其相对于视口的位置。
- 参考： `https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect`

5. selectstart 选中开始事件

- preventDefault 取消事件的默认动作。