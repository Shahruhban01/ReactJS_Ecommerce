import './App.css';
import Body from './components/Body';
import Carausel from './components/Carausel';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  let links = {
    "link1": "https://static.vecteezy.com/system/resources/thumbnails/004/299/835/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg",
    "link2": "https://static.vecteezy.com/system/resources/thumbnails/011/871/820/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg",
    "link3": "https://static.vecteezy.com/system/resources/thumbnails/004/707/493/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg"
  }
  return (
    <>
    <Header sitename="Ecommerce App" name="Ruhban Abdullah" />
    <Carausel link1={links.link1} link2={links.link2} link3={links.link3} />
    <Body />
    <Footer year="2024" name="Ruhban Abdullah" email="admin@developerruhban.com" addr1="Bomai Sopore" addr2="Baramulla J&K, 193201" phone="+91 6006292134"/>
    </>
  );
}

export default App;
