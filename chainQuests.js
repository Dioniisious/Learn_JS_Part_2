/*
Задача - выяснить всю информацию о красивых местах в абсолютно разных странах.
И затем про каждую из имеющихся стран запрашивать информацию.
Однако не во всех странах есть некоторые природные объекты.
Например, фьорды есть не в каждой стране.
Не в каждой стране есть водопады, море, горы и тп.
Во избежании ошибки при сборе инфо будем использовать "optional chaining".
*/

const beautifulPlaces = {
    russia: {
        bigLakes: {
            buryatia: "Baikal",
            putorano: "Khantayskoye",
            altai: "Teletskoye"
        },
        waterfalls: {
            karelia: "Kivach",
            putorano: "Talnikoviy"
        },
        volcanoes: {
            kamchatka: "Klyuchevskaya sopka",
            kurils: "Tyatya"
        }
    },

    norway: {
        islands: {
            archipelago: "Lofoten",
            far: "Bear island",
            far_north: "Yan-Mayen island"
        },
        rocks: {
            long: "Troll's tonque",
            stone: "Kjeragbolten"
        },
        glacier: {
            high: "Briksdalsbreen",
            tall: "Nigardsbreen"
        }
    },

    australia: {
        rocks: {
            red: "Uluru",
            blue: "Blue mountains"
        },
        reef: "Great barrier reef",
        lakes: {
            pink: "Hiller",
            blue: "Blue lake",
            white: "Makkensi"
        }
    }
}

for (let country in beautifulPlaces) {
    console.log("\n" + country);
    console.log(beautifulPlaces[country].bigLakes?.putorano);
    console.log(beautifulPlaces[country].waterfalls?.putorano);
    console.log(beautifulPlaces[country].volcanoes?.kamchatka);
    console.log(beautifulPlaces[country].islands?.far_north);
    console.log(beautifulPlaces[country].rocks?.stone);
    console.log(beautifulPlaces[country].glacier?.high);
    console.log(beautifulPlaces[country].rocks?.red);
    console.log(beautifulPlaces[country].reef);
    console.log(beautifulPlaces[country].lakes?.white);
}