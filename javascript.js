var tours = {
    'georgia' : {
        'name' : 'georgia',
        'photos' : {
            'main' : 'src/GeorgiaBack.jpg',
            'list' : ['../../src/georgia-tour/main.jpg', '../../src/georgia-tour/tour1.jpg']
        },
        'info' : 'Georgia (Georgian: საქართველო, romanized: Sakartvelo; is a transcontinental country at the intersection of Eastern Europe and Western Asia. It is part of the Caucasus region, bounded by the Black Sea to the west, by Russia to the north and northeast, by Turkey to the southwest, by Armenia to the south, and by Azerbaijan to the southeast. The country covers an area of 69,700 square kilometres (26,900 sq mi), and has a population of 3.7 million people. Tbilisi is its capital as well as its largest city, home to roughly a third of the Georgian population.',
        'regions' : {
            'names' : ['Adjara', 'Guria'],
            'prices' : [50, 100]
        }
    // },
    // 'turkey' : {
    //     'name' : 'turkey',
    //     'photos' : {
    //         'main' : 
    //     }
    }
}
var counter = 0;
function nextPhoto() {
    if(counter < tours.georgia.photos.list.length - 1) {
    counter += 1;
    document.getElementById('tour-image').setAttribute('src', tours.georgia.photos.list[counter]);
} else {
    counter = 0;
    document.getElementById('tour-image').setAttribute('src', tours.georgia.photos.list[counter]);
}
}

function prevPhoto() {
    if(counter >= 1) {
    counter -= 1;
    document.getElementById('tour-image').setAttribute('src', tours.georgia.photos.list[counter]);
} else {
    counter = tours.georgia.photos.list.length - 1;
    document.getElementById('tour-image').setAttribute('src', tours.georgia.photos.list[counter]);
}
}