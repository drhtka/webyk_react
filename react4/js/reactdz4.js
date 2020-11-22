class AppDz4 extends React.Component{
    constructor() {
        super();
        // помогает обращаться (запускат методы у себя из класса react.component)
        this.state = { text : ''}
    }
    saveData(event){
        // event выводмт value текущего эллемента он знает что записано в инпуте
        //*<!-- выведем даные из input: -->
        console.log(event.target.value)
        // перезаписываю свойство state
        this.setState({text:event.target.value})
    }

    render() {//  render зарезервированное имя в реакте выводит даные

        return <div>
            
            <input type="text" onChange={this.saveData.bind(this)}/>
            <div className="text">{(this.state.text).split("").reverse().join("")}</div>
        </div>;
    }
}

//  заливаем из виртуального дома при помощи обращения к айди
ReactDOM.render(
    <AppDz4/>,
    document.getElementById('appdz4')
);
