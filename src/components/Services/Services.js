import { useEffect, useState } from 'react';
import './Services.css';
import strategy from '../../images/strategy.png';
import analyses from '../../images/analysis.png';
import networks from '../../images/networks.png';
import development from '../../images/development.png';
import content from '../../images/content.png';
import design from '../../images/design.png';
import ad from '../../images/ad.png';
import product from '../../images/product.png';


function Services({setIsPopupOpen, items, setSelectedItem}) {
  const [displayWidth, setDisplayWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setDisplayWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleItemClick = (id) => {
    const filtered = items.filter(item => item.id === id);
    filtered.length && setSelectedItem(filtered[0]);

    setIsPopupOpen(true);
  }

  return (
    <section className='services'>
      <div className='services__content-container'>
        <h2 className='services__title'>Сервис</h2>
        {displayWidth <= 650 && <span className='services__line'></span>}
        <h3 className='services__subtitle'>От идеи до незабываемого и измеримого результата</h3>
        {displayWidth > 650 && <span className='services__line'></span>}
        <p className='services__text'>Интеграция безупречного производства, передовых технологий и тщательного измерения производительности</p>
      </div>
      
        <ul className='services__grid'>
          <li className='services__grid-item'>
            <img className='services__icon' src={strategy} alt='Иконка с плюсом'/>
            <h4 className='services__caption'>СТРАТЕГИЯ</h4>
            <p className='services__hidden-text'>Придумаем стратегии.</p>
            <button className='services__hidden-button' onClick={() => handleItemClick(1)}>ПОДРОБНЕЕ &#8594;</button>
          </li>
          <li className='services__grid-item'>
            <img className='services__icon' src={analyses} alt='Иконка, где два человека изучают граф на доске'/>
            <h4 className='services__caption'>АНАЛИЗ</h4>
            <p className='services__hidden-text'>Анализируем лучше всех.</p>
            <button className='services__hidden-button' onClick={() => handleItemClick(2)}>ПОДРОБНЕЕ &#8594;</button>
          </li>
          <li className='services__grid-item'>
            <img className='services__icon' src={networks} alt='Иконка молекулы'/>
            <h4 className='services__caption'>СОЦ СЕТИ</h4>
            <p className='services__hidden-text'>Поможем законнектиться.</p>
            <button className='services__hidden-button' onClick={() => handleItemClick(3)}>ПОДРОБНЕЕ &#8594;</button>
          </li>
          <li className='services__grid-item'>
            <img className='services__icon' src={development} alt='Иконка с файлом и тегом'/>
            <h4 className='services__caption'>РАЗВИТИЕ</h4>
            <p className='services__hidden-text'>Поможем с развитием.</p>
            <button className='services__hidden-button' onClick={() => handleItemClick(4)}>ПОДРОБНЕЕ &#8594;</button>
          </li>
          <li className='services__grid-item'>
            <img className='services__icon' src={content} alt='Иконка с блакнотом и ручкой'/>
            <h4 className='services__caption'>КОНТЕНТ</h4>
            <p className='services__hidden-text'>Составим годный контент.</p>
            <button className='services__hidden-button' onClick={() => handleItemClick(5)}>ПОДРОБНЕЕ &#8594;</button>
          </li>
          <li className='services__grid-item'>
            <img className='services__icon' src={design} alt='Иконка с лампой накаливания'/>
            <h4 className='services__caption'>ДИЗАЙН UX</h4>
            <p className='services__hidden-text'>Создадим уникальный и удобный дизайн.</p>
            <button className='services__hidden-button' onClick={() => handleItemClick(6)}>ПОДРОБНЕЕ &#8594;</button>
          </li>
          <li className='services__grid-item'>
            <img className='services__icon' src={ad} alt='Иконка с долларом внутри круга'/>
            <h4 className='services__caption' style={{margin: '7px auto'}}>ТАРГЕТИРОВАННАЯ РЕКЛАМА</h4>
            <p className='services__hidden-text'>Отрекламируем прицельно.</p>
            <button className='services__hidden-button' onClick={() => handleItemClick(7)}>ПОДРОБНЕЕ &#8594;</button>
          </li>
          <li className='services__grid-item'>
            <img className='services__icon' src={product} alt='Иконка с рупором'/>
            <h4 className='services__caption'>ПРОДУКТ</h4>
            <p className='services__hidden-text'>Раскажем всем о вашем продукте.</p>
            <button className='services__hidden-button' onClick={() => handleItemClick(8)}>ПОДРОБНЕЕ &#8594;</button>
          </li>
          
        </ul>
        


      
      
    </section>
  )
}

export default Services