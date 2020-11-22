class App5 extends React.Component{
    constructor() {
        super();
        this.state = { text : '', mylogin: '', mypass: ''}
    }

    chageLogin(event){
        // метод будет ждать что введется в поле login
        this.setState({mylogin:event.target.value}) // перезаписываем mylogin тем что будет в input
    }

    changePass(event){
        // метод будет ждать что введется в поле pass
        this.setState({mypass: event.target.value})
    }

        chekMyForm(event){
        // будет отслеживать событие нажатия нашей общей кнопки
            event.preventDefault()// что бы форма никуда не улетела

            if(this.state.mylogin == 'test@gmail.com' && this.state.mypass == '12345'){
                console.log('correct')
            }else {
                console.log('incorrect')
            }
                console.log(this.state.mylogin, this.state.mypass)
}


    render() {
        return <div>
            <form action="" onSubmit={this.chekMyForm.bind(this)}>
                <input type="text" placeholder='login' onChange={this.chageLogin.bind(this)}/>
                <input type="password" placeholder='password' onChange={this.changePass.bind(this)}/>
                <button>Enter</button>
            </form>
        </div>;
    }
}
// Элемент формы имеет событие onSubmit, которое может быть обработано для выполнения валидации.
// вызываем bind и передаем в нем this для контроля данных ввода
// onSubmit отслеживает отправку данных
// форма не может быть подтверждена, если еe есобытие onSubmit возвпращвет false
ReactDOM.render(
    <App5/>,
    document.getElementById('app5')
);