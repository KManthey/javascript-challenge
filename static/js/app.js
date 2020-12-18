// from data.js
var tableData = data;
//Your code here

// Global variables defined
const bodyData = document.getElementById('body-data')
const inputDate = document.getElementById('datetime')
//console.log(inputDate)
const submitBtn = document.getElementById('filter-btn')
//console.log(submitBtn)
// function to add rows for my table of data
// function renderData(data){
//     //generate a row for every element in the array of data
//     data.map((singleItem,i)=>{
//     const tr = document.createElement('tr')
//     tr.innerHTML= `
//     <th>${i}</th>`
//    //append each row to the table body
//     bodyData.appendChild(tr)
    
//     })}

    function renderData(data){
        //generate a row for every element in the array of data
        // insert every row in the table body
        data.map((singleItem,i)=>{
        const tr = document.createElement('tr')
        tr.innerHTML= `
        <td>${singleItem.datetime}</td>
        <td>${singleItem.city}</td>
        <td>${singleItem.state}</td>
        <td>${singleItem.country}</td>
        <td>${singleItem.shape}</td>
        <td>${singleItem.durationMinutes}</td>
        <td>${singleItem.comments}</td>
        `
       //append each row to the table body
        bodyData.appendChild(tr)
        
        })}

    
//when I push the button, I want to filter the data by date. I will get back only the data which match my date


//step 1
//I want to grab the value typed into the input when i push the button
function filterByDate(){
    submitBtn.onclick = () =>{
      //console.log('the click func is working')
      //console.log(inputDate.value)
      let filterDate = inputDate.value
      // create variable to store filtered data
      const newData = filterDate === "" ? data : data.filter(item=>item.datetime === filterDate)
      //console.log(newData)
      // replace existing table with filtered data(cleaning tbody then render filter data)
      bodyData.innerHTML=''
      renderData(newData)


    
    }
  
  }





//we want to call the function to render data when the window loads
window.onload = () =>{
    renderData(data)
    filterByDate()
  }
  
  