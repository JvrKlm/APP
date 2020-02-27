---
title: "Gatsby.js otklanjanje pogreške linux - System limit for number of file watchers reached"
description: "Navedeni problem nastaje zbog načina na koji Gatsby.js radi, generira statične datoteke i optimizira fotografije, čime lako nadilazi definirani Listen limit za broj datoteka koje Linux OS prati po direktoriju."
date: "2019-08-14"
image: "cover.png"
tags: ["otklanjanje pogreške", "gatsby.js", "linux"]
---

Navedeni problem nastaje zbog načina na koji Gatsby.js radi, generira statične datoteke i optimizira fotografije, čime lako nadilazi definirani Listen limit za broj datoteka koje Linux OS prati po direktoriju.

Naime, Linux OS koristi Listen inotify za nadgledanje promjena datoteka u direktorijima. Stoga, nije neuobičajeno da naiđete na ograničenje sustava u broju datoteka koje možete nadzirati. Na primjer, ograničenje inotify na Ubuntu Lucid (64bit) postavljeno je na 8192.

Koji je trenutni limit vašeg sustava možete saznati nardbom:

```bash
cat /proc/sys/fs/inotify/max_user_watches
```

Kada definirani limit nije dovoljan za praćenje promijena datoteka u direktoriju, limit morate povećati kako bi Listen radio ispravno.

Novi privremeni limit možete postaviti naredbom:

```bash
sudo sysctl fs.inotify.max_user_watches=524288
sudo sysctl -p
```

Ako pak želite trajno promijeniti Listen limit koristite naredbu:

```bash
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
sudo sysctl -p
```

Ako i dalje imate problema s Listen provijerite vrijednosti ```max_queued_events``` i ```max_user_instances```.