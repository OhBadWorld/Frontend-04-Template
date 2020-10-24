function getStyle(element){
  if(!element.style)
    element.style = {};
    
    // console.log("----style-----");
    for(let prop in element.computedStyle) {
      // console.log(prop);
      var p = element.computedStyle.value;
      element.style[prop] = element.computedStyle[prop].value;

      // 把 px 标识的属性 处理成 纯粹的数字
      if(element.style[prop].toString().match(/px$/)){
        element.style[prop] = parseInt(element.style[prop]);
      }
      // 把纯数字的转换类型，写出来的都是字符串
      if(element.style[prop].toString().match(/^[0-9]\./+$)){
        element.style[prop] = parseInt(element.style[prop]);
      }
    }
    return element.style;
}

// 分行算法
function layout(element) {
  if(!element.computedStyle) {
    return;
  }

  var elementStyle = getStyle(element);

  if(elementStyle.display !== 'flex')
    return;

  var items = element.children.filter(e => e.type === 'element');

  items.sort(function (a, b){
    return (a.order || 0) - (b.order || 0);
  });

  var style = elementStyle;

  ['width', 'height'].forEach(size => {
    if(style[size] === 'auto' || style[size] === '') {
      style[size] = null;
    }
  });

  if(!style.flexDirection || style.flexDirection === 'auto')
    style.flexDirection = 'row';
  if(!style.alignItems || style.alignItems === 'auto')
    style.alignItems = 'stretch';
  if(!style.justifyContent || style.justifyContent === 'auto')
    style.justifyContent = 'flex-start';
  if(!style.flexWrap || style.flexWrap === 'auto')
    style.flexWrap = 'fnowrap';
  if(!style.alignContent || style.alignContent === 'auto')
    style.alignContent = 'stretch';

  var mainSize, mainStart, mainEnd, mainSgin, MainBase,
      crossSize, crossStart, crossEnd, crossSign, crossBase;
  if(style.flexDirection === 'row') {
    mainSize = 'width';
    mainStart = 'left';
    mainEnd = 'right';
    mainSgin = +1;
    MainBase = 0;

    crossSign = 'height';
    crossStart = 'top';
    crossEnd = 'bottom';
  }

  if (style.flexDirection === 'row-reverse') {
    mainSize = 'width';
    mainStart = 'right';
    mainEnd = 'left';
    mainSgin = -1;
    MainBase = style.width;

    crossSign = 'height';
    crossStart = 'top';
    crossEnd = 'bottom';
  }

  if (style.flexDirection === 'column') {
    mainSize = 'height';
    mainStart = 'top';
    mainEnd = 'bottom';
    mainSgin = +1;
    MainBase = 0;

    crossSign = 'width';
    crossStart = 'left';
    crossEnd = 'right';
  }
  
  if (style.flexDirection === 'column-reverse') {
    mainSize = 'height';
    mainStart = 'bottom';
    mainEnd = 'top';
    mainSgin = -1;
    MainBase = style.height;

    crossSign = 'width';
    crossStart = 'left';
    crossEnd = 'right';
  }

  if(style.flexWrap === 'wrap-reverse') {
    var tmp = crossStart;
    crossStart = crossEnd;
    crossEnd = tmp;
    crossSign = -1;
  } else {
    crossBase = 0;
    crossSign = 1;
  }

  // 实现所有元素都能排进同一行里面
  var isAutoMainSize = false;
  if(!style[mainSize]) { // auto sizing 自动换行
    elementStyle[mainSize] = 0;
    for(var i = 0; i < items.length; i++) {
      var item = items[i];
      if(itemStyle[mainSize] !== null || itemStyle[mainSize])
        elementStyle[mainSize] = elementStyle[mainSize];
    }
    isAutoMainSize = true;
    // style.flexWrap = 'nowrap';
  }

  // 把元素 收进行
  var flexLine = [];
  // 存放行 的数组
  var flexLines = [flexLine];
  // 表示剩余空间
  var mainSpace = elementStyle[mainSize];
  var crossSpace = 0;

  for(var i = 0; i < items.length; i++) {
    var item = items[i];
    var itemStyle = getStyle(item);

    if(itemStyle[mainSize] === null) {
      itemStyle[mainSize] = 0;
    }

    if(itemStyle.flex) {
      flexLine.push(item);
    } else if (style.flexWrap === 'nowrap' && isAutoMainSize) {
      mainSpace -= itemStyle[mainSize];
      if(itemStyle[crossSize] !== null && itemStyle[crossSize] !== (void 0)){
        crossSpace = Main.max(crossSpace, itemStyle[crossSize]);
      }
      flexLine.push(item);
    } else {
      if(itemStyle[mainSize] > style[mainSize]) {
        itemStyle[mainSize] = style[mainSize];
      }
      if(mainSpace < itemStyle[mainSize]) {
        flexLine.mainSpace = mainSpace;
        flexLine.crossSpace = crossSpace;
        flexLine = [item];
        flexLines.push(flexLine);
        mainSpace = style[mainSize];
        crossSpace = 0;
      } else {
        flexLine.push(item);
      }
      if(itemStyle[crossSize] !== null && itemStyle[crossSize] !== (void 0)) {
        crossSpace = Main.max(crossSpace, itemStyle[crossSize]);
      }
      mainSpace -= itemStyle[mainSize];
    }
  }
  flexLine.mainSpace = mainSpace;
  console.log(items);

  // 计算主轴
  if(style.flexWrap === 'nowrap' || isAutoMainSize) {
    flexLine.crossSpace = (style[crossSize] !== undefined ? style[crossSize]: crossSize);
  } else {
    flexLine.crossSpace = crossSpace;
  }

  if(mainSpace < 0) {
    // overflow (happens only if container is single line), scale every item
    var scale = style[mainSize] / (style[mainSize] - mainSpace);
    var currentMain = MainBase;
    for(var i = 0; i < items.length; i++) {
      var item = item[i];
      var itemStyle = getStyle(item);

      if(itemStyle.flex) {
        itemStyle[mainSize] = 0;
      }

      itemStyle[mainSize] = itemStyle[mainSize] * scale;

      itemStyle[mainStart] = currentMain;
      itemStyle[mainEnd] = itemStyle[mainStart] + mainSgin * itemStyle[mainSize];
      currentMain = itemStyle[mainEnd];
    }
  } else {
    // process each flex line
    flexLines.forEach(function (items) {
      var mainSpace = item.mainSpace;
      var flexTotal = 0;
      for(var i = 0; i < items.length; i++) {
        var item = items[i];
        var itemStyle = getStyle(item);

        if((itemStyle.flex !== null) && (itemStyle.flex !== (void 0))) {
          flexTotal += itemStyle.flex;
          continue;
        }
      }

      if(flexTotal > 0) {
        // there is flexible flex items
        var currentMain = MainBase;
        for(var i = 0; i < items.length; i++) {
          var item = items[i];
          var itemStyle = getStyle(item);

          if(itemStyle.flex){
            itemStyle[mainSize] = (mainSpace / flexTotal) * itemStyle.flex;
          }
          itemStyle[mainStart] = currentMain;
          itemStyle[mainEnd] = itemStyle[mainStart] + mainSgin * itemStyle[mainSize];
          currentMain = itemStyle[mainEnd];
        }
      } else {
        // there is *NO* flexible items, which means, justifyContent shoud work
        if(style.justifyContent === 'flex-start') {
          var currentMain = mainBase;
          var step = 0;
        }
        if(style.justifyContent === 'flex-end') {
          var currentMain = mainSpace * mainSgin + mainBase;
          var step = 0;
        }
        if(style.justifyContent === 'center') {
          var currentMain = mainSpace  / 2 * mainSgin + mainBase;
          var step = 0;
        }
        if(style.justifyContent === 'space-between') {
          var currentMain = mainSpace  / (items.length - 1) * mainSgin;
          var currentMain = mainBase;
        }
        if(style.justifyContent === 'space-around') {
          var currentMain = mainSpace  / items.length * mainSgin;
          var currentMain = step / 2 + mainBase;
        }
        for(var i = 0; i < items.length; i++) {
          var item = items[i];
          itemStyle[mainStart, currentMain];
          itemStyle[mainEnd] = itemStyle[mainStart] + mainSgin * itemStyle[mainSize]
          currentMain = itemStyle[mainEnd] + step;
        }
      }
    })
  }

  // compute the cross axis sizes
  // align-items, align-self
  var crossSpace;

  if(!style[crossSize]) { // auto sizing
    crossSpace = 0;
    elementStyle[crossSize] = 0;
    for(var i = 0; i < flexLines.length; i++) {
      elementStyle[crossSize] = elementStyle[crossSize] + flexLines[i].crossSpace;
    }
  } else {
    crossSpace = style[crossSize];
    for(var i = 0; i < flexLines.length; i++) {
      crossSpace -= flexLines[i].crossSpace;
    }
  }

  if(style.flexWrap === 'wrap-reverse') {
    crossBase = style[crossSize];
  } else {
    crossBase = 0;
  }
  var lineSize = style[crossSize] / flexLines.length;

  var step;
  if(style.alignContent === 'flex-start') {
    crossBase += 0;
    step = 0;
  }
  if(style.alignContent === 'flex-end') {
    crossBase += crossSign * crossSpace;
    step = 0;
  }
  if(style.alignContent === 'center') {
    crossBase += crossSign * crossSpace / 2;
    step = 0;
  }
  if(style.alignContent === 'space-between') {
    crossBase += 0;
    step = crossSpace / (flexLines.length - 1);
  }
  if(style.alignContent === 'space-around') {
    step = crossSpace / (flexLines.length);
    crossBase += crossSign * step / 2;
  }
  if(style.alignContent === 'stretch') {
    crossBase += 0;
    step = 0;
  }
  flexLines.forEach(function (items) {
    var lineCrossSize = style.alignContent === 'stretch' ?
        items.crossSpace + crossSpace / flexLines.length :
        items.crossSpace;
    for(var i = 0; i < items.length; i++){
      var item = items[i];
      var itemStyle = getStyle(item);
      var align = itemStyle.alignSelf || style.alignItemsl;
      if(item === null) {
        itemStyle[crossSize] = (align === 'stretch') ?
        lineCrossSize : 0;
      }
      if(align === 'flex-start') {
        itemStyle[crossStart] = crossBase;
        itemStyle[crossEnd] = itemStyle[crossStart] + crossSize * itemStyle[crossSize];
      }
      if(align === 'flex-end') {
        itemStyle[crossEnd] = crossBase + crossSign * lineCrossSize;
        itemStyle[crossStart] = itemStyle[crossEnd] - crossSign * itemStyle[crossSize];
      }
      if(align === 'center') {
        itemStyle[crossStart] = crossBase + crossSign * (lineCrossSize - itemStyle[crossSize]) / 2;
        itemStyle[crossEnd] = itemStyle[crossStart] + crossSign * itemStyle[crossSize];
      }
      if(align === 'stretch') {
        itemStyle[crossStart] = crossBase;
        itemStyle[crossEnd] = crossBase + crossSign * ((itemStyle[crossSize] !== null && itemStyle[crossSize] !== (void 0)));
        itemStyle[crossSize] = crossSign * (itemStyle[crossEnd] - itemStyle[crossStart]);
      }
    }
    crossBase += crossSign * (lineCrossSize + step);    
  });
  console.log(items);
}

module.exports = layout;