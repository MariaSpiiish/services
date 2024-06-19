import Services from '../Services/Services';

function Main({ setSelectedItem, setIsPopupOpen, items }) {
  return (
    <main>
        <Services setSelectedItem={setSelectedItem} setIsPopupOpen={setIsPopupOpen} items={items}/>
    </main>
  )
}

export default Main