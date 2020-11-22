class App2 extends React.Component{
    constructor() {
        super();
        // помогает обращаться (запускат методы у себя из класса react.component)
        this.state = {  // state состояние глобальня память
            name : 'Товары',
            price : 'Цена',
        }
    }
    mytest(){
        alert(123)
    }

    mytest2(mystring){
        alert(mystring)
    }


    /*<!-- выведем даные из сайта: -->*/
    render() {//  render зарезервированное имя в реакте выводит даные
        return <div>
            <div>пункт 1: {this.state.name}</div> пункт 2: {this.state.price}
            <div><button onClick={this.mytest}>Вызов алерта</button></div>
                <div><button onClick={this.mytest2.bind(this, 'Helo Webyk!!!')}>Hello</button></div>
        </div>;
    }
}

//  заливаем из виртуального дома при помощи обращения к айди
ReactDOM.render(
    <App2/>,
    document.getElementById('app2')
);