/*Instructions:

1. Asynchronously fetch data from different URLs and store the data in the `dataArray`.
2. Filter the data based on the city name.
3. Display the data for the city of Lisbon by manipulating the DOM*/

// asynch enables asynchrounous code along with await keyword within the function named fetchData
// taked in dataArray parameter? maybe an empty array?
// "the name of an argument to be passed to the function."
// dataArray is behaves object like, so there will be values passed by referenced?
(async function fetchData(dataArray = []) {
  // Performs a fetch request with the passed URL and returns the data as text asynchronously
  // makeRequest variable is assigned a value of an asynch anon fxn
  // I gave a name to the fxn (STILL NEED TO ENTER API KEY)
  // do all four links need to be entered ad arguments?
  const makeRequest = async function weatherData()

  {
    // inside weatherData function, there is the response with the fetch method, which is an "easy, logical way to fetch resources asynchronously across the network."

    // The Response object of the Fetch API is a response to a request, which is assigned a value of async fetch method? maybe for manipulation
    const requestURL = `https://api.openweathermap.org/data/2.5/weather?q=Lisbon&APPID=a941ba823180745eea9029644724548a`;

    const request = new Request(requestURL);

    const response = await fetch(request);
    const urlData = await response.json();

    // Does DOM manipulation involve json parse text -> object?
    // Does DOM manipulation go here?
    const object = JSON.parse(urlData);
    console.log("object:", object);


// array manipulation notes & test codes:

//  spread method can be used with variables with array values assigned to them. The spread method must contain "..." at some variable.
// /"Just like spread for argument lists, ... can be used anywhere in the array literal, and may be used more than once.""

// My attempt on storing the fetched data on the array
    let data = dataArray.push[urlData];

// test return
    return data;
  }
};

// my attempt of calling the function with the return
fetchData();
fetchData.makeRequest(data);


// SECOND HALF OF THE TASK

// don't change this function, you will need to pass the Lisbon data to it
//  to complete this exercise
/**
 * @param data - the first parameter for this function should be
 * your variable with the stored Lisbon weather data
 * @param dataArr - the dataArray variable which should hold all
 * four data responses from the given URLs
 */

const addLisbonDataToDocument = (data, dataArr = []) => {

  // validate data format and data?
// "parse(): Accepts a JSON string as a parameter, and returns the
// corresponding JavaScript object.
  const data = JSON.parse(data);

  // The strict inequality operator ( !== ) checks whether its two
  // operands are not equal, returning a Boolean result. Unlike the
  // inequality operator, the strict inequality operator always considers operands of different types to be different
  // Used typeof method to confirm that Lisbon is a string
  if (data.name !== 'Lisbon') {
    // type of also determined that null is an object
    data = null;
  }

  // create DOM element for Lisbon Data and add it to document
  let arrayLengthDiv = document.createElement('div');
  arrayLengthDiv.innerHTML = `<div id="array-length-div">Data Items:${dataArr.length}</div>`;
  document.body.appendChild(arrayLengthDiv);

  // create DOM element for Lisbon Data and add it to document
  // Populating Libson Data
  let lisbonDiv = document.createElement('div');
  lisbonDiv.innerHTML = `<div id="lisbon-data-div">Weather:${JSON.stringify(data)}</div>`;
  document.body.appendChild(lisbonDiv);
//  END OF FETCHDATA FUNCTION
};

const urlArray = [
  'https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=YOUR-API-KEY-HERE',
  'https://api.openweathermap.org/data/2.5/weather?q=Houston&APPID=YOUR-API-KEY-HERE',
  'https://api.openweathermap.org/data/2.5/weather?q=Lisbon&APPID=YOUR-API-KEY-HERE',
  'https://api.openweathermap.org/data/2.5/weather?q=Baltimore&APPID=YOUR-API-KEY-HERE',
];

urlArray.forEach(async (url) => {
  makeRequest(url).then(function (result) {
    // STEP 1: Store `result` inside the variable dataArray, this is
    // required to pass this exercise *****
    dataArray = `result`;
    if (dataArray.length == urlArray.length) {
      // STEP 2: Loop through each item in the `dataArray` and use the
      // logic below by uncommenting the code to see if it is the correct
      // weather data for `Lisbon`
      if (JSON.parse(itemInDataArray).name == "Lisbon") {
        // You will need to change the itemInDataArray variable to match
        //  your own variable that stores the current item in array that
        //  you are checking
        addLisbonDataToDocument(itemInDataArray, dataArray);
      }

      // STEP 3: Return dataArray

      return dataArray;
    }
  });
});
})();

//don't change this code
if (typeof module !== 'undefined') {
  module.exports = { fetchData };
}
