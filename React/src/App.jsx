import style from './App.module.css'
import Card from './components/Card'
import Menu from './components/Menu'

import img01 from "./assets/imgs/foto1.jpg";
import img02 from "./assets/imgs/foto2.jpg";
import img03 from "./assets/imgs/foto3.jpg";

export default function App() {
  return (
    <>
      <Menu />
      <div className={style.section01}>
        <Card title="Pessoa!" desc="Uma pessoa muito legal" price={32.99} img={img01} />
        <Card title="Floresta!" desc="Um bom passeio" price={6.99} img={img02} />
        <Card title="Matagal!" desc="Só quem pode fumar no milharal" price={32.99} img={img03} />
      </div>
    </>
  )
}
