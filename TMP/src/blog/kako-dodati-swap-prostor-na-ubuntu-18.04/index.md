---
title: "Kako dodati swap prostor na Ubuntu 18.04"
description: 'Zamjenski prostor SWAP može biti u obliku particije na disku ili datoteke. Korisnici mogu stvoriti SWAP prostor tijekom instalacije ili u bilo koje kasnije vrijeme. SWAP prostor se može koristiti u dvije svrhe, kako bi se proširila virtualna memorija izvan instalirane fizičke memorije (RAM-a), a.k.a "omogućiti swap", a također i za podršku suspend-to-disk.'
date: "2019-03-09"
image: "cover.jpg"
tags: ["kako", "ubuntu", "linux", "swap"]
---

### Što je SWAP?

Zamjenski prostor SWAP može biti u obliku particije na disku ili datoteke. Korisnici mogu stvoriti SWAP prostor tijekom instalacije ili u bilo koje kasnije vrijeme. SWAP prostor se može koristiti u dvije svrhe, kako bi se proširila virtualna memorija izvan instalirane fizičke memorije (RAM-a), a.k.a "omogućiti swap", a također i za podršku suspend-to-disk.

Da li je korisno omogućiti SWAP ovisi o količini instalirane fizičke memorije i količini memorije koja je potrebna za pokretanje svih željenih programa. Ako je količina fizičke memorije manja od tražene količine, korisno je omogućiti zamjenu. Time se izbjegavaju uvjeti manjka memorije, gdje će mehanizam ubojice OOM-a Linuxa automatski pokušati osloboditi memoriju ubijanjem procesa. Da biste povećali količinu virtualne memorije na onu potrebnu, dodajte razliku kao SWAP. Na primjer, ako vaši programi zahtijevaju 7.5 GB memorije za pokretanje, a 4 GB fizičke memorije je instalirano, dodajte razliku od 3,5 GB u SWAP prostoru. Dodajte više razmjenjivog prostora za upotrebu kod posluživanja budućih zahtjeva. Navedeno je stvar osobnih preferencija, ako preferirate da se programi ubijaju zbog omogućavanja zamjene nemojte omogućiti SWAP prostor. Najveći nedostatak omogućavanja zamjene je njegova niža učinkovitost ali se pojavljivanjem i masovnim korištenjem SSD pohrane ovaj problem umanjio.

### Preduvijeti

Trebate imati Ubuntu 18.04 poslužitelj sa sudo omogućenim korisničkim računom.

Nemate poslužitelj? Iznajmite jedan povoljno: [AWS](https://aws.amazon.com/), [DigitalOcean](https://m.do.co/c/f3e244ff3126), [GoogleCloud](https://cloud.google.com/)

Trebate pomoć [kontaktirajte nas.](/kontakt/)

### Postavljanje SWAP prostora

Provjera sustava kako bi vidjeli postoje li već SWAP informacija:

```bash
free -h
sudo swapon --show
```

Provjera slobodnog prostora na particiji:

```bash
df -h
```

Izrada SWAP datoteke:

```bash
sudo fallocate -l 1G /swapfile
sudo chmod 600 /swapfile
```

Obavezna provjera dopuštenja SWAP datoteke:

```bash
ls -lh /swapfile
```

Omogućavanje SWAP prostora:

```bash
sudo mkswap /swapfile
sudo swapon /swapfile
sudo cp /etc/fstab /etc/fstab.bak
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
```

Optimiziranje SWAP postavki:

```bash
sudo nano /etc/sysctl.conf
```

Na dno datoteke dodati `vm.swappiness=10` i `vm.vfs_cache_pressure=50`.
