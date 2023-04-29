/*
В JS постоянно добавляются новые возможности.

Однако в силу разных обстоятельств добавление происходит частично
Какие-то возможности не особо перспективные, какие-то сложные для
    быстрого внедрения.

И новая спецификация реализуется лишь частично.

Также у JS также много разных движков, и то, что поддерживается одним,
    может не поддерживаться другим.

Для этого применяют транспиляторы, переводящие текущий код в прошлый стандарт.
Например, Babel.

Он состоит из 2 частей: транспилер и полифилы:
    1) Транспилер переписывает новый код в старый;
    2) Полифил добавляет встроенные функции новой спецификации.

Итого - транспилер идет от современного к старого,
полифил - от старого к современному.
*/