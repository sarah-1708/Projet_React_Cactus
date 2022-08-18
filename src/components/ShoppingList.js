import Category from "./Category"
import CollectionCards from "./CollectionCards"
import '../styles/ShoppingList.css'

function ShoppingList(){
  return (<div className="shoppingList"><Category/><CollectionCards/></div>)
}

export default ShoppingList