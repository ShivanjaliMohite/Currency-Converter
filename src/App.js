import { useEffect, useState } from "react";
import Axios from "axios";
import Dropdown from "react-dropdown";
import { HiSwitchHorizontal } from "react-icons/hi";
import "react-dropdown/style.css";
import "./App.css";
import Papa from "papaparse";
import data from "./data";
import BarChart from "./barchart";

function App() {
  // Initializing all the state variables
  const [info, setInfo] = useState([]);
  const [input, setInput] = useState(0);
  const [from, setFrom] = useState("Algerian_dinar");
  const [to, setTo] = useState("U.S. dollar   (USD)");
  const [options, setOptions] = useState([]);
  const [options1, setOptions1] = useState([]);
  const [output, setOutput] = useState(0);
  const [startdate, setStartDate] = useState('06/12/2022');
  const [enddate, setEndDate] = useState('06/12/2022');

  const [currencyDetails1, setcurrencyDetails] = useState([]);
  const [labelArray1, setlabelArray] = useState([]);


  // Calling the api whenever the dependency changes
  // useEffect(() => {
  //   Axios.get(
  //     `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`
  //   ).then((res) => {
  //     setInfo(res.data[from]);
  //   });
  // }, [from]);


  const options2 = ['Algerian_dinar', 'Australian dollar   (AUD)', 'Bahrain dinar   (BHD)', 'Bolivar Fuerte   (VEF)', 'Botswana pula   (BWP)', 'U.S. dollar   (USD)'];



  // const handleUploadClick = () => {
  //   if (!file) {
		
  //     return;
  //   }

  //   // 👇 Uploading the file using the fetch API to the server
  //   fetch('https://httpbin.org/post', {
  //     method: 'POST',
  //     body: file,
  //     // 👇 Set headers manually for single file upload
  //     headers: {
  //       'content-type': file.type,
  //       'content-length': `${file.size}`, // 👈 Headers need to be a string
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => console.error(err));
  // };
  // Calling the convert function whenever
  // a user switches the currency
  // useEffect(() => {
  //   setOptions(Object.keys(info));
  //   convert();
  // }, [info]);


  // const [file, setFile] = useState(" ");
  
	// const handleFileChange = (e) => {
	// 	const files = e.target.files;
	// 	console.log(files);
	// 	if (files) {
	// 	  console.log(files[0]);
	// 	  Papa.parse(files[0], {
	// 		complete: function(results) {
	// 		  //console.log("Finished:", results.data);
	// 		  convertJson(results.data);
	// 		}}
	// 	  )
	// 	}
	// }

  // // Function to convert the currency
  // // function convert() {
  // //   var rate = info[to];
  // //   setOutput(input * rate);
  // // }


  // function convertJson(data)
  // {
	// console.log(data)
  //       var heading = data[0]
  //       // console.log(heading); to get the column headers which will act as key
  //       var ans_array = []
  //       // console.log(ans_array);
  //       for(var i=1;i<data.length;i++){
  //           var row = data[i]
  //           var obj = {}
  //           for(var j=0;j<heading.length;j++){
  //               if(!row[j]){
  //                   row[j]="NA";
  //               }
  //               // console.log(row[j].toString())
  //               obj[heading[j].replaceAll(" ","_")] = row[j].toString().replaceAll(" ","_")
  //           }
  //           ans_array.push(obj)
  //       }
  //       console.log({ans_array})
  // }

  // // Function to switch between two currency
  // function flip() {
  //   var temp = from;
  //   setFrom(to);
  //   setTo(temp);
  // }

  // function compareDate(ds){
  //   let d1 = new Date(startdate).getTime();
  //   let d2 = new Date(enddate).getTime();
  //   let d = new Date(ds).getTime();
  //   if(d>=d1 && d<=d2){
  //     console.log(true);
  //     return true;
  //   }
  //   return false;
  // }

  function handleFilter(){
  
    let data1 = data.filter(obj=>
      new Date(startdate).getTime()<=new Date(obj.Date).getTime() && new Date(obj.Date).getTime()<=new Date(enddate).getTime()
    )
    console.log(data1);
    let resultArray = [];
    let dateArray = [];
    data1.map((ob)=>{
      dateArray.push(ob.Date)
      if(from==='Australian dollar   (AUD)'){
        resultArray.push(ob["Australian dollar   (AUD)"])
      }else if(from==='Algerian_dinar'){
        resultArray.push(ob["Algerian_dinar"])
      }else if(from==='U.S. dollar   (USD)'){
        resultArray.push(ob["U.S. dollar   (USD)"])
      }else if(from==='Botswana pula   (BWP)'){
        resultArray.push(ob["Botswana pula   (BWP)"])
      }else if(from==='Bolivar Fuerte   (VEF)'){
        resultArray.push(ob["Bolivar Fuerte   (VEF)"])
      }else if(from==='Bahrain dinar   (BHD)'){
        resultArray.push(ob["Bahrain dinar   (BHD)"])
      }
  })
  setcurrencyDetails([...currencyDetails1,resultArray]);
  setlabelArray([...labelArray1,dateArray]);
  
  console.log(resultArray);
  console.log(dateArray);
  }
  

  

  return (
	<>
	
    <div className="App">
      <div className="heading">
        <h1>Currency Exchange</h1>
      </div>
      <div class="All1">
        <div class="all">
          <div className="container">
            <div className="left">
              {/* <h3>Amount</h3>
		<input type="text"
			placeholder="Enter the amount"
			onChange={(e) => setInput(e.target.value)} /> */}
            </div>
            <div class="feom">
              <div className="middle">
                <h3>From</h3>
                <Dropdown
                  options={options2}
                  onChange={(e) => {
                    setFrom(e.value);
                  }}
                  value={from}
                  placeholder="From"
                />
              </div>
              <div class="datte1">
                <h3>Start</h3>
                <input type="date" id="start" 
                onChange={(e)=>{
                  setStartDate(e.target.value)
                }}
                
                name="start"></input>
              </div>
            </div>
            {/* <div className="switch">
              <HiSwitchHorizontal
                size="30px"
                onClick={() => {
                  flip();
                }}
              />
            </div> */}
            <div>
              <div className="right">
                <h3>To</h3>
                <Dropdown
                  options={options2}
                  onChange={(e) => {
                    setTo(e.value);
                  }}
                  value={to}
                  disabled
                  placeholder="To"
                />
              </div>
              <div>
                <h3>End</h3>
                <input type="date" id="end"
                onChange={(e)=>{
                  setEndDate(e.target.value)
                }}
                name="end"></input>
              </div>
            </div>
          </div>
          <div class="upload">
            <label>Select csv File-</label>
            <input type="file" name="nf"></input>
          </div>
          <div class="btx">
            <div class="b1">
              <input type="button" class="xl" value="DAY" />
            </div>
            <div class="b2">
              <input type="button" class="xl" value="MONTH" />
            </div>
            <div class="b3">
              <input type="button" class="xl" value="YEAR" />
            </div>
          </div>
        </div>
        <div class="btn">
          <button type="submit" form="form1"  onClick={handleFilter } value="Submit">
            Submit
          </button>
        </div>
      </div>
		
    </div>
	  <div className="chartshow">
			<BarChart 
      currencyDetails={currencyDetails1}
      labelArray={labelArray1}
      />
		</div>
	</>
  );
}

export default App;
