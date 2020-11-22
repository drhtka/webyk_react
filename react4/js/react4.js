class App4 extends React.Component{
    constructor() {
        super();
        // помогает обращаться (запускат методы у себя из класса react.component)
        this.state = { text : ''}
    }
    saveData(event){  // создаем метод
        // event выводит value текущего эллемента он знает что записано в инпуте
        //выведем даные из input
        console.log(event.target.value)
        // setState перезаписываю свойство state
        this.setState({text:event.target.value})
    }

    render() {//  render зарезервированное имя в реакте выводит даные

        return <div>
            
            <input type="text" onChange={this.saveData.bind(this)}/>
            <div className="text">{(this.state.text)}</div>
        </div>;
    } // input всегда закрываем /
}

//  заливаем из виртуального дома при помощи обращения к айди
ReactDOM.render(
    <App4/>,
    document.getElementById('app4')
);
