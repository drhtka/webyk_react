
class AppDz7 extends React.Component{

    constructor() {
        super();
        // помогает обращаться (запускат методы у себя из класса react.component)
        this.state = {  // state состояние глобальня память
            tovars: [{name: 'iphone b7', price: 600, img: 'img/Nokia-105.jpg'},
                    {name: 'samsung j4', price: 700, img: 'img/Nokia-105.jpg'},
                    {name: 'lenovo', price: 800, img: 'img/Nokia-105.jpg'}], // временые перменные
            tmptovar : '', name: '', price: '', img: ''}
    }

    addTovar(event){//event знает что находится внутри
        event.preventDefault() // останвливаем передачу формы
        let tmp_array = this.state.tovars// создаем временую перменную с хронящимися товарами в массиве
        tmp_array.push({name: this.state.name, price: this.state.price, img: this.state.img} )// надо дописать текущие элемент в существующие в массиве при помощи push
        this.setState({tovars:tmp_array})// массив tovars равен mytmp с внесенным новым товаром, т.е перезаписываем state  с новым товаром
    }
//циклы бывают for, while, for.each()
    // цикл map - может сохранять перебор всего массива переменной

    saveNewTovarName(event) {
        this.setState({name: event.target.value})
    }

    saveNewTovarPrice(event){
        this.setState({price: event.target.value})
}

    saveNewTovarImg(event){
        this.setState({img: event.target.value})
    }

    render() {//  render зарезервированное имя в реакте выводит даные
        // в this.state.tovars. находится наш товар
        const list = this.state.tovars.map((item, index)=>{
            return <li key={index}>{item.name}
                        <div>{item.price}</div>
                    <img className='img_size' src={item.img} /></li>
        })

        return <div className='body'>

            <form action="" onSubmit={this.addTovar.bind(this)}>
                <input type="text" onChange={this.saveNewTovarName.bind(this)}/>
                <input type="text" onChange={this.saveNewTovarPrice.bind(this)}/>
                <input type="text" onChange={this.saveNewTovarImg.bind(this)}/>
                <button>addTovar</button>
            </form>

            <ul>{list}</ul>

            <div className='reactt'>hello reactt</div>
            <div style={{background: 'orange', color: 'blue'}}>hello</div>
           <div className='wrapper'>
            <div className='block'>1</div>
            <div className='block'>2</div>
            <div className='block test'>3</div>
             </div>
            <div>
            <img style={{ height: '100px', width: '100px', display: 'block', marginTop: '10px', border: '2px', borderColor: '#ffa94d', borderStyle: 'solid' }} src={'img/Nokia-105.jpg'}/>
            <img style={{ height: '100px', width: '100px', display: 'block', marginTop: '20px', border: '2px', borderColor: '#ffa94d', borderStyle: 'solid'}} src={'img/Nokia-105.jpg'}/>
            <img style={{ height: '100px', width: '100px', display: 'block', marginTop: '25px', border: '2px', borderColor: '#ffa94d', borderStyle: 'solid'}} src={'img/Nokia-105.jpg'}/>


            </div>

        </div>;

    }
}
// по  нажатию вызываем метод onSubmit и передаем в метод {this.addTovar.bind(this)}>
// и передаем методом onChange и сохраняем  в метод {this.saveNewTovar.bind(this)}/>
//  заливаем из виртуального дома при помощи обращения к айди
ReactDOM.render(
    <AppDz7/>,
    document.getElementById('appdz7')
);