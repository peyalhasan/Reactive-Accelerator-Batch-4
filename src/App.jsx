// Just for memory 

const lang = 'Java';

const result1 = lang && "JavaScript";
console.log(result1) // JavaScript  
// If left side is truthy then right side will returned;

const result2 = lang || "JavaScript";
console.log(result2) // Java
// If left side is falsy then right side will return else left side will return;
const result3 = lang ?? "JavaScript";
console.log(result3) // Java
// Nullish Coalscing Openration: Left side Nullish (Null or Undefined) hole right side will return. 


function Item({ name, isPacked }) {



  let itemContent = '';
  if(isPacked){
    itemContent = name + '✅'
  }
  else{
    itemContent = name;
  }
  return (
    <li className="item">
      {name} {itemContent}
    </li>
  );
}

export default function App() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}