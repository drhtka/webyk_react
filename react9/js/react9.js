class App9 extends React.Component {
    constructor() {
        super();
        // помогает обращаться (запускат методы у себя из класса react.component)
        this.state = {  // state состояние глобальная память
            tovars: ['iphone b7', 'samsung j4', 'lenovo'], // временые переменные

            itemtovars: [
                { name: 'iphone b7', price: 123, categ: 'apple', catid: 0 },
                { name: 'lenovo xxx', price: 321, categ: 'lenovo', catid: 1 },
                { name: 'samsung xx', price: 232, categ: 'samsung', catid: 2 },
                { name: 'iphone x', price: 434, categ: 'apple', catid: 0 }
            ],
            itemtovarsorig: [  // для рендомного выведения товаров
                { name: 'iphone b7', price: 123, categ: 'apple', catid: 0 },
                { name: 'lenovo xxx', price: 321, categ: 'lenovo', catid: 1 },
                { name: 'samsung xx', price: 232, categ: 'samsung', catid: 2 },
                { name: 'iphone x', price: 434, categ: 'apple', catid: 0 }
            ],

            chek_box: [
                // после нажатия задуваем категи
            ],

            tmptovar: ''
        }

    }

    mySort(event) {
        //ловим товары из массива list = this.state.itemtovars.map
        // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
        let tmpTovars = this.state.itemtovars; // в переменую загоняем из стейта массив
        if (event.target.value == '1') {  // если равно значеню 1 т.е по возростанию цены
            this.sortTovars(tmpTovars) // тогда обращаемся к функции и передаем в переменной весь массив для фильтрации
            //console.log(tmpTovars)
            //this.setState({itemtovars: tmpTovars}) // записываем в стейт пересортированные товары
            //console.log('up')
        } else if (event.target.value == '2') { //если равно значеню 2 т.е по убываанию цены
            this.sortTovarsDown(tmpTovars) // тогда обращаемся к функции и передаем в переменной весь массив для фильтрации
            //this.setState({itemtovars:tmpTovars})
            //console.log('down')
        } else if (event.target.value == '0') {
            let tmpTovars = this.state.itemtovarsorig;
            //this.setState({itemtovars:tmpTovars})//перезаписывае опять в рендомном порядке
        }
        this.setState({ itemtovars: tmpTovars })// это видят 3 блока if else else, сделали для упращения кода
    }

    //сортируем товары по убыванию
    sortTovarsDown(itemTovars) {
        itemTovars.sort(function (a, b) {
            if (a.price < b.price) {
                return 1;
            } else {
                return -1;
            }
        })
    }

    //сортируем товары по возростанию
    sortTovars(itemTovars) { //создаем переменную в ней сортируем массив
        //сортировка массива котрый был записан в this.sortTovars(tmpTovars)
        itemTovars.sort(function (a, b) {
            // функция сортировка, перебирает весь массив
            // когда стоимость товара больше стоимости второго
            // вывести 1  иначе вывести -1
            if (a.price > b.price) {
                return 1;
            } else {
                return -1;
            }
        });
    }
    sortCateg(event) {
        // сортировка категорий по нажатию и отжатию чекбокса
        //console.log(this.state.chek_box)
        console.log('event.target')
        console.log(event.target.checked) //при снажатит  событие дома
        let tmp_check_boxes = []
        tmp_check_boxes = this.state.chek_box // уже ществующий пустой массив из стейта в переменную

        if (event.target.checked == true) { // состояние checked равно true если нажато
            console.log('0')
            console.log(tmp_check_boxes)
            // alert('nugno dobavit categ')
            tmp_check_boxes.push(event.target.value) // пушем номер категории в массив с категориями
            this.setState({ chek_box: tmp_check_boxes }) // зафиксировать в стейте вновь добавленные данные
            console.log('1')
            console.log(this.state.chek_box)
        } else { // если чекбокс отжат тогда при пмощи фора находим его айди для удаления
            for (let i = 0; i < tmp_check_boxes.length; i++) { // массив разбираем фором, чтоб понять есть ли какой эллемент который совпадет с тем что выбрано
                console.log('tmp_check_boxes[i]')
                console.log(tmp_check_boxes[i]) // по срезу номера который выбрали в цикле
                if (tmp_check_boxes[i] == event.target.value) { //если эллемент масива равен тому значению чебкса нажатого например apple
                    tmp_check_boxes.splice(i, 1)// удаляем эллемент который уже был нажат
                    // break
                    // alert('if est categ')
                }
            }
            this.setState({ chek_box: tmp_check_boxes }) // записываем в стейт для передачи к сравнению нажатых отжатых
            console.log('2')
            console.log(this.state.chek_box)
            // alert('nugno ubrat categ')
        }
        //this.state.itemtovarsorig.length;  длина нашего массива например 4
        let final_array = []
        for (let y = 0; y < tmp_check_boxes.length; y++) {  // здесь назходим айдишник для вывода в шаблон нажатых
            for (let ii = 0; ii < this.state.itemtovarsorig.length; ii++) { // здесь перебираем массив оригинальный для сравнение с масив из котороо удалили
                if (this.state.itemtovarsorig[ii].catid == tmp_check_boxes[y]) { // сравниваем два массива пр срезу перебора из цикла
                    console.log('ii')
                    console.log(this.state.itemtovarsorig[ii])
                    final_array.push(this.state.itemtovarsorig[ii]) // пушим по срезу, т.е совпавшено в массиве пр рпереборе фором
                }
            }
        }
        console.log(final_array)
        this.setState({ itemtovars: final_array }) //  для передачи в шаблон

    }

    render() {//  render зарезервированное имя в реакте выводит даные
        // в this.state.tovars. находится наш товар
        const list = this.state.itemtovars.map((item, index) => {
            return <li key={index}>{item.name}<div>{item.price} $</div></li>
        });
        // первый this это функция в клсе,  второй this то что вводим
        return <div>
            <div id='check' >
                <div style={{ color: 'blue' }}><input value='0' type='checkbox' onChange={this.sortCateg.bind(this)} /> apple</div>
                <div style={{ color: 'green' }}><input value='1' type='checkbox' onChange={this.sortCateg.bind(this)} />lenovo</div>
                <div style={{ color: 'red' }}><input value='2' type='checkbox' onChange={this.sortCateg.bind(this)} />sumsung</div>
            </div>
            <div>Page9</div>
            <select name='' id='' onChange={this.mySort.bind(this)}>
                <option value='0'>Сортировать товары по:</option>
                <option value='1'>по возрастанию цены</option>
                <option value='2'>по убыванию цены</option>
            </select>
            <ul>{list}</ul>
            <div className='react'>hello react</div>
            <div style={{ background: 'orange', color: 'blue' }}>hello</div>
        </div>;
    }
}
// по  нажатию вызываем метод onSubmit и передаем в метод {this.addTovar.bind(this)}>
// и передаем методом onChange и сохраняем  в метод {this.saveNewTovar.bind(this)}/>
//  заливаем из виртуального дома при помощи обращения к айди
ReactDOM.render(
    <App9 />,
    document.getElementById('app9')
);