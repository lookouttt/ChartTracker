$(function() {
    createGenreDropdowns();

    let params = new URLSearchParams(window.location.search);
    let pYear = params.get('year');
    let pChart = params.get('chart');
    let pGenre = params.get('genre');
    let pName = params.get('cname');
    let pFirst = params.get('first');
    let pLast = params.get('last');
    
    //let printDate = dayjs(pYear);
    //let titleString = pName + " for Week Ending " + printDate.format('MM/DD/YYYY');
    let titleString = pYear + " " + pName + " Year End Chart";
    let myTitle = document.getElementById("ye-table-name")
    myTitle.innerHTML = titleString;
    
    let myGenre = document.getElementById("ye-chartDrop");
    myGenre.setAttribute('data-genre',pGenre);
    
    let myYearpicker = document.getElementById("ye-datepicker");
    myYearpicker.setAttribute('data-chart',pChart);
    myYearpicker.setAttribute('data-chartName',pName);
    
    let myTimeframe = document.getElementById("ye-timeframeDrop");
    myTimeframe.setAttribute('data-firstYear', pFirst);
    myTimeframe.setAttribute('data-curYear', pYear);
    myTimeframe.setAttribute('data-lastYear',pLast);
    
    let nextString;
    if (pYear === pLast) {
        nextString = "location.href='#'";
    }
    else {
        let nextYear = parseInt(pYear) + 1;
        nextString = "location.href='yearend.html?chart=" + pChart + "&cname=" + encodeURIComponent(pName) + "&first=" + pFirst + "&last=" + pLast + "&year=" + nextYear + "&genre=" + pGenre + "'";
    }
    
    let prevString;
    if (pYear === pFirst) {
        prevString = "location.href='#'";        
    }
    else {
        let prevYear = parseInt(pYear) - 1;
        prevString = "location.href='yearend.html?chart=" + pChart + "&cname=" + encodeURIComponent(pName) + "&first=" + pFirst + "&last=" + pLast + "&year=" + prevYear + "&genre=" + pGenre + "'";
    }

    myPrevButton = document.getElementById("ye-prevBtn");
    myPrevButton.setAttribute("onclick",prevString);
    
    myNextButton = document.getElementById("ye-nextBtn");
    myNextButton.setAttribute("onclick",nextString);
    
    //initializing the table
    CsvToHtmlTable.init({
        csv_path: 'data/YearEnd/' + pChart + '_' + pYear + '_YearEnd.csv', 
        row_limit: 250,
        element: 'ye-table-container', 
        allow_download: true,
        csv_options: {separator: ',', delimiter: '"'},
        datatables_options: {"paging": false}
        //custom_formatting: [[4, format_link]] //execute the function on the 4th column of every row
    });    

    let startYear = document.getElementById('ye-timeframeDrop').getAttribute('data-firstYear');
    let endYear = document.getElementById('ye-timeframeDrop').getAttribute('data-lastYear'); 
    let curYear = document.getElementById('ye-timeframeDrop').getAttribute('data-curYear');
    let pickDate = curYear + '-01-01';
    //let firstYear = startDate.split('-')[0];
    //let lastYear = endDate.split('-')[0];
    //let myRange = lastYear - firstYear;
    let myRange = endYear - startYear;
    $('#ye-datepicker').datepicker( {
        dateFormat: "yy",
        defaultDate: pickDate,
        //yearRange: "c-100:c",
        yearRange: "-" + myRange + ":",        
        changeMonth: false,
        changeYear: true,
        showButtonPanel: false,
        closeText:'Select',
        currentText: 'This year',
//        onSelect: function (dateText, inst) {
        onClose: function (dateText, inst) {
            var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
            $(this).val($.datepicker.formatDate('yy', new Date(year, 1, 1)));
            if (year != "") {
                openYearpickerSelection(year);
            }},
        /*onClose: function(dateText, inst) {
            var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
            $(this).val($.datepicker.formatDate('yy', new Date(year, 1, 1)));
            },*/
        onChangeMonthYear : function () {
            $(this).datepicker( "hide" );
            }
        }).focus(function () {
            $(".ui-datepicker-month").hide();
            $(".ui-datepicker-calendar").hide();
            $(".ui-datepicker-current").hide();
            $(".ui-datepicker-prev").hide();
            $(".ui-datepicker-next").hide();
            $("#ui-datepicker-div").position({
            my: "left top",
            at: "left bottom",
            of: $(this)
        });
    }).attr("readonly", false);
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
        myTimeframe = document.getElementById("ye-timeframeDrop");
        let myChart = document.getElementById('ye-datepicker').getAttribute('data-chart');
        let myChartName = document.getElementById('ye-datepicker').getAttribute('data-chartName');
        let myGenre = document.getElementById('ye-chartDrop').getAttribute('data-genre');

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
            anchor.href = "decade.html?chart=" + myChart + "&cname=" + encodeURIComponent(myChartName) + "&first=" + firstYear + "&last=" + lastYear + "&decade=" + i + "&genre=" + myGenre;
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

        let myChart = document.getElementById('ye-datepicker').getAttribute('data-chart');
        let myChartName = document.getElementById('ye-datepicker').getAttribute('data-chartName');
        let myGenre = document.getElementById('ye-chartDrop').getAttribute('data-genre');

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

function openYearpickerSelection(selectedYear) {
    let myChart = document.getElementById('ye-datepicker').getAttribute('data-chart');
    let myChartName = document.getElementById('ye-datepicker').getAttribute('data-chartName');
    let myFirst = document.getElementById('ye-timeframeDrop').getAttribute('data-firstYear');
    let myLast = document.getElementById('ye-timeframeDrop').getAttribute('data-lastYear');
    let myGenre = document.getElementById('ye-chartDrop').getAttribute('data-genre');
    let myHtmlLink = "yearend.html?chart=" + myChart + "&cname=" + encodeURIComponent(myChartName) + "&first=" + myFirst + "&last=" + myLast + "&year=" + selectedYear + "&genre=" + myGenre;
    window.open(myHtmlLink, "_self");
}
