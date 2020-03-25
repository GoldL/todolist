##### 1、 `react fiber`
> 改变了之前react的组件渲染机制，新的架构使原来同步渲染的组件现在可以异步化，可中途中断渲染，执行更高优先级的任务。释放浏览器主线程
##### 2、用脚手架创建项目
```
npm install -g create-react-app
create-react-app todolist

npx create-react-app todolist
```
##### 3、[`serviceWorker`离线缓存文件](https://www.cnblogs.com/dojo-lzz/p/8047336.html)
##### 4、[JSX语法](https://react.docschina.org/docs/introducing-jsx.html)
##### 5、[`dangerouslySetInnerHTML`](https://react.docschina.org/docs/dom-elements.html#dangerouslysetinnerhtml%E5%87%BD%E6%95%B0)
##### 6、[Fragment](https://react.docschina.org/docs/fragments.html#%E5%B8%A6-key-%E7%9A%84-fragments)
##### 7、代码优化
- bind(this)先绑定性能优化
```
constructor(props) {
    super(props)
    // 先绑定
    this.handleClick = this.handleClick.bind(this)
  }
```
- `setState`函数更改和`prevState`
```
this.setState((prevState) => {
  const list = [...prevState.list]
  list.splice(index, 1)
  return { list }
})
```
##### 8、围绕`React`衍生出来的思考
- 声明式开发
- 可以与其他框架并存
- 组件化
- 单向数据流
- 视图层框架
- 函数式编程
##### 9、[`PropTypes`与`DefaultProps`的应用](https://react.docschina.org/docs/typechecking-with-proptypes.html#proptypes)