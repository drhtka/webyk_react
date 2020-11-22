class App3 extends React.Component{
    constructor() {
        super();
        // помогает обращаться (запускат методы у себя из класса react.component)
        this.state = {  // state состояние глобальня память
            tovars: ['iphone b7', 'samsung j4', 'lenovo'],
            text : ''}
    }

    /*<!-- выведем даные из сайта: -->*/
    render() {//  render зарезервированное имя в реакте выводит даные
        const list = this.state.tovars.map((item, index)=>{
            return <li key={index}>{item}</li>
        })

        return <div>
            <ul>{list}</ul>
            hello react
        </div>;
    }
}

//  заливаем из виртуального дома при помощи обращения к айди
ReactDOM.render(
    <App3/>,
    document.getElementById('app3')
);

