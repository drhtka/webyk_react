class AppDz extends React.Component{
    constructor() {
        super();
        // помогает обращаться (запускат методы у себя из класса react.component)
        this.state = {  // state состояние глобальня память
            name : 'Ivan',
            years : 25,
            image: "img/Nokia-105.jpg",
            image_name: 'Название картинки'
        }
    }
    mytest(){
        alert(123)
    }

    mytest2(mystring){
        alert(mystring)
    }

    buy(mybuy1, mybuy2){
        document.write(mybuy1)
        document.write(mybuy2)
    }
    /*<!-- выведем даные из сайта: -->*/
    render() {//  render зарезервированное имя в реакте выводит даные
        return <div>
            <div>имя: {this.state.name}</div> возраст: {this.state.years}
            <div><img className="im" src={this.state.image}/></div>
            <span>Подпись: {this.state.image_name}</span>
            <div><button onClick={this.mytest}>TestMe</button></div>
        </div>;
    }
}

//  заливаем из виртуального дома при помощи обращения к айди
ReactDOM.render(
    <AppDz/>,
    document.getElementById('appdz')
);
