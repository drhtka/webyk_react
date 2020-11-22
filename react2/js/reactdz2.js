class AppDzz2 extends React.Component{
    constructor() {
        super();
        // помогает обращаться (запускат методы у себя из класса react.component)
        this.state = {  // state состояние глобальня память
            name : 'Товар 2',
            price : 'Цена 2',
        }
    }
    mytest(){
        alert(123)
    }

    mytest2(mystring, mystring2){
        alert(mystring)
        alert(mystring2)
    }
    buy(mybuy1, mybuy2){
        alert(mybuy1)
        alert(mybuy2)
    }

    /*<!-- выведем даные из сайта: -->*/
    render() {//  render зарезервированное имя в реакте выводит даные
        return <div>
            <div>пункт 1: {this.state.name}</div> пункт 2: {this.state.price}
            <div><button onClick={this.buy.bind(this, 'название', 'цена')}>купить</button></div>
            <div><button onClick={this.mytest}>Вызов алерта</button></div>
            <div><button onClick={this.mytest2.bind(this, this.state.name, this.state.price)}>Вызов state</button></div>

        </div>;
    }
}

//  заливаем из виртуального дома при помощи обращения к айди
ReactDOM.render(
    <AppDzz2/>,
    document.getElementById('appdz2')
);