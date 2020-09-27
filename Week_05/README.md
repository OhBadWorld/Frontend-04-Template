### 学习笔记

#### 简单语句

1. ExpressionStatement

2. EmptyStatement

3. DebuggerStatement

4. ThrowStatement

5. ContinueStatement

6. BreakStatement

7. ReturnStatement

   javascript让计算机完成计算，并实现一定的流程控制

#### 复合语句

1. BlockStatement
2. IfStatement
3. SwitchStatement
4. IterationStatement
5. WithStatement
6. LabelledStatement
7. TryStatement

#### 声明

1. FunctionDeclaration
2. GeneratorDeclaration
3. AsyncFunctionDeclaration
4. AsyncGeneratorDeclaration
5. VariableStatement
6. ClassDeclaration
7. LexicalDeclaration

#### Reealm
在JS中，函数表达式和对象直接量均会创建对象

使用. 做隐式转换也会创建对象

这些对象也是有原型的，如果我们没有Realm，就不知道它们的原型是什么

