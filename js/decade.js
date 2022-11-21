$(function() {
    createGenreDropdowns();
    document.getElementById("ct-header").innerHTML = ctHeader;
    document.getElementById("ct-footer").innerHTML = ctFooter;
    document.getElementById("contactModal").innerHTML = contactModal;

    let params = new URLSearchParams(window.location.search);
    let pDecade = params.get('decade');
    let pChart = params.get('chart');
    let pGenre = params.get('genre');
    let pName = params.get('cname');
    let pFirst = params.get('first');
    let pLast = params.get('last');
    
    let titleString = pDecade + " " + pName + " Decade Chart";
    let myTitle = document.getElementById("de-table-name")
    myTitle.innerHTML = titleString;
    
    let myGenre = document.getElementById("de-chartDrop");
    myGenre.setAttribute('data-genre',pGenre);
    
    let myYearpicker = document.getElementById("de-datepicker");
    myYearpicker.setAttribute('data-chart',pChart);
    myYearpicker.setAttribute('data-chartName',pName);
    
    let myTimeframe = document.getElementById("de-timeframeDrop");
    myTimeframe.setAttribute('data-firstYear', pFirst);
    myTimeframe.setAttribute('data-curDecade', pDecade);
    myTimeframe.setAttribute('data-lastYear',pLast);

    let pFirstDecade = parseInt(pFirst / 10) * 10;
    let pLastDecade = parseInt(pLast / 10) * 10;
    
    let nextString;
    if (pDecade === pLastDecade) {
        nextString = "location.href='#'";
    }
    else {
        let nextYear = parseInt(pDecade) + 10;
        nextString = "location.href='decade.html?chart=" + pChart + "&cname=" + encodeURIComponent(pName) + "&first=" + pFirst + "&last=" + pLast + "&decade=" + nextYear + "&genre=" + pGenre + "'";
    }
    
    let prevString;
    if (pDecade === pFirstDecade) {
        prevString = "location.href='#'";        
    }
    else {
        let prevYear = parseInt(pDecade) - 10;
        prevString = "location.href='decade.html?chart=" + pChart + "&cname=" + encodeURIComponent(pName) + "&first=" + pFirst + "&last=" + pLast + "&decade=" + prevYear + "&genre=" + pGenre + "'";
    }

    myPrevButton = document.getElementById("de-prevBtn");
    myPrevButton.setAttribute("onclick",prevString);
    
    myNextButton = document.getElementById("de-nextBtn");
    myNextButton.setAttribute("onclick",nextString);

    populateDecadeSelection(pFirstDecade, pLastDecade);
    
    //initializing the table
    CsvToHtmlTable.init({
        csv_path: 'data/Decade/' + pChart + '_' + pDecade + '_Decade.csv', 
        row_limit: 500,
        element: 'de-table-container', 
        allow_download: true,
        csv_options: {separator: ',', delimiter: '"'},
        datatables_options: {"paging": false}
        //custom_formatting: [[4, format_link]] //execute the function on the 4th column of every row
    });    

    /*let startYear = document.getElementById('de-timeframeDrop').getAttribute('data-firstYear');
    let endYear = document.getElementById('de-timeframeDrop').getAttribute('data-lastYear'); 
    let curDecade = document.getElementById('de-timeframeDrop').getAttribute('data-curDecade');*/

    $('#de-datepicker').selectmenu( {
        change: function(event, data) {
            openDecadepickerSelection(data.item.value);
        }
    })
});

function makeDecadeDropdownMenu(b_submenu, array_index, first_date, last_date, html_link) {
    // Create the list element:
    const ulDecadeCheck = document.getElementById('ulDecade');
    if (!ulDecadeCheck)
    {
        let list = document.createElement('ul');
        list.id = "ulDecade";
        list.classList.add("dropdown-menu");
        if (b_submenu) {
            list.classList.add("dropdown-submenu");
            let offsetVal = ((array_index*30) + 7)*-1;
            let styleString = offsetVal + "px";
            list.style.top = styleString;
        }
        const decadeArray = [];
        myTimeframe = document.getElementById("de-timeframeDrop");
        let myChart = document.getElementById('de-datepicker').getAttribute('data-chart');
        let myChartName = document.getElementById('de-datepicker').getAttribute('data-chartName');
        let myGenre = document.getElementById('de-chartDrop').getAttribute('data-genre');

        const firstDate = first_date.split('-');
        const lastDate = last_date.split('-');
        let firstYear = parseInt(firstDate[0]);
        let lastYear = parseInt(lastDate[0]);
        let myFirstDate = new Date(firstDate[0], firstDate[1]-1, firstDate[2]);
        let myFirstDecade = parseInt(firstDate[0] / 10) * 10;
        for (let i=myFirstDecade; i <= max_decade; i += 10) {
            decadeArray.push(i + 's');
            let item = document.createElement('li');
            let anchor = document.createElement('a');
            anchor.classList.add("dropdown-item");
            anchor.href = "decade.html?chart=" + myChart + "&cname=" + encodeURIComponent(myChartName) + "&first=" + firstDate + "&last=" + lastDate + "&decade=" + i + "&genre=" + myGenre;
            anchor.innerText = i + 's';
            item.appendChild(anchor);
            list.appendChild(item);
        }
    
        document.getElementById(html_link).appendChild(list);
    }

}

function populateYearSelection(first_year, last_year, html_link) {
    const ulYearCheck = document.getElementById('yearSelector');
    if (!ulYearCheck)
    {
        // Create the list element:
        let list = document.createElement('ul');
        list.id = 'yearSelector';
        list.classList.add("dropdown-menu");
        list.classList.add("dropdown-submenu");
        list.style.top = "-37px";

        //const firstDate = first_date.split('-');
        //const lastDate = last_date.split('-');
        //let firstYear = parseInt(firstDate[0]);
        //let lastYear = parseInt(lastDate[0]);

        let myChart = document.getElementById('de-datepicker').getAttribute('data-chart');
        let myChartName = document.getElementById('de-datepicker').getAttribute('data-chartName');
        let myGenre = document.getElementById('de-chartDrop').getAttribute('data-genre');

        for (let i= last_year; i >= first_year; i--) {
            let item = document.createElement('li');
            let anchor = document.createElement('a');
            anchor.classList.add("dropdown-item");
            anchor.href = "yearend.html?chart=" + myChart + "&cname=" + encodeURIComponent(myChartName) + "&first=" + first_year + "&last=" + last_year + "&year=" + i + "&genre=" + myGenre;
            anchor.innerText = i;
            item.appendChild(anchor);
            list.appendChild(item);
        }

        document.getElementById(html_link).appendChild(list);

    }
    
}

function populateDecadeSelection(first_decade, last_decade) {
    const mySelect = document.getElementById('de-datepicker');
    for (let i = parseInt(first_decade); i <= parseInt(last_decade); i += 10) {
        const myOption = document.createElement('option');
        myOption.value = i;
        
        myOption.innerHTML = i.toString() + "s";
        mySelect.appendChild(myOption);
    }
}

function openDecadepickerSelection(selectedDecade) {
    let myChart = document.getElementById('de-datepicker').getAttribute('data-chart');
    let myChartName = document.getElementById('de-datepicker').getAttribute('data-chartName');
    let myFirst = document.getElementById('de-timeframeDrop').getAttribute('data-firstYear');
    let myLast = document.getElementById('de-timeframeDrop').getAttribute('data-lastYear');
    let myGenre = document.getElementById('de-chartDrop').getAttribute('data-genre');
    let myHtmlLink = "decade.html?chart=" + myChart + "&cname=" + encodeURIComponent(myChartName) + "&first=" + myFirst + "&last=" + myLast + "&decade=" + selectedDecade + "&genre=" + myGenre;
    window.open(myHtmlLink, "_self");
}
