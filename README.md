# Bugsbunny Project

The bunny that will organize your bugs!

## Introducere

* Obiectiv

Bugsbunny dorește a fi o aplicație web care să permită identificarea și rezolvarea bug-urilor dintr-o aplicație. Întrucât problemele și erorile software sunt partajate cu mai multe persoane, membrii într-o echipă de proiect, acestea vor fi soluționate mai rapid decât în cazul în care o singură persoană ar lucra la rezolvarea bug-ului. Astfel se reduce timpul în care o eroare este rezolvată și astfel procesul de dezvoltare al aplicației poate continua.

* Descriere aplicație

Aplicația trebuie să facă posibilă transmiterea bug-urilor apărute într-o aplicație către membrii unei echipe de lucru în vederea rezolvării acestora.
Platforma este bazată pe o aplicație web cu arhitectură de tip Single Page Application accesibilă în browser de pe desktop, dispozitive mobile sau tablete (considerând preferințele utilizatorului).

* Tipuri de utilizatori cărora li se adresează produsul nostru

Aplicația dezvoltată va avea drept scop principal monitorizarea bug-urilor și comunicarea între membrii echipei în vederea soluționării tuturor problemelor apărute în procesul de dezvoltare. Având în vedere aceste aspecte, aplicația se adresează unui public relativ restrâns, format în mare parte din persoane pasionate de domeniu IT. Prin intermediul aplicației studenții facultăților cu profil tehnic își pot testa aplicațiile realizate, își pot monitoriza bug-urile semnalate și pot comunica mult mai eficient pentru rezolvarea problemelor.

Totodată, aplicația poate fi folosită la scară mai largă în cadrul unei companii producătoare de software, pentru a gestiona optim procesul de producție. Tot mai multe companii realizează beneficiile unei astfel de aplicații, reușind astfel să economisească timp, bani și cel mai important, să ofere servicii de calitate utilizatorilor. Aceste beneficii sunt oferite datorită posibilității semnalării unor situații care împiedică funcționarea normală a aplicațiilor, dar și datorită comunicării mai eficiente în echipă. De asemenea, prioritizarea task-urilor permite membrilor echipelor de lucru să petreacă mai puțin timp în rezolvarea problemelor mici și să se concentreze asupra problemelor importante, care împiedică într-o mare măsură utilizarea aplicației.

Aceste două categorii de persoane reprezintă și principalii utilizatori cărora li se adresează produsul nostru.


* Analiza pieței și principalii concurenți

Aplicația dezvoltată oferă un set de caracteristici personalizabile care răspund nevoilor fiecărei echipe. Bug management-ul și flow-urile de rezolvare a erorilor sunt elemente esențiale în procesul de dezvoltare software existând multe produse ce fac deja acest lucru: Trello, Pivotal Tracker, Bugzilla, FogBugz sau Azure DevOps.

![competition-overview](./docs/competition.png)

* Arhitectura high-level

![highlevel-overview](./docs/highlevel.png)

## Cum se pornește aplicația

- Instalare dependințe
```
    npm i
```

- Creare bază de date (dacă nu există deja)
```
    node createDb.js
```

- Pornire server express.js
```
    node server.js
```

## Interfețe aplicație


## API REST
