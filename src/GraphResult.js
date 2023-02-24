import BarChart from "./barchart";

const GraphResult = (props) => {
    return ( 
        <>
        <h1>The Result is: </h1>
        <BarChart 
            currencyDetails={props.currencyDetails1}
            labelArray={props.labelArray1}
        />
        </>
     );
}
 
export default GraphResult;