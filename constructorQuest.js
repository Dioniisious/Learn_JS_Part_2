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
        let mediunSpeed = 10;
        let wayLength = ((finish_x - start_x) ** 2 + (finish_y - start_y) ** 2) ** 0.5;
        console.log(`The way will take about ${wayLength / mediunSpeed} seconds.`);
        console.log(`Finishing to move cargo to position: x: ${finish_x}; y: ${finish_y}.`);
    }
}

function MinerAssembly(title, purpose) {
    this.title = title;
    this.purpose = purpose;
    // Добывает руду до тех пор, пока не наберется требуемое количество руды
    // Учитывается риск поломки инструмента
    this.drill = function (requiredOre) {
        let duringOre = 0;
        while (true) {
            let mined = Math.random();
            console.log(mined);
            duringOre += mined;
            console.log(duringOre);
            if (mined > 0.9) {
                console.log("Drill arm was destroyed! Repair is required!");
                return duringOre;
            }
            if (duringOre > requiredOre) {
                console.log("The task is successfully finished!");
                return duringOre;
            }
        }
    }
}

function ConstructorAssembly(title, purpose) {
    this.title = title;
    this.purpose = purpose;
    // Создаем новый объект - здание. Учитываем и расположение, и стройматериалы
    this.Build = function (title, purpose, location, materials) {
        this.title = title;
        this.purpose = purpose;
        this.location = location;
        this.materials = materials;
    }
}

function MeteorologistAssembly(title, purpose) {
    this.title = title;
    this.purpose = purpose;
    // Изучаем видимость вдали. Если вдали мутная и темная видимость, скорее всего, это приближающаяся буря
    this.observe = function () {
        let darknessOfFar = Math.random();
        if (darknessOfFar > 0.9) {
            console.log("Sandstorm will start soon!");
        }
    }
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