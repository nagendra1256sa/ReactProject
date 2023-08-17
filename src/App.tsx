import React from 'react';
import Categories from './Componenets/Categories';
import Deliver from './Componenets/Deliver';
import Featured from './Componenets/Feature';
import Meals from './Componenets/Meal';
import NewsLetter from './Componenets/NewsLetter';
import TopNav from './Componenets/TopNav';
import TopPicks from './Componenets/TopPicks';

function App() {
  return (
    <div>
    <TopNav/>
    <Featured/>
    <Deliver/>
    <TopPicks/>
    <Meals/>
    <Categories/>
    <NewsLetter/>
    </div>
  );
}
export default App;
