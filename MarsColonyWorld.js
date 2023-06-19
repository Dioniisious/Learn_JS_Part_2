/*
Добавлено мною (помимо исправления ошибок):
1) Робот-погрузчик теперь отчитывается об окончании задания спустя время (в таймауте указываем расчетное время поездки)
2) Конструктор зданий и сооружений вынесен в отдельный конструктор (относительно конструктора роботов-строителей)
3) Сделана поменьше вероятность возникновения песчаной бури
*/

/*
Замечания на 13.06.23:
1) Правильно написать CONSTANT_CASE
2) В setTimeout время указывается в мс, а не с!
3) Неправильно setTimeout прибавляется - прибавляется ID таймаута, крииииинж!!!
4) Аналогично и с setInterval
5) Неправильное использование clearinterval
*/



/*
Замечания на 03.06.23:
1) Для констант использовать CONSTANT_CASE
2) Не понятно, что означает RequiredOre. Исправить на amount...чего-то там
3) Добавить setTimeout к циклам робота-шахтера
4) Снизить вероятность поломки инструмента роботу-шахтеру
5) Разделить рандомы выкопанной руды и риска поломки
6) Организовать наследование // PS: пока не дошел до главы 8
7) Добавить setInterval для робота-метеоролога (проводить наблюдения каждые 10 сек)
8) Добавить возможность роботу-метеорологу включать-выключать метеорадар
*/



/*
Задача:
Мы прибыли колонизировать Марс. Задача сложная, а потому нам нужны роботы в помощь.
Для наших работ потребуются роботы различных видов:
    1) роботы-курьеры - возят грузы и помогают в погрузке космических кораблей;
    2) роботы-шахтеры - на новой планете огромное количество полезных ископаемых и этим стоит пользоваться;
    3) роботы-строители - строить и ремонтировать здания нужно всегда;
    4) роботы-метеорологи - кто-то должен патрулировать окрестности и предупреждать надвигающуюся пыльную бурю.
Нужна высокотехнологичная фабрика по производству таких роботов.

В общем, что необходимо сделать: написать конструктор фабрики. Внутри этой фабрики находятся конструктора роботов, производимых для нужд колонии.
В конструкторе фабрики имеем 5 методов-конструкторов, а также св-во title - название данной фабрики.
В конструкторах роботов имеем их уникальные пару методы (задачи, выполняемые роботами), название робота, его назначение.

Если названия нет, в таком случае нужно вернуть объект, который находится в состоянии стройки, он пока не готов.
*/

function FactoryBuild(title) {
    if (title === undefined) {
        return {
            title: "New factory",
            status: "Under construction"
        }
    }
    this.title = title;

    this.MakeCarrier = CarrierAssembly;
    this.MakeMiner = MinerAssembly;
    this.MakeConstructor = ConstructorAssembly;
    this.MakeMeteorologist = MeteorologistAssembly;
}

function CarrierAssembly(title, purpose) {
    this.title = title;
    this.purpose = purpose;
    // Доставляет груз из А в Б, ориентируясь по координатам. Вычисляет ~ время доставки
    this.carry = function (start_x, start_y, finish_x, finish_y) {
        console.log(`Starting to move cargo from position: x: ${start_x}; y: ${start_y}.`);
        let MEDIUM_SPEED = 10;
        let wayLength = ((finish_x - start_x) ** 2 + (finish_y - start_y) ** 2) ** 0.5;
        console.log(`The way will take about ${wayLength / MEDIUM_SPEED} seconds.`);
        setTimeout(() => console.log(`Finishing to move cargo to position: x: ${finish_x}; y: ${finish_y}.`), wayLength * 1000);
    }
}

function MinerAssembly(title, purpose) {
    this.title = title;
    this.purpose = purpose;
    // Добывает руду до тех пор, пока не наберется требуемое количество руды
    // Учитывается риск поломки инструмента
    this.drill = function (requiredAmountOfOre) {
        let duringOreAmount = 0;
        setTimeout(digSomeOre, 1000);

        function digSomeOre() {
            let getSomeOre = Math.random();
            let destructionRisk = Math.random();
            duringOreAmount += getSomeOre;

            console.log("mined at this moment: " + getSomeOre);
            console.log("risk of destruction: " + destructionRisk);
            console.log("already mined: " + duringOreAmount);

            if (destructionRisk > 0.96) {
                console.log("Drill arm was destroyed! Repair is required!");
                return duringOreAmount;
            }
            if (duringOreAmount > requiredAmountOfOre) {
                console.log("The task is successfully finished!");
                return duringOreAmount;
            }
            setTimeout(digSomeOre, 1000);
        }
    }
}

// Конструктор зданий и сооружений для робота-строителя:
function CreateNewBuilding(title, purpose, location, materials) {
    this.title = title;
    this.purpose = purpose;
    this.location = location;
    this.materials = materials;
}

function ConstructorAssembly(title, purpose) {
    this.title = title;
    this.purpose = purpose;
    // Создаем новый объект - здание. Учитываем и расположение, и стройматериалы
    this.Build = CreateNewBuilding;
}

function MeteorologistAssembly(title, purpose) {
    this.title = title;
    this.purpose = purpose;
    // Изучаем видимость вдали. Если вдали мутная и темная видимость, скорее всего, это приближающаяся буря
    this.observe = function () {
        let darknessOfFar = Math.random();
        if (darknessOfFar > 0.96) {
            console.log("Sandstorm will start soon!");
        } else {
            console.log("Weather conditions are fine");
        }
    }
    this.switcher = true;
    this.radarController = function () {
        let radar;
        if (this.switcher) {
            radar = setInterval(this.observe, 10000);
        }
        else clearInterval(radar);
    }
    // Активируем метеорадар. Периодичность анализа погоды - раз в 10 сек:
    this.radar = setInterval(this.observe, 10000);
    // Метеорадар также можно отрубить:
    this.stopObserve = clearInterval(this.activeRadar);
}





// Создадим фабрику "Discoverer"
const firstFactory = new FactoryBuild("Discoverer");

console.log(firstFactory);
/*
FactoryBuild {
  title: 'Discoverer',
  MakeCarrier: [Function: CarrierAssembly],
  MakeMiner: [Function: MinerAssembly],
  MakeConstructor: [Function: ConstructorAssembly],
  MakeMeteorologist: [Function: MeteorologistAssembly]
}
*/

// А еще добавим фабрику, которая пока строится:
const buildingFactory = new FactoryBuild();

// Посмотрим, как выглядит стройка:
console.log(buildingFactory);
// { title: 'New factory', status: 'Under construction' }

// Создаем по роботу каждого вида:
let carrier_bot = new firstFactory.MakeCarrier("Rover", "Deliver cargos");
let driller_bot = new firstFactory.MakeMiner("Mountain tamer", "Get iron ore");
let builder_bot = new firstFactory.MakeConstructor("Brick", "Build glass domes");
let meteo_bot = new firstFactory.MakeMeteorologist("Sky analyst", "Check the weather near the base");

console.log(carrier_bot);
/*
CarrierAssembly {
  title: 'Rover',
  purpose: 'Deliver cargos',
  carry: [Function (anonymous)]
}
*/

console.log(driller_bot);
/*
MinerAssembly {
  title: 'Mountain tamer',
  purpose: 'Get iron ore',
  drill: [Function (anonymous)]
}
*/

console.log(builder_bot);
/*
ConstructorAssembly {
  title: 'Brick',
  purpose: 'Build glass domes',
  Build: [Function (anonymous)]
}
*/

console.log(meteo_bot);
/*
MeteorologistAssembly {
  title: 'Sky analyst',
  purpose: 'Check the weather near the base',
  observe: [Function (anonymous)]
}
*/



// Теперь протестируем все методы:

// Робот-погрузчик получает свое первое задание:
// carrier_bot.carry(2, 4, 5, 8);

/*
Starting to move cargo from position: x: 2; y: 4.
The way will take about 0.5 seconds.
Finishing to move cargo to position: x: 5; y: 8.
*/



// Теперь открываем шахту и начинаем добывать ресурсы:
// driller_bot.drill(3);
// И добыли самую первую массу руды - 3 кг:
/*
mined at this moment: 0.16985817606771003
risk of destruction: 0.5910719738710297
already mined: 0.16985817606771003
mined at this moment: 0.5867128568227358
risk of destruction: 0.13577594031921092
already mined: 0.7565710328904458
mined at this moment: 0.2685104535442342
risk of destruction: 0.028791472843268773
already mined: 1.02508148643468
mined at this moment: 0.6201959686130849
risk of destruction: 0.08388573531201282
already mined: 1.645277455047765
mined at this moment: 0.263141129576659
risk of destruction: 0.5326623760485787
already mined: 1.908418584624424
mined at this moment: 0.38237233966898176
risk of destruction: 0.16362115757658313
already mined: 2.2907909242934057
mined at this moment: 0.2661047038261639
risk of destruction: 0.5877958515295383
already mined: 2.5568956281195696
mined at this moment: 0.16505312554041773
risk of destruction: 0.8835717877532165
already mined: 2.721948753659987
mined at this moment: 0.09783766487577528
risk of destruction: 0.07518493012512772
already mined: 2.819786418535762
Weather conditions are fine
mined at this moment: 0.2332403480243581
risk of destruction: 0.07607625106419968
already mined: 3.0530267665601203
The task is successfully finished!
*/



// Колония расширяется и необходимо построить новое здание:
const neoLab = new CreateNewBuilding("High-tech Lab", "New tech researches", "The small mountain canyon, near the city", ["Bioplastic", "Carbon fiber", "Dense glass", "Alloyed steel", "3D-printer-plastic"]);
console.log(neoLab);
// Посмотрим на созданный объект
/*
CreateNewBuilding {
  title: 'High-tech Lab',
  purpose: 'New tech researches',
  location: 'The small mountain canyon, near the city',
  materials: [
    'Bioplastic',
    'Carbon fiber',
    'Dense glass',
    'Alloyed steel',
    '3D-printer-plastic'
  ]
}
*/



// По умолчанию радар метеоробота включен.
// Буря началась на 11-е наблюдение
/*
Weather conditions are fine
Weather conditions are fine
Weather conditions are fine
Weather conditions are fine
Weather conditions are fine
Weather conditions are fine
Weather conditions are fine
Weather conditions are fine
Weather conditions are fine
Weather conditions are fine
Sandstorm will start soon!
*/

// Теперь так: необходимо быстро перепрошить ПО робота-метеоролога
// Вырубим его через 10 сек
// Затем снова врубим через 5 сек
console.log(meteo_bot.switcher); // true

// Он реально вырубается
setTimeout(() => {
    meteo_bot.switcher = false;
    console.log(meteo_bot.switcher); // false
}, 10000);

// После этого - снова продолжает мониторить погоду:
setTimeout(() => meteo_bot.switcher = true, 15000);