class App6 extends React.Component{
    constructor() {
        super();
        // помогает обращаться (запускат методы у себя из класса react.component)
        this.state = {  // state состояние глобальня память
            tovars: ['iphone b7', 'samsung j4', 'lenovo'], // временые перменные
            tmptovar : ''}
    }

    addTovar(event){//event знает что находится внутри
        event.preventDefault() // останвливаем передачу формы
        let mytmp = this.state.tovars // создаем временую перменную с хронящимися товарами в массиве
        mytmp.push(this.state.tmptovar)// надо дописать текущие элемент в существующие в массиве при помощи push
        this.setState({tovars:mytmp})// массив tovars равен mytmp с внесенным новым товаром, т.е перезаписываем state  с новым товаром
        
    }
//циклы бывают for, while, for.each()
    // цикл map - может сохранять перебор всего массива переменной

    saveNewTovar(event){
        // здесь ловим и сохраняем имя нового товара
        this.setState({tmptovar:event.target.value})//event.target.value здесь хранится значение того
        // что вводится в input и заносится в tmptovar при помощи this.setState мы нажали кнопку и значение переписалось в tmptovar
    }

    render() {//  render зарезервированное имя в реакте выводит даные
        // в this.state.tovars. находится наш товар
        const list = this.state.tovars.map((item, index)=>{
            return <li key={index}>{item}</li>
        })

        return <div>
            <form action="" onSubmit={this.addTovar.bind(this)}>
                <input type="text" onChange={this.saveNewTovar.bind(this)}/>
                <button>addTovar</button>

            </form>

            <ul>{list}</ul>
            <div className='redd'>hello react</div>
        </div>;
    }
}
// по  нажатию вызываем метод onSubmit и передаем в метод {this.addTovar.bind(this)}>
// и передаем методом onChange и сохраняем  в метод {this.saveNewTovar.bind(this)}/>
//  заливаем из виртуального дома при помощи обращения к айди
ReactDOM.render(
    <App6/>,
    document.getElementById('app6')
);