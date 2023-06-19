/*
Мои добавления:
1) Для анализа введенной строки в input принял решение использовать именно метод includes
2) Для удобвства поиска можно преобразовывать объекты в примитивы (в частности, строки) 
   А уже их в теории в строковом виде записываем в массив, характеризующий вложенность
3) Используется вложенность объектов, в зависимости от вложенности у нас меняется подсказка
   Реализована она с помощью массива
   Пока что не придумал, как добавлять введенный "слой" в массив, но показание вложенности с помощью массива работает отлично
*/

/*
Замечания на 03.06.23:
1) Имеет 1 input. Вводим в него название страны - выводится подсказка
2) После ввода, например, страны, подсказка страны исчезает. И возникает подсказка нового объекта, уже принадлежащего введенной стране
3) Подсказки можно реализовать с помощью метода массивов find, filter, или др - что будет оптимальнее в этом случае
*/



/*
Задача - выяснить всю информацию о красивых местах в абсолютно разных странах.
И затем про каждую из имеющихся стран запрашивать информацию.
Однако не во всех странах есть некоторые природные объекты.
Например, фьорды есть не в каждой стране.
Не в каждой стране есть водопады, море, горы и тп.
Во избежании ошибки при сборе инфо будем использовать "optional chaining".
*/

/*
Добавление:
имеется 1 input в браузере.
В нем пишем место, которое хотим посмотреть. И приложение по введенной части строки подскажет варианты стран.
Для этого использовать includes. Или find методов массивов.
*/

// По фрагменту введенной строки определим, какую приблизительно страну / место хочет ввести пользователь:
function searcher(inputString, arrOfPut) {
    if (arrOfPut.length !== 0) {
        let buffer;
        let currentProp = beautifulPlaces;
        for (let property of arrOfPut) {
            buffer = currentProp;
            currentProp = buffer[property];
            // console.log(currentProp);
        }
        console.log(currentProp);
        for (variant in currentProp) {
            // console.log(variant);
            if (variant.includes(inputString)) console.log(variant);
        }
    } else {
        for (variant in beautifulPlaces) {
            // console.log(beautifulPlaces[variant].toString());
            if (beautifulPlaces[variant].toString().includes(inputString)) console.log(beautifulPlaces[variant].toString());
        }
    }
}

// Также используем массив уже введенных ключевых слов:
// Массив будет представлять собой вложенность:
// Например, учитывая, какой у мня объект: russia -> biglakes -> putorano
let alreadyPut = [];

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
        },
        title: "russia",
        toString() { return this.title}
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
        },
        title: "norway",
        toString() { return this.title}
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
        },
        title: "australia",
        toString() { return this.title}
    },
    title: "beautyfulPlaces",
    toString() {
        return this.title;
    }
}

/*
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
*/

// Введем-ка в поисковике страну. У нас всплывут подсказки
searcher("", alreadyPut);
/*
russia
norway
australia
*/

searcher("ia", alreadyPut);
/*
russia
australia
*/

// Например, мы ввели страну "russia" и в ней указали тип "bigLakes"
searcher("r", ["russia", "bigLakes"]);
// Получим такой объект: { buryatia: 'Baikal', putorano: 'Khantayskoye', altai: 'Teletskoye' }
// И подсказки во вводном поле:
/*
buryatia
putorano
*/