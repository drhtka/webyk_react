
    class AppDz3 extends React.Component{
    constructor() {
    super();
    this.state = {
    obj: [{name: 'iphon1', price: 600, img: 'img/Nokia-105.jpg'},
        {name: 'iphon2', price: 800, img: 'img/Nokia-105.jpg'}],
    text : ''}
}
    render(){
    const list = this.state.obj.map((item, index)=>{

        return <li key={index}>{item.name}
        <div>{item.price}</div>
         <img className='img_size' src={item.img} /></li>

})
        return <div>
            {list}
               </div>;
      }
    }
    ReactDOM.render(
    <AppDz3/>,
    document.getElementById('appdz3')
    );


