
  let obj = {
    heading : ['id', 'name','job'],
    data : [[123,'shabaz', 'baig'], [234,'ethan','hunt']]
  };

createTable(obj);


createTable = (obj) => {

  let table = document.querySelector('.dynamicTable');

  let thead = table.createTHead('thead');
  let headings = obj.heading;
  let headRow = thead.insertRow();
  headings.forEach((head) => {

    // let th = document.createElement('th');
    
    let headRowCell = headRow.insertCell();
    let headText = document.createTextNode(head);

    headRowCell.appendChild(headText);


  });

  let tbody = document.createElement('tbody');
  table.appendChild(tbody);
  for(let i = 0; i<obj.data.length; i++){

    let row = tbody.insertRow();
    for(let j =0; j<obj.data[i].length;j++){

      let td = row.insertCell();
      let tbText = document.createTextNode(obj.data[i][j]);
      td.appendChild(tbText);
      
      tbody.appendChild(row);

    }

  }
  


}
