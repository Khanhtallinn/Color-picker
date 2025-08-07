import { useState } from "react";
function App() {
  let [color, setcolor] = useState("#000000ff")
  return (
    <>
      <center>
        <div className="colorbox"
          style={
            { background: color }}
        >
        </div>
        <input type="color" value={color}
          onChange={(thy) => setcolor(thy.target.value)}
        />
        <p>
          {color}
        </p>
      </center>
    </>
  )
}
export default App;