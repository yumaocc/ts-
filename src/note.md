-   react中的常用类型
    -   React.FC<>函数组件类型，是一个泛型，尖括号表示props的类型,React.FC规定了一个函数是一个react组件，所以要返回一个react对象(<></>)
    -   默认值：组件名.defaultProps 可以对可选参数增加一个默认值，可以使用函数参数默认值的写法
    -   事件对象
        -   React.MouseEvent<HTMLButtonElement>,表示鼠标点击button的事件对象
        -   React.ChangeEvent<HTMLInputElement>,表示input发生改变类型的事件对象
        -   使用技巧，onClick={e=>{}} 放在e上可以查看类型