$(function() {
    createGenreDropdowns();

    let params = new URLSearchParams(window.location.search);
    let pDate = params.get('date');
    let pChart = params.get('chart');
    let pGenre = params.get('genre');
    let pName = params.get('cname');
    let pFirst = params.get('first');
    let pLast = params.get('last');
    
    let printDate = dayjs(pDate);
    let titleString = pName + " for Week Ending " + printDate.format('MM/DD/YYYY');
    let myTitle = document.getElementById("fc-table-name")
    myTitle.innerHTML = titleString;
    
    let myGenre = document.getElementById("fc-chartDrop");
    myGenre.setAttribute('data-genre',pGenre);
    
    let myDatepicker = document.getElementById("fc-datepicker");
    myDatepicker.setAttribute('data-chart',pChart);
    myDatepicker.setAttribute('data-chartName',pName);
    
    let myTimeframe = document.getElementById("fc-timeframeDrop");
    myTimeframe.setAttribute('data-firstDate', pFirst);
    myTimeframe.setAttribute('data-curDate', pDate);
    myTimeframe.setAttribute('data-lastDate',pLast);
    
    let lastDate = dayjs(pLast);
    let firstDate = dayjs(pFirst);
    let nextString;
    if (pDate === pLast) {
        nextString = "location.href='#'";
    }
    else {
        let nextDate = printDate.add(7,'d');
        nextString = "location.href='fullchart.html?chart=" + pChart + "&cname=" + encodeURIComponent(pName) + "&first=" + pFirst + "&last=" + pLast + "&date=" + nextDate.format('YYYY-MM-DD') + "&genre=" + pGenre + "'";
    }
    
    let prevString;
    if (pDate === pFirst) {
        prevString = "location.href='#'";        
    }
    else {
        prevDate = printDate.subtract(7,'d');
        prevString = "location.href='fullchart.html?chart=" + pChart + "&cname=" + encodeURIComponent(pName) + "&first=" + pFirst + "&last=" + pLast + "&date=" + prevDate.format('YYYY-MM-DD') + "&genre=" + pGenre + "'";
    }
    
    myPrevButton = document.getElementById("fc-prevBtn");
    myPrevButton.setAttribute("onclick",prevString);
    
    myNextButton = document.getElementById("fc-nextBtn");
    myNextButton.setAttribute("onclick",nextString);
    
    //initializing the table
    CsvToHtmlTable.init({
        csv_path: 'data/' + pChart + '/' + pChart + '_' + pDate + '.csv', 
        row_limit: 0,
        element: 'fc-table-container', 
        allow_download: true,
        csv_options: {separator: ',', delimiter: '"'},
        datatables_options: {"paging": false}
        //custom_formatting: [[4, format_link]] //execute the function on the 4th column of every row
    });    

    let startDate = document.getElementById('fc-timeframeDrop').getAttribute('data-firstDate');
    let endDate = document.getElementById('fc-timeframeDrop').getAttribute('data-lastDate'); 
    let curDate = document.getElementById('fc-timeframeDrop').getAttribute('data-curDate');
    let firstYear = startDate.split('-')[0];
    let lastYear = endDate.split('-')[0];
    let myRange = lastYear - firstYear;
    $('#fc-datepicker').datepicker( {
        dateFormat: "yy-mm-dd",
        minDate: startDate,
        maxDate: endDate,
        defaultDate: curDate,
        yearRange: "-" + myRange + ":",
        changeMonth: true,
        changeYear: true,
        showButtonPanel: false,
        beforeShowDay: function (date) {
            return [date.getDay() == 6, ''];
            }, 
        closeText:'Select',
        currentText: 'This year',
        /*onClose: function(dateText, inst) {
            var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
            $(this).val($.datepicker.formatDate('yy', new Date(year, 1, 1)));
            },
        onChangeMonthYear : function () {
            $(this).datepicker( "hide" );
            }*/
        onClose: function (date, datepicker) {
            if (date != "") {
                openDatepickerSelection(date);
            }},
        
        }).focus(function () {
            /*$(".ui-datepicker-month").hide();
            $(".ui-datepicker-calendar").hide();
            $(".ui-datepicker-current").hide();
            $(".ui-datepicker-prev").hide();
            $(".ui-datepicker-next").hide();*/
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
        myTimeframe = document.getElementById("fc-timeframeDrop");
        const firstDate = first_date.split('-');
        const lastDate = last_date.split('-');
        let myFirstDate = new Date(firstDate[0], firstDate[1]-1, firstDate[2]);
        let myFirstDecade = parseInt(firstDate[0] / 10) * 10;
        for (let i=myFirstDecade; i <= max_decade; i += 10) {
            decadeArray.push(i + 's');
            let item = document.createElement('li');
            let anchor = document.createElement('a');
            anchor.classList.add("dropdown-item");
            anchor.href = "#";
            anchor.innerText = i + 's';
            item.appendChild(anchor);
            list.appendChild(item);
        }
    
        document.getElementById(html_link).appendChild(list);
    }

}

function populateYearSelection(first_date, last_date, html_link) {
    const ulYearCheck = document.getElementById('yearSelector');
    if (!ulYearCheck)
    {
        // Create the list element:
        let list = document.createElement('ul');
        list.id = 'yearSelector';
        list.classList.add("dropdown-menu");
        list.classList.add("dropdown-submenu");
        list.style.top = "-37px";

        const firstDate = first_date.split('-');
        const lastDate = last_date.split('-');
        let firstYear = parseInt(firstDate[0]);
        let lastYear = parseInt(lastDate[0]);

        let myChart = document.getElementById('fc-datepicker').getAttribute('data-chart');
        let myChartName = document.getElementById('fc-datepicker').getAttribute('data-chartName');
        let myGenre = document.getElementById('fc-chartDrop').getAttribute('data-genre');

        for (let i= lastYear; i >= firstYear; i--) {
            let item = document.createElement('li');
            let anchor = document.createElement('a');
            anchor.classList.add("dropdown-item");
            anchor.href = "location.href='yearend.html?chart=" + myChart + "&cname=" + encodeURIComponent(myChartName) + "&first=" + firstYear + "&last=" + lastYear + "&year=" + i + "&genre=" + myGenre + "'";
            anchor.innerText = i;
            item.appendChild(anchor);
            list.appendChild(item);
        }

        document.getElementById(html_link).appendChild(list);

    }
    
}

function openDatepickerSelection(selectedDate) {
    let myChart = document.getElementById('fc-datepicker').getAttribute('data-chart');
    let myChartName = document.getElementById('fc-datepicker').getAttribute('data-chartName');
    let myFirst = document.getElementById('fc-timeframeDrop').getAttribute('data-firstDate');
    let myLast = document.getElementById('fc-timeframeDrop').getAttribute('data-lastDate');
    let myGenre = document.getElementById('fc-chartDrop').getAttribute('data-genre');
    let myHtmlLink = "fullchart.html?chart=" + myChart + "&cname=" + encodeURIComponent(myChartName) + "&first=" + myFirst + "&last=" + myLast + "&date=" + selectedDate + "&genre=" + myGenre;
    window.open(myHtmlLink, "_self");
}

