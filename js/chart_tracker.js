const chart_name = 0;
const chart_text = 1;
const chart_first_date = 2;
const chart_most_recent = 3;

const max_decade = 2020;

let charts_general = [
    ['hot-100','Hot 100','1958-08-04','2022-11-05'],
    ['billboard-200','Billboard 200','1963-08-17','2022-11-05'],
    ['bubbling-under-hot-100-singles','Bubbling Under',1992,'2022-11-05'],
    ['hot-singles-reccurents','Hot Singles Recurrents',1991,'2022-11-05'],
    ['streaming-songs','Streaming Songs',2013,'2022-11-05'],
    ['radio-songs','Radio Songs',1990,'2022-11-05'],
    ['digital-song-sales','Digital Song Sales',2004,'2022-11-05'],
    ['top-album-sales','Top Album Sales',1991,'2022-11-05'],
    ['current-albums','Current Albums',1983,'2022-11-05']
];

let charts_rock = [
    ['rock-songs','Rock Songs',2009,'2022-11-05'],
    ['rock-albums','Rock Albums',2006,'2022-11-05'],
    ['rock-streaming-songs','Rock Streaming Songs',2013,'2022-11-05'],
    ['rock-airplay','Rock Airplay',2009,'2022-11-05'],
    ['rock-digital-song-sales','Rock Digital Song Sales',2010,'2022-11-05'],
    ['hot-mainstream-rock-tracks','Hot Mainstream Rock Tracks',1981,'2022-11-05'],
    ['hot-hard-rock-songs','Hot Hard Rock Songs',2020,'2022-11-05'],
    ['hard-rock-albums','Hard Rock Albums',2007,'2022-11-05'],
    ['hard-rock-streaming-songs','Hard Rock Streaming Songs',2020,'2022-11-05'],
    ['hard-rock-digital-song-sales','Hard Rock Digital Song Sales',2011,'2022-11-05']
];

let charts_country = [
    ['country-songs','Country Songs',1958,'2022-11-05'],
    ['country-albums','Country Albums',1964,'2022-11-05'],
    ['country-streaming-songs','Country Streaming Songs',2013,'2022-11-05'],
    ['country-airplay','Country Airplay',1990,'2022-11-05'],
    ['country-digital-song-sales','Country Digital Song Sales',2010,'2022-11-05'],
    ['americana-folk-albums','Americana Folk Albums',2009,'2022-11-05']
];

let charts_jazz = [
    ['jazz-albums','Jazz Albums',1993,'2022-11-05'],
    ['contemporary-jazz','Contemporary Jazz',1987,'2022-11-05'],
    ['traditional-jazz-albums','Traditional Jazz Albums',1983,'2022-11-05'],
    ['jazz-songs','Jazz Songs',2005,'2022-11-05']
];

let charts_alternative = [
    ['hot-alternative-songs','Hot Alternative Songs',2020,'2022-11-05'],
    ['alternative-albums','Alternative Albums',2007,'2022-11-05'],
    ['alternative-streaming-songs','Alternative Streaming Songs',2020,'2022-11-05'],
    ['alternative-airplay','Alternative Airplay',1988,'2022-11-05'],
    ['alternative-digital-song-sales','Alternative Digital Song Sales',2011,'2022-11-05'],
    ['triple-a','Triple A',1996,'2022-11-05']
];

let charts_christian = [
    ['christian-songs','Christian Songs',2003,'2022-11-05'],
    ['christian-albums','Christian Albums',1983,'2022-11-05'],
    ['christian-streaming-songs','Christian Streaming Songs',2013,'2022-11-05'],
    ['christian-airplay','Christian Airplay',2003,'2022-11-05'],
    ['christian-digital-song-sales','Christian Digital Song Sales',2010,'2022-11-05'],
    ['hot-christian-adult-contemporary','Hot Christian Adult Contemporary',2003,'2022-11-05'],
    ['gospel-songs','Gospel Songs',2005,'2022-11-05'],
    ['gospel-albums','Gospel Albums',1983,'2022-11-05'],
    ['gospel-streaming-songs','Gospel Streaming Songs',,'2022-11-05'],
    ['gospel-airplay','Gospel Airplay',2005,'2022-11-05'],
    ['gospel-digital-song-sales','Gospel Digital Song Sales',2010,'2022-11-05']
];

let charts_misc = [
    ['dance-club-play-songs','Dance Club Play Songs',1976, '2020-03-28'],
    ['heatseekers-albums','Heatseekers Albums',1991,'2022-11-05'],
    ['blues-albums','Blues Albums',1995,'2022-11-05'],
    ['tastemaker-albums','Tastemaker Albums',2005,'2022-11-05'],
    ['billboard-global-200','Global 200',2020,'2022-11-05'],
    ['billboard-global-excl-us','Global Exclduing U.S.',2020,'2022-11-05'],
    ['catalog-albums','Catalog Albums',1991,'2022-11-05'],
    ['independent-albums','Independent Albums',2000,'2022-11-05'],
    ['vinyl-albums','Vinyl Albums',2011,'2022-11-05']
];

let charts_pop = [
    ['pop-songs','Pop Songs',1992,'2022-11-05'],
    ['adult-contemporary','Adult Contemporary',1961,'2022-11-05'],
    ['adult-pop-songs','Adult Pop Songs',1995,'2022-11-05']
];

let charts_r_b = [
    ['r-b-hip-hop-songs','R&B / Hip-Hop Songs',1958,'2022-11-05'],
    ['r-b-hip-hop-albums','R&B / Hip-Hop Albums',1965,'2022-11-05'],
    ['r-and-b-hip-hop-digital-song-sales','R&B / Hip-Hop Digital Song Sales',2010,'2022-11-05'],
    ['r-and-b-streaming-songs','R&B Streaming Songs',2013,'2022-11-05'],
    ['mainstream-r-and-b-hip-hop','Mainstream R&B / Hip-Hop',1993,'2022-11-05'],
    ['hot-adult-r-and-b-airplay','Hot Adult R&B Airplay',1993,'2022-11-05']
];

let top_charts = [
    ['hot-100','Hot 100',1958,'2022-11-05'],
    ['billboard-200','Billboard 200',1963,'2022-11-05'],
    ['bubbling-under-hot-100-singles','Bubbling Under',1992,'2022-11-05'],
    ['hot-singles-reccurents','Hot Singles Recurrents',1991,'2022-11-05'],
    ['adult-contemporary','Adult Contemporary',1961,'2022-11-05'],
    ['hot-mainstream-rock-tracks','Hot Mainstream Rock Tracks',1981,'2022-11-05'],
    ['country-songs','Country Songs',1958,'2022-11-05'],
    ['country-albums','Country Albums',1964,'2022-11-05'],
    ['r-b-hip-hop-songs','R&B / Hip-Hop Songs',1958,'2022-11-05'],
    ['r-b-hip-hop-albums','R&B / Hip-Hop Albums',1965,'2022-11-05'],
    ['alternative-airplay','Alternative Airplay',1988,'2022-11-05'],
    ['triple-a','Triple A',1996,'2022-11-05']
]

let genre_list = [
    'General Charts',
    'Alternative',
    'Christian/Gospel',
    'Country',
    'Rock',
    'Jazz',
    'Pop',
    'R&B/Hip Hop',
    'Miscellaneous'
]

function getCurrentArray(array_id) {
    switch(array_id) {
        case 0:
            return charts_general;
        case 1:
            return charts_pop;
        case 2:
            return charts_rock;
        case 3:
            return charts_country;
        case 4:
            return charts_jazz;
        case 5:
            return charts_alternative;
        case 6:
            return charts_r_b;
        case 7:
            return charts_christian;
        case 8:
            return charts_misc;
        case 9:
            return top_charts;
        default:
    }
}

function makeDropdownMenu(b_submenu, array_index, html_link) {
    // Create the list element:
    let list = document.createElement('ul');
    list.classList.add("dropdown-menu");
    if (b_submenu) {
        list.classList.add("dropdown-submenu");
        let offsetVal = ((array_index*30) + 7)*-1;
        let styleString = offsetVal + "px";
        list.style.top = styleString;
    }

    let array = getCurrentArray(array_index);
    for(let i = 0; i < array.length; i++) {
        // Create the list item:
        let item = document.createElement('li');
        let anchor = document.createElement('a');
        let curChart = array[i][chart_name];
        let curName = array[i][chart_text];
        let curFirst = array[i][chart_first_date];
        let curDate = array[i][chart_most_recent];

        anchor.classList.add("dropdown-item");
        anchor.setAttribute("onclick", "location.href='fullchart.html?chart=" + curChart + "&cname=" + curName + "&first=" + curFirst + "&date=" + curDate + "&genre=" + array_index + "'");
        anchor.innerText = array[i][1];
        // Set its contents:
        item.appendChild(anchor);
        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    document.getElementById(html_link).appendChild(list);
    //return list;
}

function makeDecadeDropdownMenu(b_submenu, array_index, first_date, last_date, html_link) {
    // Create the list element:
    let list = document.createElement('ul');
    list.classList.add("dropdown-menu");
    if (b_submenu) {
        list.classList.add("dropdown-submenu");
        let offsetVal = ((array_index*30) + 7)*-1;
        let styleString = offsetVal + "px";
        list.style.top = styleString;
    }
    const decadeArray = [];
    myTimeframe = document.getElementById("timeframeDrop");
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

    console.log(decadeArray);
}