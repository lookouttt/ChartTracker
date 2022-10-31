let songs = undefined;

function createDataElement(htmlTag, innerText, idParent) { 
    let node = document.createElement(htmlTag); 
    let textnode = document.createTextNode(innerText); 
    node.appendChild(textnode); 
    document.getElementById(idParent).appendChild(node); 
}

function createCellData(rowIndex, dataIndex, cellText) { 
    if(dataIndex === 0) { 
    let node = document.createElement("tr"); 
    node.setAttribute("id", "row" + rowIndex); 
    document.getElementById("tableBody").appendChild(node); 
 
    createDataElement("td", cellText, "row" + rowIndex); 
    } else { 
        createDataElement("td", cellText, "row" + rowIndex); 
    } 
}

// Defining the function
function findSongs(myString) {
    let results = []
    const csvData = 
        Papa.parse(myString, {
            header: false,
            download: true,
            complete: function(results) {
                console.log("Finished:", results.data);
                for (let i = 0; i < results.data.length; i++) {
                    for (let j = 0; j < results.data[i].length; j++) {
                        createCellData(i, j, results.data[i][j]);
                    }
                }
            }
        });
}