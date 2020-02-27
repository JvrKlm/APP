---
title: "Kako omogućiti mod_rewrite kod Apache poslužitelja na Ubuntu 18.04"
description: "Modul mod_rewrite koristi mehanizam prepisivanja koji se temelji na pravilima, a temelji se na parseru regularnog izraza PCRE, kako bi na zahtjev preuredio tražene URL-ove. Prema zadanim postavkama, mod_rewrite mapira URL na put datotečnog sustava. Međutim, može se koristiti i za preusmjeravanje jednog URL-a na drugi URL ili za pozivanje interne proxy dojave."
date: "2019-03-10"
image: "cover.jpg"
tags: ["kako", "ubuntu", "linux", "apache"]
---

### Što je mod\_rewrite?

Modul mod\_rewrite koristi mehanizam prepisivanja koji se temelji na pravilima i na parseru regularnog izraza PCRE, kako bi na zahtjev preuredio tražene URL-ove. Prema zadanim postavkama, mod_rewrite mapira URL na put datotečnog sustava. Međutim, može se koristiti i za preusmjeravanje jednog URL-a na drugi URL ili za pozivanje interne proxy dojave.

mod_rewrite pruža fleksibilan i moćan način manipuliranja URL-ovima pomoću neograničenog broja pravila. Svako pravilo može imati neograničen broj uvjeta, vezanih pravila, čime vam je omogućeno da prepišete URL na temelju varijabli poslužitelja, varijabli okruženja, HTTP zaglavlja ili vremenskih oznaka.

mod_rewrite radi na punom putu URL-a, uključujući odjeljak put-info. Pravilo prepisivanja može se pozvati u httpd.conf ili u .htaccess datotekama. Put koji generira pravilo prepisivanja može uključivati niz upita ili može dovesti do interne pod-obrade, vanjskog preusmjeravanja zahtjeva ili interne propusnosti proxyja.

### Preduvijeti

Morate imati Ubuntu 18.04 poslužitelj sa sudo omogućenim korisničkim računom.

Nemate poslužitelj? Iznajmite jedan povoljno: [AWS](https://aws.amazon.com/), [DigitalOcean](https://m.do.co/c/f3e244ff3126), [GoogleCloud](https://cloud.google.com/)

Trebate pomoć [kontaktirajte nas.](/kontakt/)

### Postavimo mod\_rewrite

Omogućite mod\_rewrite:

```bash
sudo a2enmod rewrite
sudo systemctl restart apache2
```

Podesite prepoznavanje pravila iz datoteke .htaccess

```bash
sudo nano /etc/apache2/sites-available/000-default.conf
```

Unutar te datoteke naći ćete blok koji počinje s `<VirtualHost *: 80>`. Unutar tog bloka dodajte sljedeći novi blok tako da konfiguracijska datoteka izgleda ovako:

```apacheconf
<VirtualHost *:80>
    <Directory /var/www/html>
        Options Indexes FollowSymLinks MultiViews
        AllowOverride All
        Require all granted
    </Directory>

    . . .
</VirtualHost>
```

Kako bi omogućili nova pravila trebamo ponovno pokrenuti Apache poslužitelj:
Enabling mod\_rewrite:

```bash
sudo systemctl restart apache2
```
