---
title: "Kako instalirati phpMyAdmin na Ubuntu 18.04"
description: "phpMyAdmin je besplatan softverski alat napisan u PHP-u, namijenjen upravljanju MySQL-om preko interneta. phpMyAdmin podržava širok raspon operacija na MySQL i MariaDB bazama podataka. Često korištene operacije (upravljanje bazama podataka, tablicama, stupcima, odnosima, indeksima, korisnicima, dozvolama, itd.) Mogu se izvršiti putem korisničkog sučelja, dok još uvijek imate mogućnost izravno izvršiti bilo koji SQL izraz."
date: "2019-03-11"
image: "cover.jpg"
tags: ["kako", "ubuntu", "linux", "phpmyadmin", "mysql"]
---

###Što je phpMyAdmin?

phpMyAdmin je besplatan softverski alat napisan u PHP-u, namijenjen upravljanju MySQL-om preko interneta. phpMyAdmin podržava širok raspon operacija na MySQL i MariaDB bazama podataka. Često korištene operacije (upravljanje bazama podataka, tablicama, stupcima, odnosima, indeksima, korisnicima, dozvolama, itd.) Mogu se izvršiti putem korisničkog sučelja, dok još uvijek imate mogućnost izravno izvršiti bilo koji SQL izraz.

### Preduvijeti

Morate imati Ubuntu 18.04 server sa sudo omogućenim korisničkim računom.

Nemate svoj server? Unajmite jadan povoljno: [AWS](https://aws.amazon.com/), [DigitalOcean](https://m.do.co/c/f3e244ff3126), [GoogleCloud](https://cloud.google.com/)

Ako vam treba pomoć uvijek nas možete [kontaktirati](/kontakt/).

### Postavite phpMyAdmin

Instalirajte phpMyAdmin iz zadanih Ubuntu repozitorija:

```bash
sudo apt update
sudo apt install phpmyadmin php-mbstring php-gettext
sudo phpenmod mbstring
sudo systemctl restart apache2
```

Prilagodite korisničku autentifikaciju i privilegije:

```bash
sudo mysql
```

Konfigurirajte root račun za provjeru autentičnosti pomoću zaporke i ne zaboravite promijeniti zaporku "password":

```sql
SELECT user,authentication_string,plugin,host FROM mysql.user;
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
FLUSH PRIVILEGES;
exit
```
