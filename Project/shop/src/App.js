import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Registration from "./Pages/Registration";
import Basket from "./Pages/Basket";
import Login from "./Pages/Login";
import Notfound from "./Pages/Notfound";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Items from "./Components/Items"
import Categories from "./Components/Categories";
import ShowFullItem from "./Components/ShowFullItem";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          bookauthor: 'А. Иванов',
          bookLenght: '45x50',
          bookGenre: 'Фантастика',
          category: 'Авторские',
          title: 'Книга 1',
          img: '_pishheblok.jpg',
          price: '2100',
          bookdate: '13.03.1995',
          bookDescription: 'Жаркое лето 1980 года. Столицу сотрясает Олимпиада, а в небольшом пионерском лагере на берегу Волги всё тихо и спокойно. Пионеры маршируют на линейках, играют в футбол и по ночам рассказывают страшные истории; молодые вожатые влюбляются друг в друга; речной трамвайчик привозит бидоны с молоком, и у пищеблока вертятся деревенские собаки. Но жизнь пионерлагеря, на первый взгляд безмятежная, имеет свою тайную и тёмную сторону. Среди пионеров прячутся вампиры. Их воля и определяет то, что происходит у всех на виду.'
        },
        {
          id: 2,
          bookauthor: 'Анджей Сапковский',
          bookLenght: '12x37',
          bookGenre: 'Мелодрамма',
          category: 'Издательские',
          title: 'Книга 2',
          img: '_poslednee-zhelanie.jpg',
          price: '8500',
          bookdate: '21.09.2008',
          bookDescription: 'Она пришла под утро. Вошла осторожно, тихо, бесшумно ступая, плывя по комнате, словно призрак, привидение, а единственным звуком, выдававшим ее движение, был шорох накидки, прикасавшейся к голому телу. Однако именно этот исчезающе тихий, едва уловимый шелест разбудил ведьмака, а может, только вырвал из полусна, в котором он мерно колыхался, словно погруженный в бездонную тонь, висящий между дном и поверхностью спокойного моря, среди легонько извивающихся нитей водорослей…'
        },
        {
          id: 3,
          bookauthor: 'Евгений Велстистов',
          bookLenght: '77x156',
          bookGenre: 'Приключения',
          category: 'Издательские',
          title: 'Книга 3',
          img: '_priklyucheniya-elektronika.jpg',
          price: '3600',
          bookdate: '19.09.2018',
          bookDescription: 'Евгений Велтистов (1934 – 1989) – один из первых отечественных писателей-фантастов, работавших для детей. Технические изобретения, описанные в его произведениях, намного опередили своё время и казались тогда невиданными чудесами. Теперь многие из них вошли в нашу жизнь, а некоторые даже устарели, но вот мечта о прекрасном, уютном мире, красивых зелёных городах, где все дети могут развивать свои способности в любых областях, – до сих пор не сбылась. Е.Велтистов написал несколько повестей про мальчика из близкого будущего Серёгу Сыроежкина и его точную копию мальчика-робота Электроника. Первая из них – «Электроник – мальчик из чемодана» (в нашем издании «Приключения Электроника»).'
        },
        {
          id: 4,
          bookauthor: 'Аллен Карр',
          bookLenght: '90x500',
          bookGenre: 'Комедия',
          category: 'Издательские',
          title: 'Книга 4',
          img: '1.jpg',
          price: '24000',
          bookdate: '27.12.2013',
          bookDescription: 'О книге "Легкий способ бросить курить" Аллен Карр был заядлым курильщиком и выкуривал по сотне сигарет в день. После бесчисленных и безуспешных попыток бросить курить он разработал уникальную методику отказа от никотина. Его метод получил высокие отзывы врачей и пользуется огромным успехом во многих странах мира, он помог миллионам курильщиков бросить курить – легко, безболезненно, навсегда. Метод Аллена Карра не требует силы воли, поскольку благодаря ему у курильщика пропадает само желание курить, исчезают страхи из-за распространенных заблуждений, связанных с курением. Метод поможет каждому курильщику, независимо от того, как давно и сколько вы курите. Никаких уловок и хитростей, никаких запугиваний и нравоучений, никакого дискомфорта в результате отказа от курения. «Легкий способ» Аллена Карра уже помог бросить курить миллионам курильщиков в России. Он поможет и вам.'
        }
      ],
      showFullItem: false,
      fullItem: {}
    } 
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <Router>
        <div className="wrapper">
          <Header orders={this.state.orders} onDelete={this.deleteOrder} />
          <Routes>
            <Route path="*" element={<Notfound/>}/>
            <Route path="/" element={<Home/>}/>
          </Routes>
          <Categories chooseCategory={this.chooseCategory} />
          <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>

          {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
          <Footer />
        </div>
      </Router>
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if(category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }
    
    this.setState({
      currentItems:this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray=true
    })
    if(!isInArray)
      this.setState({ orders: [...this.state.orders, item]})
  }

}

export default App;
