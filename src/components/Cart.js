import '../styles/Cart.css'

function Cart(){
  const euphorbe = 130;
  const opuntia = 10;
  const tacinga = 5.97;
  const totalPanier = 0;
  return <div className="cart">
    <a href="#">Fermer</a>
    <h3>Mon panier</h3>
              <ul>
                  <li><b>Euphorbe : </b>{euphorbe}€</li>
                  <li><b>Opuntia :</b> {opuntia}€</li>
                  <li><b>Tacinga :</b> {tacinga}€</li>
              </ul>
              <p><b>Prix Total: </b>           
                         {
                           euphorbe+
                           opuntia+
                           tacinga
                         }€
                       </p>
    
    <button type="submit">Valider mon panier</button>
        </div>
}

export default Cart