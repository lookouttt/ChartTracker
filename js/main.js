$(function() {
    createGenreDropdowns();

    let pDate1 = charts_general[0][chart_most_recent];
    let printDate = new Date(pDate1);
    let titleString = "Top 10 from the Hot 100 for Week Ending " + printDate.toLocaleDateString('en-US', {timeZone: "UTC"});
    let myTitle = document.getElementById("h100-title");
    myTitle.innerHTML = titleString;
    
    let pDate2 = charts_general[1][chart_most_recent];
    printDate = new Date(pDate2);
    titleString = "Top 10 from the Billboard 200 for Week Ending " + printDate.toLocaleDateString('en-US', {timeZone: "UTC"});
    myTitle = document.getElementById("b200-title");
    myTitle.innerHTML = titleString;
    
    $(".carousel").carousel( { interval: 5000 });

    $("#carouselButton").click(function() {
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });

    //initializing the table
    CsvToHtmlTable.init({
        csv_path: 'test_data/hot-100/hot-100_' + pDate1 + '.csv', 
        row_limit: 10,
        element: 'hot100-container', 
        allow_download: true,
        csv_options: {separator: ',', delimiter: '"'},
        datatables_options: {"paging": false}
        //custom_formatting: [[4, format_link]] //execute the function on the 4th column of every row
    });
    CsvToHtmlTable.init({
        csv_path: 'test_data/billboard-200/billboard-200_' + pDate2 + '.csv', 
        row_limit: 10,
        element: 'billboard200-container', 
        allow_download: true,
        csv_options: {separator: ',', delimiter: '"'},
        datatables_options: {"paging": false}
        //custom_formatting: [[4, format_link]] //execute the function on the 4th column of every row
    });    
})