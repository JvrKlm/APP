---
title: "Kako instalirati LAMP stog na Ubuntu 18.04"
description: "LAMP je arhetipski model skupova web-servisa, nazvan kao skraćenica od imena njegovih izvornih četiriju otvorenih komponenti: Linux operativni sustav, Apache HTTP poslužitelj, MySQL sustav za upravljanje relacijskom bazom podataka (RDBMS) i PHP programskog jezika."
date: "2019-03-09"
image: "cover.png"
tags: ["kako", "ubuntu", "linux", "apache", "mysql", "lamp"]
---

### Što je LAMP?

LAMP je arhetipski model skupova web-servisa, nazvan kao skraćenica od imena njegovih izvornih četiriju otvorenih komponenti: Linux operativni sustav, Apache HTTP poslužitelj, MySQL sustav za upravljanje relacijskom bazom podataka (RDBMS) i PHP programskog jezika.

### Preduvijeti

Trebate imati Ubuntu 18.04 poslužitelj sa sudo omogućenim korisničkim računom.

Nemate poslužitelj? Iznajmite jedan povoljno: [AWS](https://aws.amazon.com/), [DigitalOcean](https://m.do.co/c/f3e244ff3126), [GoogleCloud](https://cloud.google.com/)

Trebate pomoć [kontaktirajte nas.](/kontakt/).

### Postavljanje LAMP stoga

Instaliranje Apachea i prilagodba vatrozida kako bi se omogućio web-promet:

```bash
sudo apt update
sudo apt install apache2
sudo ufw allow in "Apache Full"
```

Instaliranje MySQLa:

```bash
sudo apt install mysql-server
sudo mysql_secure_installation
sudo mysql
```

Konfigurirajte root računa za provjeru autentičnosti pomoću zaporke, ne zaboravite promijeniti `'password'` u svoju zaporku:

```sql
SELECT user,authentication_string,plugin,host FROM mysql.user;
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
FLUSH PRIVILEGES;
exit
```

Instaliranje PHPa:

```bash
sudo apt install php libapache2-mod-php php-mysql
```
