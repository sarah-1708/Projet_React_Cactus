import '../styles/PlantItem.css'


function PlantItem(){
  const giants=[
    {name:"Euphorbe", 
     price:130, 
     img:'🏜️',
     sun:"☀️☀️☀️", 
     water:"💧"},

    {name:"Pachycereus pringlei", 
     price:150,
     img:'🌸',
     sun:"☀️☀️☀️☀️", 
     water:"💧"},
    
    {name:"Carnegia gigantea", 
     price:270, 
     img:'🌵',
     sun:"☀️☀️☀️☀️☀️", 
     water:"💧"}];
  /*const Plant ={
    "plantName", 
    "category",
    "type"
    "price"
  };*/
 // const p1 = new Plant("Euphorbe", 130);
  //plants.push('p1');
  //console.log(plants);

let plants=[];
for (let i=0;i<giants.length;i++){
  plants.push(<div className="plantItem">
                <div className="priceItem">
                  {giants[i].price}€
                </div>
                <div className="imgPlant">
                  {giants[i].img}
                </div>
                <h4>
                  {giants[i].name}
                </h4>
                <p className="plantNeeds">
                    {giants[i].sun}
                </p>
                <p className="plantNeeds">
                    {[i].giantsater}
                </p>
                <button type="submit">Ajouter</button>
              </div>)
}
return <div className="displayList">{plants}</div>
        
}

export default PlantItem