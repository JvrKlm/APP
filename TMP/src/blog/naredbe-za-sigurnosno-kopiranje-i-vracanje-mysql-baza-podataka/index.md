---
title: "Naredbe za sigurnosno kopiranje i vraćanje MySQL baza podataka"
description: "Ako pokrećete vlastiti Linux pogonjen VPS, za svoje baze podataka vjerojatno koristite MySQL. Ovaj je članak mali podsjetnik različitih naredbi za upravljanje MySQL baza podataka koristeći mysqldump, mysql i mysqlimport naredbe u Linuxu."
date: "2019-10-25"
image: "cover.png"
tags: ["mysql", "ubuntu", "kako", "linux"]
---

Ako pokrećete vlastiti Linux pogonjen VPS, za svoje baze podataka vjerojatno koristite MySQL. Ovaj je članak mali podsjetnik različitih naredbi za upravljanje MySQL baza podataka koristeći mysqldump, mysql i mysqlimport naredbe u Linuxu.

### Kako izraditi sigurnosnu kopiju MySQL baze podataka?

Da biste napravili sigurnosnu kopiju MySQL baze podataka ili baze podataka, baza podataka mora postojati na poslužitelju baze podataka i morate joj imati pristup. Format naredbe bi bio.

```bash
mysqldump --user=root --password --single-transaction database > database.sql
```

##### Kako sigurnosno kopirati sve baze podataka?

Ako želite preuzeti sigurnosne kopije svih baza podataka, upotrijebite sljedeću naredbu s opcijom ```--all-databases```.

```bash
mysqldump --user=root --password --single-transaction --all-databases > all_databases.sql
```

##### Kako sigurnosno kopirati samo MySQL strukturu baze podataka?

Ako želite samo sigurnosnu kopiju strukture baze podataka bez podataka, upotrijebite opciju ```--no-data``` s naredbom.

```bash
mysqldump --user=root --password --single-transaction --no-data database > database_structure.sql
```

###### Kako sigurnosno kopirati samo podatke MySQL baze podataka?

Da biste napravili sigurnosnu kopiju podataka samo bez strukture, koristite opciju ```--no-create-info``` s naredbom.

```bash
mysqldump --user=root --password --single-transaction --no-create-db --no-create-info database > database_data.sql
```

### Kako vratiti MySQL bazu podataka?

Maloprije smo vidjeli kako preuzeti sigurnosne kopije cijele baza podataka, samo strukture i samo podataka, sada ćemo vidjeti kako ih vratiti pomoću sljedeće naredbe.

```bash
mysql --user=root --password databse < database.sql
```

Ako želite vratiti bazu podataka koja već postoji, tada ćete morati koristiti naredbu mysqlimport.

```bash
mysqlimport --user=root --password databse < database.sql
```

Na isti način možete vratiti i tablice, strukturu i podatke baze podataka.