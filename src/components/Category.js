import '../styles/Category.css'

function Category(){
  return (<div className="category">
      <select id="category">
        <option selected="selected" value="hint">--Sélectionnez un type de cactus--</option>
        <option>Cactus Géant</option>
        <option>Cactus Globulaire</option>
        <option>Cactus Raquette</option>
      </select>
      <select id="variety">
        <option selected="selected" value="hint">--Sélectionnez une variété--</option>
        <option>Pachycereus pringlei</option>
        <option>Carnegia gigantea</option>
        <option>Echinocactus</option>
        <option>Parodia</option>
        <option>Mammillaria</option>
        <option>Ferocactus</option>
        <option>Opuntia</option>
        <option>Tacinga</option>
      </select>
  </div>)
}

export default Category