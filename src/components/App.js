import DataProvider from "./DataProvider";
import PhonesLoader from "./PhonesLoader";
import TVLoader from "./TVLoader";


function App() {
 
    return (
        <>
        {/* <PhonesLoader />
        <TVLoader /> */}
        <DataProvider loadData={()=>{
                   return fetch('./phones.json')
                    .then((response)=>response.json())}}>
                    {(state)=>{
                        const {data, isLoading, isError} = state;
                        return (
                            <>
                            {isLoading && <div>Loading...</div>}
                            {isError && <div>Error happening!</div>}
                            <ul>
                                {data.map((data, index)=>
                                <li key={index}>{data.brand} - {data.model}. Price: {data.price}</li>)}
                            </ul>
                            </>
                        );
                    }}
        </DataProvider>
        </>
    )
}


export default App;




