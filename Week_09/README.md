学习笔记

# CSS总体结构
- @charset
- @import
- rules
   - @media
   - @page
   - rule

- At-rules
   - @charset         声明css的字符集
   - @import          级联规则
   - @media           查询媒体的特性   常用
   - @page            与打印相关  理论上叫分页媒体(打印机)
   - @counter-style   列表前的小黑点 写列表的时候，定制列表形状的时候
   - @keyframes       定义动画用的      常用
   - @fontface        定义一切字体 web font  icon font   常用
   - @supports        用来检测某些css的功能是否存在
   - @namespace       处理其他命名空间的标记的标签

# CSS规则
- 选择器
- 声明
   - Key
   - Value

- Selector  有2个标准
- Key       
   - Properties
   - Variables

- Value

# 选择器语法
- 简单选择器
   - *
   - div svgla
   - .cls
   - #id
   - [attr=value]
   - :hover
   - ::before

- 复合选择器
   - <简单选择器><简单选择器><简单选择器>
   - * 或者 div 必须写在最前面
- 复杂选择器
   - <复合选择器> <sp> <复合选择器>
   - <复合选择器> ">" <复合选择器>
   - <复合选择器> "~" <复合选择器>
   - <复合选择器> "+" <复合选择器>
   - <复合选择器> "||" <复合选择器>

# 伪类
- 链接/行为
   - :any-link            匹配所有的超链接
   - :link :visited
   - :hover
   - :active
   - :focus
   - :target

- 树结构
   - :empty
   - :nth-child()       括号里面 处理 奇数偶数 问题  或 3n + 1  4n + 1
   - :nth-last-child()
   - :first-child :last-child :only-child

- 逻辑型
   - :not伪类
   - :where :ha

# 伪元素
- ::before
- ::after
- ::first-line    选中第一行
- ::first-letter  选中第一个字母
