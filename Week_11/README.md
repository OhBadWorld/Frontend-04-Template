学习笔记

# 重写HTML
## 语义

## 合法元素
- Element: <tagname>...</tagname>   元素
- Text:text                         文本节点
- Comment: <!-- comments -->        注释节点
- DocumentType: <!Doctype html>     
- ProcessingInstruction: <?a 1?>    预处理语法
- CDATA:<![CDATA[ ]]>               

## 字符引用
- &#161;
- &amp;
- &lt;
- &quot;

## Event:冒泡与捕获
冒泡捕获的过程是浏览器自己去处理事件的这样的一套机制

不管你监不监听，它都同样就摆在那里

任何一个事件，它都有一个先捕获再冒泡的过程，
从外到内，计算事件发生在某个元素上，就是捕获
冒泡是已经计算出事件是发生在某个元素上，层层向外去触发，元素去相应的过程

``` js
element.addEventListener('click', function(){...}, true); // 第三个参数true表示捕获事件
element.addEventListener('click', function(){...}, false); // 第三个参数false表示冒泡事件
```
**先**捕获，**再**冒泡

## DOM API
导航类操作
- parentNode
- parentElement
- childNodes
- children
- firstChild
- firstElementChild
- lastChild
- lastElementSibling
- nextSibling
- nextElementSibling
- previousSibling
- previousElementSibling

## 修改操作
- appendChild
- insertBefore
- removeChild
- replaceChild

## 高级操作
- compareDocumentPosition 是一个用于比较两个节点中关系的函数
- contains 检查一个节点是否包含另一个节点的函数
- isEqualNode 检查两个节点是否完全相同
- isSameNode 检查两个节点是否是同一个节点，实际在javascript中可以用 "==="
- cloneNode 复制一个节点，如果传入参数 true，则会连同子元素做深拷贝

## Range API
操作半个节点，操作批量节点

``` js
var range = new Range();
range.setStart(element, 9);
range.setEnd(element, 4);
var range = document.getSelection().getRangeAt(0);
```

``` js
range.setStartBefore
range.setEndBefore
range.setStartAfter
range.setEndAfter
range.selectNode
range.selectNodeContents

var fragment = range.extractContents()
range.insertNode(document.createTextNode("aaa"))
```

## CSSOM
document.styleSheets

- stylesSheets
   - Rules
   - document.styleSheets[0].cssRules
   - document.styleSheets[0].insertRule("p { color:pink; }", 0)
   - document.styleSheets[0].removeRule(0)

- window.getComputedStyle(elt, pseudoElt);
   - elt  :想要获取的元素
   - pseudoElt  :可选，伪元素

## CSSOm View
### window
- window.innerHeight, window.innerWidth   重要  浏览器可见区域的值，不含工具栏
- window.outerWidth,  window.outerHeight  浏览器整体的值，包含工具栏在内   不重要
- window.devicePixlRatio  特别重要，设备的物理像素 与 屏幕px 之间的比值
- window.screen   不重要
   - window.screen.width   不重要
   - window.screen.height  不重要
   - window.screen.availWidth   不重要
   - window.screen.availHeight  不重要

### layout
- getClientRects()   可以生成多个盒
- getBoundingClientRect()  生成一个盒


# 所有api

