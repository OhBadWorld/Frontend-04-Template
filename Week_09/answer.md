## 请写出下面选择器的优先级： div#a.b .c[id=x] 0 1 3 1 #a:not(#b) 0 2 0 0 *.a 0 0 1 0 div.a 0 0 
div#a.b .c[id=x] [0 1 3 1]
#a:not(#b)       [0 2 0 0]
*.a              [0 0 1 0]
div.a            [0 0 1 1]

## 编写一个 match 函数。它接受两个参数，第一个参数是一个选择器字符串性质，第二个是一个 HTML 元素。这个元素你可以认为它一定会在一棵 DOM 树里面。通过选择器和 DOM 元素来判断，当前的元素是否能够匹配到我们的选择器。（不能使用任何内置的浏览器的函数，仅通过 DOM 的 parent 和 children 这些 API，来判断一个元素是否能够跟一个选择器相匹配。）以下是一个调用的例子。

``` js
    /**
     * 匹配选择器
     */
    function matchSelectors(selector, element) {
      // 先匹配当前元素是否匹配
      let tagSelector = selector.match(/^[\w]+/gm);
      let idSelectors = selector.match(/(?<=#)([\w\d\-\_]+)/gm);
      let classSelectors = selector.match(/(?<=\.)([\w\d\-\_]+)/gm);

      /**
       * 实现复合选择器，实现支持空格的 Class 选择器
       * --------------------------------
       */
      // 检查 tag name 是否匹配
      if (tagSelector !== null) {
        if (element.tagName.toLowerCase() !== tagSelector[0]) return false;
      }
      // 检测 id 是否匹配
      if (idSelectors !== null) {
        let attr = element.attributes['id'].value;
        if (attr) {
          for (let selector of idSelectors) {
            if (attr.split(' ').indexOf(selector) === -1) return false;
          }
        }
      }
      // 检测 class 是否匹配
      if (classSelectors !== null) {
        let attr = element.attributes['class'].value;
        if (attr) {
          for (let selector of classSelectors) {
            if (attr.split(' ').indexOf(selector) === -1) return false;
          }
        }
      }

      return true;
    }

    /**
     * 匹配元素
     */
    function match(selector, element) {
      if (!selector || !element.attributes) return false;

      let selectors = selector.split(' ').reverse();

      if (!matchSelectors(selectors[0], element)) return false;

      let curElement = element;
      let matched = 1;

      // 递归寻找父级元素匹配
      while (curElement.parentElement !== null && matched < selectors.length) {
        curElement = curElement.parentElement;
        if (matchSelectors(selectors[matched], curElement)) matched++;
      }

      // 所有选择器匹配上为 匹配成功，否则是失败
      if (matched !== selectors.length) return false;

      return true;
    }

    let matchResult = match('div #id.class', document.getElementById('id'));
    console.log('Match example by 三钻');
    console.log('matchResult', matchResult);
```

## 为什么 first-letter 可以设置 float 之类的,而 first-line 不行呢 
1. first-letter 和 first-line 都作用于块级元； 
2. first-letter:作用于第一行的首字符； 
3. first-line：作用于第一行的所有字符； 

first-letter 只作用首个字符，所以可以拿到准确的位置及大小，不用关心变化布局所带来的影响，而 first-line 作用于第一行所有元素，而一行的长度本身取决于很多因素，布局包括元素宽度，文档宽度和文本的文字大小等，也就是说，first-line 所影响的内容是按照该行内元素的样式决定了，此时设置块属性会导致不断的重新计算第一行所容许的元素，大概率会进入死循环或者计算爆栈