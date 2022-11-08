let general = [
    ['test-chart','Test Chart',2000],
    ['hot-100','Hot 100',1958],
    ['billboard-200','Billboard 200',1963],
    ['streaming-songs','Streaming Songs',2013],
    ['radio-songs','Radio Songs',1990],
    ['digital-song-sales','Digital Song Sales',2004],
    ['top-album-sales','Top Album Sales',1991],
    ['current-albums','Current Albums',1983],
    ['catalog-albums','Catalog Albums',1991],
    ['independent-albums','Independent Albums',2000],
    ['vinyl-albums','Vinyl Albums',2011],
    ['bubbling-under-hot-100-singles','Bubbling Under',1992],
    ['hot-singles-reccurents','Hot Singles Recurrents',1991]
];

function makeUL(array) {
    // Create the list element:
    let list = document.createElement('ul');
    list.classList.add("dropdown-menu");

    for(let i = 0; i < array.length; i++) {
        // Create the list item:
        let item = document.createElement('li');
        let anchor = document.createElement('a');
        anchor.classList.add("dropdown-item");
        if (i===0) {
            anchor.setAttribute("href","fullchart.html?decade=1980s&chart=Top100");
        } else {
            anchor.setAttribute("href", "#");
        }

        anchor.innerText = array[i][1];
        // Set its contents:
        //item.appendChild(document.createTextNode(array[i]));
        item.appendChild(anchor);
        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
}

document.getElementById('testUl').appendChild(makeUL(general));