


function App() {
 
    return (
        <>
        <button onClick={()=>{window.close()}}>Close</button>
        <button onClick={()=>{window.open('http://localhost:3000/docs/index.html')}}>Open</button>
        </>
    )
}


export default App;

