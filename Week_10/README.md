学习笔记

# 正常流排版
- 收集盒进行
- 计算盒在行中的排布
- 计算行的排布

BFC(从上往下排) 正常流里面会发生边距折叠
IFC(从左往右排) 不会出现这种情况

# BFC合并
## Block
- Blokc Container: 里面有BFC的
   - 能容纳正常流的盒，里面就有BFC，
   - block
   - inline-block
   - table-cell
   - flex item
   - grid cell
   - table-caption 
- Block-level Box: 外面有BFC的
- Block level
   - display:block
   - display:felx
   - display:table
   - display:grid
- inline level
   - display:inline-block
   - display:inline-flex
   - display:inline-table
   - display:inline-grid
- display:run-in (跟着上一个元素走)
- Block Box = Block Container + Block-level Box: 里外都有BFC的
   - floats  (浮动场景)
   - absolutely positioned elements  (绝对定位场景)
   - block containers (such as inline-block, table-cells, and table-captions) that are note block boxes
      - flex items
      - grid cell
   - and block boxes with 'overflow' other than 'visible'

## BFC合并
能容纳正常流的盒，我们都认为它会创建BFC
- block box && overflow:visible
   - BFC 合并 与 float
   - BFC 合并 与 边距折叠

# Flex排版
- 收集盒进行
- 计算盒在主轴方向的排布
- 计算盒在交叉轴方向的排布

## 分行
- 根据主轴尺寸，把元素分进行
- 若设置了no-wrap, 则强行分配进第一行

## 计算主轴方向
- 找出所有哦Flex元素
- 把主轴方向的剩余尺寸按比例分配给这些元素
- 若剩余空间为负数，所有flex元素为0，等比压缩剩余元素

## 计算交叉轴方向
- 根据每一行中最大元素尺寸计算行高
- 根据行高flex-align和item-align，确定元素具体位置

# 动画与绘制
- @keyframes定义   关键帧
   - @rule定义关键帧
- animation：使用关键帧

## Animation
- animation-name 时间曲线
- animation-duration 动画的时长
- animation-timing-function 动画的时间曲线
- animation-delay 动画开始前的延迟
- animation-iteration-count 动画的播放次数
- animation-direction 动画的方向

## Transition
- transition-property 要变换的属性
- transition-duration 变换的时长
- transition-timing-function  时间曲线
- transition-delay 延迟

# 绘制
- 几何图形
   - border
   - box-shadow
   - border-radius
- 文字
   - font
   - text-decoration
- 位图
   - background-image

## 应用技巧
- data uri + svg