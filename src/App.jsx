import {useState} from 'react'; //imports useState hook from React

const Color = ({color, setSelectedColor, selectedColor}) => { //color component with props for color, setSelectedColor function, and selectedColor state

  const classes = `${color} ${selectedColor === color? 'selected' : ''}`; //creates className string and adds 'selected' class if the color is selected

  return (<div 
  className={classes}
  onClick={() => setSelectedColor(color)} //click handler to update selected color
  ></div>
  );
};

const App = () => {
  const [selectedColor, setSelectedColor] = useState(""); //app component with selectedColor state to empty string

  return ( //returns container with navbar showing color selection
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color="yellow" setSelectedColor={setSelectedColor} selectedColor={selectedColor}/>
        <Color color="orange" setSelectedColor={setSelectedColor} selectedColor={selectedColor}/>
        <Color color="violet" setSelectedColor={setSelectedColor} selectedColor={selectedColor}/> 
        <Color color="blue" setSelectedColor={setSelectedColor} selectedColor={selectedColor}/> 
        <Color color="green" setSelectedColor={setSelectedColor} selectedColor={selectedColor}/> 
        <Color color="white" setSelectedColor={setSelectedColor} selectedColor={selectedColor}/> 
        </div> 
    </div>
  ); //renders three color components with props for color, setter function, and current selection
};

export default App; //exports app component
