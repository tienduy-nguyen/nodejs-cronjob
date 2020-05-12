let sortDirection = false;
let personData = [
  { name: 'X', age: 20},
  { name: 'Z', age: 7 },
  { name: 'C', age: 3 },
  { name: 'M', age: 6 },
  { name: 'E', age: 4 },
  { name: 'N', age: 2 },
  { name: 'G', age: 5 },
];

window.onload = () =>{
    loadTableData(personData);
}

loadTableData = (personData) => {
  const tableBody = document.getElementById('tableBody');
  let dataHtml  = '';
  for(let person of personData){
      dataHtml += `<tr><td>${person.name}</td><td>${person.age}</td></tr>`;
  }
  tableBody.innerHTML = dataHtml;
};

sortColumn = (columnName) =>{
    const dataType = typeof personData[0][columnName];
    sortDirection = !sortDirection;
    switch(dataType){
        case 'number':
            sortNumberColumn(sortDirection,columnName);
            break;
       default:
            sortNumberColumn(sortDirection,columnName);
            break;

    }
    loadTableData(personData);
}
sortNumberColumn = (sort, columnName) =>{
    personData = personData.sort((p1, p2) =>{
        console.log(sort)
        if(sort){
            if(p1[columnName] > p2[columnName]) return 1;
            if(p1[columnName] < p2[columnName]) return -1;
            if(p1[columnName] > p2[columnName]) return 0;
        } else{
            if(p1[columnName] > p2[columnName]) return -11;
            if(p1[columnName] < p2[columnName]) return 1;
            if(p1[columnName] > p2[columnName]) return 0;
        }
    })
}

