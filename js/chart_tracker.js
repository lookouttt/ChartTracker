let genre_general = [
    ['hot-100','Hot 100',1958],
    ['billboard-200','Billboard 200',1963],
    ['bubbling-under-hot-100-singles','Bubbling Under',1992],
    ['hot-singles-reccurents','Hot Singles Recurrents',1991],
    ['streaming-songs','Streaming Songs',2013],
    ['radio-songs','Radio Songs',1990],
    ['digital-song-sales','Digital Song Sales',2004],
    ['top-album-sales','Top Album Sales',1991],
    ['current-albums','Current Albums',1983],
    ['catalog-albums','Catalog Albums',1991],
    ['independent-albums','Independent Albums',2000],
    ['vinyl-albums','Vinyl Albums',2011]
];

let genre_alternative = [
    ['hot-alternative-songs','Hot Alternative Songs',2020],
    ['alternative-albums','Alternative Albums',2007],
    ['alternative-streaming-songs','Alternative Streaming Songs',2020],
    ['alternative-airplay','Alternative Airplay',1988],
    ['alternative-digital-song-sales','Alternative Digital Song Sales',2011],
    ['triple-a','Triple A',1996]
];

let genre_christian = [
    ['christian-songs','Christian Songs',2003],
    ['christian-albums','Christian Albums',1983],
    ['christian-streaming-songs','Christian Streaming Songs',2013],
    ['christian-airplay','Christian Airplay',2003],
    ['christian-digital-song-sales','Christian Digital Song Sales',2010],
    ['hot-christian-adult-contemporary','Hot Christian Adult Contemporary',2003]
];

let genre_gospel = [
    ['gospel-songs','Gospel Songs',2005],
    ['gospel-albums','Gospel Albums',1983],
    ['gospel-streaming-songs','Gospel Streaming Songs',2013],
    ['gospel-airplay','Gospel Airplay',2005],
    ['gospel-digital-song-sales','Gospel Digital Song Sales',2010]
];

let genre_country = [
    ['country-songs','Country Songs',1958],
    ['country-albums','Country Albums',1964],
    ['country-streaming-songs','Country Streaming Songs',2013],
    ['country-airplay','Country Airplay',1990],
    ['country-digital-song-sales','Country Digital Song Sales',2010],
    ['americana-folk-albums','Americana Folk Albums',2009]
];

let genre_global = [
    ['billboard-global-200','Global 200',2020],
    ['billboard-global-excl-us','Global Exclduing U.S.',2020]
];

let genre_hard_rock = [
    ['hot-hard-rock-songs','Hot Hard Rock Songs',2020],
    ['hard-rock-albums','Hard Rock Albums',2007],
    ['hard-rock-streaming-songs','Hard Rock Streaming Songs',2020],
    ['hard-rock-digital-song-sales','Hard Rock Digital Song Sales',2011]
];

let genre_jazz = [
    ['jazz-albums','Jazz Albums',1993],
    ['contemporary-jazz','Contemporary Jazz',1987],
    ['traditional-jazz-albums','Traditional Jazz Albums',1983],
    ['jazz-songs','Jazz Songs',2005]
];

let genre_misc = [
    ['dance-club-play-songs','Dance Club Play Songs',1976],
    ['heatseekers-albums','Heatseekers Albums',1991],
    ['blues-albums','Blues Albums',1995],
    ['tastemaker-albums','Tastemaker Albums',2005]
];

let genre_pop = [
    ['pop-songs','Pop Songs',1992],
    ['adult-contemporary','Adult Contemporary',1961],
    ['adult-pop-songs','Adult Pop Songs',1995]
];

let genre_r_b = [
    ['r-b-hip-hop-songs','R&B / Hip-Hop Songs',1958],
    ['r-b-hip-hop-albums','R&B / Hip-Hop Albums',1965],
    ['r-and-b-hip-hop-digital-song-sales','R&B / Hip-Hop Digital Song Sales',2010],
    ['r-and-b-streaming-songs','R&B Streaming Songs',2013],
    ['mainstream-r-and-b-hip-hop','Mainstream R&B / Hip-Hop',1993],
    ['hot-adult-r-and-b-airplay','Hot Adult R&B Airplay',1993]
];

let genre_rock = [
    ['rock-songs','Rock Songs',2009],
    ['rock-albums','Rock Albums',2006],
    ['rock-streaming-songs','Rock Streaming Songs',2013],
    ['rock-airplay','Rock Airplay',2009],
    ['rock-digital-song-sales','Rock Digital Song Sales',2010],
    ['hot-mainstream-rock-tracks','Hot Mainstream Rock Tracks',1981]
];

let top_charts = [
    ['test-chart','Test Chart',2000],
    ['hot-100','Hot 100',1958],
    ['billboard-200','Billboard 200',1963],
    ['bubbling-under-hot-100-singles','Bubbling Under',1992],
    ['hot-singles-reccurents','Hot Singles Recurrents',1991],
    ['adult-contemporary','Adult Contemporary',1961],
    ['hot-mainstream-rock-tracks','Hot Mainstream Rock Tracks',1981],
    ['country-songs','Country Songs',1958],
    ['country-albums','Country Albums',1964],
    ['r-b-hip-hop-songs','R&B / Hip-Hop Songs',1958],
    ['r-b-hip-hop-albums','R&B / Hip-Hop Albums',1965],
    ['alternative-airplay','Alternative Airplay',1988],
    ['triple-a','Triple A',1996]
]

function getCurrentArray(array_id) {
    switch(array_id) {
        case 0:
            return genre_general;
        case 1:
            return genre_alternative;
        case 2:
            return genre_christian;
        case 3:
            return genre_country;
        case 4:
            return genre_global;
        case 5:
            return genre_gospel;
        case 6:
            return genre_hard_rock;
        case 7:
            return genre_jazz;
        case 8:
            return genre_pop;
        case 9:
            return genre_r_b;
        case 10:
            return genre_rock;
        case 11:
            return genre_misc;
        case 12:
            return top_charts;
        default:
    }
}

function makeDropdownMenu(b_submenu, array_index, html_link ) {
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
        anchor.classList.add("dropdown-item");

        if (i===0 && array_index===12) {
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
    document.getElementById(html_link).appendChild(list);
    //return list;
}

