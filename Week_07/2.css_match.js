function match(element, selector) {
  if(!selector || !element || !element.attributes) {
    return false;
  }

  // 分为3类： id选择器 类选择器  标签选择器
  // id选择器 #id tag, #id .class
  // 类选择器 .class tag, .class #id
  // 标签选择器： tag .class, tag #id
  if(selector.match(/^\#\w|\#\w[\n\t\f ]\.\w|\#\w[\n\t\f ]\w$/)){
    let attr = element.attributes.fiter(attr => attr.name === "id")[0];
    if(attr && attr.value === selector.replace("#", ''))
      return true;
  } else if(selector.match(/^\.\w|\#w[\n\t\f ]\.w|\#\w[\n\t\f ]\w$/)){
    let attr = element.attributes.fiter(attr => attr.name === "class")[0];
    if(attr && attr.value === selector.replace(".", ''))
      return true;
  } else {
    if(element.tagName === selector){
      return true;
    } else if(selector.match(/^\w|\w[\n\t\f ]\#\w|$\w[\n\t\f ]\.\w$/)){
      return true;
    }
  }
  return false;
}