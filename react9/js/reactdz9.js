class AppDz9 extends React.Component {
    constructor() {
        super();
        // помогает обращаться (запускат методы у себя из класса react.component)
        this.state = {  // state состояние глобальня память
            tovars: ['iphone b7', 'samsung j4', 'lenovo'], // временые перменные

            itemtovars: [
                { name: 'iphone b7', price: '123', old: 25, categ: 'apple', catid: 0 },
                { name: 'lenovo xxx', price: '321', old: 15, categ: 'lenovo', catid: 1 },
                { name: 'samsung', price: '232', old: 5, categ: 'samsung', catid: 2 },
                { name: 'iphone x', price: '434', old: 50, categ: 'apple', catid: 0 }
            ],

            itemtovarsorig: [  // для рендомного выведения товаров
                { name: 'iphone b7', price: '123', old: 25, categ: 'apple', catid: 0 },
                { name: 'lenovo xxx', price: '321', old: 15, categ: 'lenovo', catid: 1 },
                { name: 'samsung', price: '232', old: 5, categ: 'samsung', catid: 2 },
                { name: 'iphone x', price: '434', old: 50, categ: 'apple', catid: 0 }
            ],

            chek_box: [

            ],


            tmptovar: ''
        }
    }

    mySort(event) {
        //ловим товары из массива list = this.state.itemtovars.map
        // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
        let tmpTovars = this.state.itemtovars;
        if (event.target.value == '1') {
            this.sortTovars(tmpTovars)
            console.log('tmpTovars')
            console.log(tmpTovars)
            // this.setState({itemtovars: tmpTovars}) // записываем в стейт пересортированные товары
            //console.log('up')
        } else if (event.target.value == '2') {
            this.sortTovarsDown(tmpTovars)
        } else if (event.target.value == '0') {
            let tmpTovars = this.state.itemtovarsorig
        }
        this.setState({ itemtovars: tmpTovars })

        let tmpTovarsOld = this.state.itemtovars;
        if (event.target.value == '3') {
            this.sortOlds(tmpTovarsOld)
            // console.log(tmpTovarsOld)
        } else if (event.target.value == '4') {
            this.sortOldsDown(tmpTovarsOld)
            // this.setState({itemtovars:tmpTovarsOld})
        } else if (event.target.value == '0') {
            // let tmpTovarsOld = this.state.itemtovarsorig
            this.setState({ itemtovars: tmpTovarsOld })
        }

    }

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
        //сортировка массива
        console.log('itemTovars')
        console.log(itemTovars)
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

    sortOlds(itemTovars) {
        itemTovars.sort(function (a, b) {
            if (a.old > b.old) {
                return 1;
            } else {
                return -1;
            }

        });
    }
    sortOldsDown(itemTovars) {
        itemTovars.sort(function (a, b) {
            if (a.old < b.old) {
                return 1;
            } else {
                return -1;
            }
        })
    }

    sortCateg(event) {
        // сортировка категорий по нажатию и отжатию чекбокса

        // console.log('event.target')
        // console.log(event.target.checked)

        let tmp_check_boxes = []
        tmp_check_boxes = this.state.chek_box

        if (event.target.checked == true) {
            tmp_check_boxes.push(event.target.value)
            this.setState({ chek_box: tmp_check_boxes })
            // console.log('1')
            // console.log(this.state.chek_box)
        } else {
            for (let i = 0; i < tmp_check_boxes.length; i++) {
                console.log(tmp_check_boxes[i])
                if (tmp_check_boxes[i] == event.target.value) {
                    tmp_check_boxes.splice(i, 1)
                }
            }
            this.setState({ chek_box: tmp_check_boxes })
            // console.log('2')
            // console.log(this.state.chek_box)
        }
        let final_array = []
        for (let y = 0; y < tmp_check_boxes.length; y++) {
            for (let ii = 0; ii < this.state.itemtovarsorig.length; ii++) {
                if (this.state.itemtovarsorig[ii].catid == tmp_check_boxes[y]) {
                    // console.log('ii')
                    // console.log(this.state.itemtovarsorig[ii])
                    final_array.push(this.state.itemtovarsorig[ii])
                }
            }
        }
        // console.log(final_array)
        this.setState({ itemtovars: final_array })
    }

    render() {//  render зарезервированное имя в реакте выводит даные
        // в this.state.tovars. находится наш товар
        const list = this.state.itemtovars.map((item, index) => {
            return <table border="2" width='297px'>
                <tr>
                    <td>Название</td>
                    <td>Цена</td>
                    <td>Год выпуска</td>
                </tr>
                <tr key={index}>
                    <td width='100px'>{item.name}</td>
                    <td width='100px'>{item.price} $</td>
                    <td width='100px'>{item.old} год</td>
                </tr>
            </table>
        });

        return <div>
            <div id='check'>
                <div style={{ color: 'blue' }}><input value='0' type='checkbox' onChange={this.sortCateg.bind(this)} />apple</div>
                <div style={{ color: 'green' }}><input value='1' type='checkbox' onChange={this.sortCateg.bind(this)} />lenovo</div>
                <div style={{ color: 'red' }}><input value='2' type='checkbox' onChange={this.sortCateg.bind(this)} />samsung</div>
            </div>
            <div>PageDZ9</div>
            <select name='' id='' onChange={this.mySort.bind(this)}>
                <option value='0'>Сортировать товары по:</option>
                <option value='1'>по возрастанию цены</option>
                <option value='2'>по убыванию цены</option>
                <option value='3'>по возрастанию года выпуска</option>
                <option value='4'>по убыванию года выпуска</option>
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
//  заливаем из виртуального дома при помощи обращения к айди
ReactDOM.render(
    <AppDz9 />,
    document.getElementById('appdz9')
);