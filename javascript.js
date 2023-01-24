var tours = {
    'georgia' : {
        'name' : 'Georgia',
        'photos' : {
            'main' : 'src/GeorgiaBack.jpg',
            'list' : ['../../src/georgia-tour/main.jpg', '../../src/georgia-tour/tour1.jpg']
        },
        'info' : 'Georgia (Georgian: საქართველო, romanized: Sakartvelo; is a transcontinental country at the intersection of Eastern Europe and Western Asia. It is part of the Caucasus region, bounded by the Black Sea to the west, by Russia to the north and northeast, by Turkey to the southwest, by Armenia to the south, and by Azerbaijan to the southeast. The country covers an area of 69,700 square kilometres (26,900 sq mi), and has a population of 3.7 million people. Tbilisi is its capital as well as its largest city, home to roughly a third of the Georgian population.',
        'regions' : {
            'names' : ['Adjara', 'Guria'],
            'prices' : [50, 100]
        }
    },
    'turkey' : {
        'name' : 'Turkey',
        'photos' : {
            'main' : null,
            'list' : ['../../src/turkey-tour/tour1.jpg', '../../src/turkey-tour/tour2.jpg']
        },
        'info' : "Turkey (Turkish: Türkiye, officially the Republic of Türkiye (Turkish: Türkiye Cumhuriyeti, is a transcontinental country located mainly on the Anatolian Peninsula in Western Asia, with a small portion on the Balkan Peninsula in Southeast Europe. It shares borders with the Black Sea to the north; Georgia to the northeast; Armenia, Azerbaijan, and Iran to the east; Iraq to the southeast; Syria and the Mediterranean Sea to the south; the Aegean Sea to the west; and Greece and Bulgaria to the northwest. Cyprus is located off the south coast. Turks form the vast majority of the nation's population and Kurds are the largest minority. Ankara is Turkey's capital, while Istanbul is its largest city and financial centre.",
        'regions' : {
            'names' : ['Istanbol'],
            'prices' : [150]
        }
    },
    'sanfrancisco' : {
        'name' : 'San-Francisco',
        'photos' : {
            'main' : null,
            'list' : ['../../src/san-francisco/tour1.jpg', '../../src/san-francisco/tour2.jpg']
        },
        'info' : 'San Francisco (Spanish for "Saint Francis"), officially the City and County of San Francisco, is the commercial, financial, and cultural center of Northern California. The city proper is the fourth most populous in California, with 815,201 residents as of 2021, and covers a land area of 46.9 square miles (121 square kilometers),[23] at the end of the San Francisco Peninsula, making it the second most densely populated large U.S. city after New York City and the fifth most densely populated U.S. county, behind only four of the five New York City boroughs. Among the 91 U.S. cities proper with over 250,000 residents, San Francisco was ranked first by per capita income and sixth by aggregate income as of 2021. Colloquial nicknames for San Francisco include SF, San Fran, The City, Frisco, and Baghdad by the Bay.',
        'regions' : {
            'names' : [null],
            'prices' : [null]
        }
    }
}
var counter = 0;

function nextPhoto(x) {
    if(counter < imageSet.length - 1) {
    counter += 1;
    document.getElementById('tour-image').setAttribute('src', imageSet[counter]);
} else {
    counter = 0;
    document.getElementById('tour-image').setAttribute('src', imageSet[counter]);
}
}

function prevPhoto() {
    if(counter >= 1) {
    counter -= 1;
    document.getElementById('tour-image').setAttribute('src', imageSet[counter]);
} else {
    counter = imageSet.length - 1;
    document.getElementById('tour-image').setAttribute('src', imageSet[counter]);
}
}

var imageSet = [];
function loadInfo(country) {
    var name = document.getElementById('tour-name');
    var tour_image = document.getElementById('tour-image');
    var info = document.getElementById('information');
    switch (country) {
        case 'turk' :
            name.innerText = tours.turkey.name;
            imageSet = tours.turkey.photos.list;
            tour_image.setAttribute('src', imageSet[0]);
            info.innerText = tours.turkey.info;
            break;
        case 'geo' :
            name.innerText = tours.georgia.name;
            imageSet = tours.georgia.photos.list;
            tour_image.setAttribute('src', imageSet[0]);
            info.innerText = tours.georgia.info;
            break;
        case 'sanfrancisco' :
            name.innerText = tours.sanfrancisco.name;
            imageSet = tours.sanfrancisco.photos.list;
            tour_image.setAttribute('src', imageSet[0]);
            info.innerText = tours.sanfrancisco.info;
            break;
    }
    counter = 0;
}