import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Breadcrumb from '../components/breadcrumb';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// SEO og:image
import ogImage from '../images/seo/zastita.jpg';

const PrivacyPage = () => (
	<Layout>
		<SEO
			title="Zaštita osobnih podataka - ORI Solutions"
			description="ORI zaštita osobnih podataka. Vaša privatnost nam je važna i želimo da se pri posjeti naše stranice osjećate sigurno."
			image={ogImage}
		/>
		<Breadcrumb>
			<li className="breadcrumb-item"><Link to="/">Početna</Link></li>
			<li className="breadcrumb-item active" aria-current="page">Zaštita osobnih podataka</li>
		</Breadcrumb>
		<section className="bg-white">
			<div className="container">
				<div className="row">
					<div className="col">
						<h1><FontAwesomeIcon icon="shield-alt" /> Zaštita osobnih podataka</h1>
						<h3>1. Izjava o zaštiti osobnih podataka</h3>
						<p>Vaša privatnost nam je važna i želimo da se pri posjeti naše stranice osjećate sigurno. U nastavku Vas informiramo o tome u koje svrhe prikupljamo i koristimo Vaše osobne podatke te kako te postupke možete nadzirati i ostvarivati svoja prava. Našoj izjavi o zaštiti osobnih podataka možete pristupiti i ispisati je u svakom trenutku putem poveznice Zaštita osobnih podataka koja se nalazi na dnu naše web stranice.</p>
						<p>Naši informatički sustavi su tehničkim i organizacijskim mjerama zaštićeni od neovlaštenog pristupa, izmjene ili širenja Vaših podataka, kao i od gubljenja ili brisanja.</p>
						<p>ori.solutions koristi tzv. “kolačiće” (eng. cookies). U tekstu u nastavku možete saznati više o kolačićima, kako ih koristim i kako ih možete kontrolirati.</p>
						<p>Korištenjem ove web stranice pristajete na upotrebu kolačića u skladu s našom obavijesti o kolačićima. Ako ne pristajete na upotrebu kolačića, molim onemogućite ih prateći upute u dijelu ovog dokumenta u kojem opisujemo opt-out proces, kako bi se kolačići s ove web stranice prestali pohranjivati na vaš uređaj.</p>
						<h3>2. Svrhe i pravna osnova obrade podataka</h3>
						<p>Tijekom vašeg posjeta web stranici ori.solutions prikupljamo određene vrste informacija, koje mogu uključivati naziv operacijskog sustava koji koristite, naziv preglednika, vrsta uređaja preko kojeg posjećujete našu stranicu itd. Koristimo te informacije kako bi poboljšali svoju stranicu i vaše korisničko iskustvo te ih koristimo isključivo u te svrhe ili u svrhe vlastitog marketinga. Podatke ne prosljeđujemo. Također, informacije koje nam pružite na našoj stranici za kontakt su sigurne.</p>
						<p>Obrada se izvodi u skladu s Općom uredbom o zaštiti podataka i hrvatskim zakonima i propisima.</p>
						<h3>3. Osnovni konteksti u kojima se izvodi obrada</h3>
						<p>Centralna baza osoba koje su nas kontaktirale preko web stranice</p>
						<p>Kolačići i web analitika<br/>Izravni marketing</p>
						<h3>4. Centralna baza osoba koje su nas kontaktirale preko web stranice</h3>
						<p>Vaše osobne podatke pohranjujemo u svojoj centralnoj bazi kada postavite neki upit, zatražite ponudu ili se uključite u određene aktivnosti na našoj stranici. Ovisno o vrsti aktivnosti, najčešće s nama dijelite informacije kao što su ime, prezime, mail adresa, telefonski broj ili neka druga vrsta kontakta.</p>
						<p>Ove podatke obrađujemo po potrebi u svrhu sklapanja ili izvršenja ugovora s Vama i ispunjenja Vaših ostalih zahtjeva. Podaci se također obrađuju na temelju naših legitimnih interesa za poboljšanje poslovanja, prema uputama objašnjenima u daljnjem tekstu.</p>
						<h3>5. Kolačići i web analitika</h3>
						<p>Na našoj web stranici upotrebljavamo nužne i funkcionalne kolačiće kako bi omogućili pojedine tehničke značajke i tako Vam osigurali pozitivno korisničko iskustvo. Koristimo se analitičkim kolačićima koji nam omogućuju web analitiku, tj. analizu uporabe naših stranica, koju izvodimo kako bi poboljšali kvalitetu i sadržaj ponuđenih usluga te se koristimo marketinškim kolačićima u svrhu korištenja ponovnog marketinga na prikazivačkim mrežama te oglašavanju na društvenim mrežama.</p>
						<p>Za obradu ovih podataka u analitičke svrhe koristimo uslugu Google Analytics. Sukladno ugovoru s nama, Google ne koristi ove podatke ni u koje druge svrhe i djeluje kao izvršitelj obrade isključivo po našem nalogu. Sukladno svom članstvu u tzv. Štitu privatnosti (“Privacy Shield”) programu suradnje između Europske unije (EU) i Sjedinjenih Američkih Država (SAD-a), Google poduzima sve potrebne mjere za zaštitu podataka. Davatelj usluge je:</p>
						<p>Google LLC<br/>1600 Amphitheatre Pkwy Mountain View,<br/>California 94043, USA</p>
						<p>Više informacija o “Privacy Shield” programu možete pronaći na stranicama <a href="http://azop.hr/aktualno/detaljnije/vodic-za-gradane-eu-sad-stit-privatnosti" target="_blank" rel="noopener noreferrer">Agencije za zaštitu podataka</a>.</p>
						<h3>6. Kojim kolačićima se koristimo i u koje svrhe</h3>
						<p>Na našoj web stranici upotrebljavamo nužne i funkcionalne kolačiće kako bi omogućili pojedine tehničke značajke i tako Vam osigurali pozitivno korisničko iskustvo. Koristimo se analitičkim kolačićima koji nam omogućuju web analitiku, tj. analizu uporabe naših stranica, koju izvodimo kako bi poboljšali kvalitetu i sadržaj ponuđenih usluga te marketinškim kolačićima u svrhu korištenja ponovnog marketinga na prikazivačkim mrežama te oglašavanje na društvenim mrežama.</p>
						<h3>7. Kako možete upravljati kolačićima</h3>
						<p>U Vašim internet preglednicima možete brisati kolačiće i upravljati općim postavkama spremanja kolačića, poveznice na upute popularnih preglednika <a href="https://support.mozilla.org/hr/kb/Kola%C4%8Di%C4%87i" target="_blank" rel="noopener noreferrer">Firefox</a>, <a href="https://support.google.com/chrome/answer/95647?hl=hr" target="_blank" rel="noopener noreferrer">Chrome</a>, <a href="https://support.apple.com/hr-hr/HT201265" target="_blank" rel="noopener noreferrer">Safari</a>.</p>
						<h5>Brisanje i upravljanje u postavkama preglednika</h5>
						<p> Većina web preglednika omogućava potpunu zabranu kolačića ili zabranu kolačića trećih strana. Ako u vašem pregledniku zabranite sve kolačiće, mnoge stranice koje posjetite na internetu neće adekvatno funkcionirati pa tako ni naša. Zabranom kolačića trećih strana povećavate zaštitu od praćenja na internetu, pritom je moguće ograničavanje dostupnosti i kvalitete vanjskih sadržaja, no na našoj web stranici neće biti razlike.</p>
						<h5> Web analitika domene .goranstimac.hr i opt-out mogućnost </h5>
						<p> Analitički kolačići i web analitika, odnosno statistički izvještaji koje nam omogućuju, pomažu nam kako bi naše stranice i sadržaje učinili kvalitetnijim.</p>
						<p>Ako se iz nekog razloga protivite uporabi naših kolačića u ove svrhe, možete ovdje isključiti tu vrstu kolačića i obrisat ćemo ih te ih više nećemo spremati na Vašem uređaju: <a href="javascript:gaOptout();">Isključi Google Analytics</a></p>
						<p>Također, možete koristiti Google tools kako bi se odjavili iz Analitike. <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Saznajte više.</a></p>
						<h3>8. Izravni marketing i ori.solutions</h3>
						<p>Izravni marketing je oblik informiranja i oglašavanja kojim se obraćam direktno svojoj užoj i široj javnosti raznim kanalima, npr. poštom ili e-poštom, kao i potencijalnom klijentu koji je prethodno iskazao interes za naše proizvode ili usluge. Koristimo se podacima koje ste podijelili s nama u sklopu ranije suradnje ili koje ste nam sami dali kako biste primali naš newsletter.</p>
						<p>Obradu Vaših podataka u svrhe izravnog marketinga temeljimo na svojem legitimnom poslovnom interesu, sve kako je objašnjeno dalje u tekstu.</p>
						<p>U sklopu izravnog marketinga, informacije Vam šaljemo u sljedeće svrhe i sljedećim kanalima:</p>
						<p>Svim našim pretplatnicima ori.solutions newslettera šaljemo informacije o uslugama koje nudimo, novostima ili pozivamo na radionice i konferencije koje organiziramo ili u kojim sudjelujem.</p>
						<p>Podaci o Vašem e-mailu, te imenu i prezimenu na koje šaljemo newsletter, dobili smo od Vas kada ste ispunili newsletter formu na našoj web stranici ili prilikom sudjelovanja na nekoj od radionica, predavanja ili konferencija koje smo organizirali ili sudjelovali. U bilo kojem trenutku možete prigovoriti na obradu Vaših osobnih podataka u ove svrhe, odnosno otkazati primanje našeg newslettera na načine opisane u nastavku.</p>
						<p>U svakom trenutku možete uložiti prigovor na obradu Vaših podataka za pojedini ili sve kanale našeg izravnog marketinga. Prigovor se može istaknuti na način opisan niže. Dodatno, prigovor na dobivanje newslettera možete u svakom trenutku uputiti klikom na poveznicu za odjavu u bilo kojem newsletteru.</p>
						<p>Za isporuke newslettera, kao i za upravljanje listama primatelja i evidenciju prigovora (tj. odjava), koristimo Mailchimp platformu i usluge društva “The Rocket Science Group, LLC” iz SAD-a, koje je sukladno ugovoru s nama izvršitelj obrade te postupa isključivo po našem nalogu i poduzima sve potrebne mjere za zaštitu podataka sukladno svom članstvu u “Privacy Shield” programu suradnje između EU i SAD-a.</p>
						<p>Davatelj usluge je:</p>
						<p>The Rocket Science Group LLC<br/>675 Ponce De Leon Ave NE, Suite 500<br/>Atlanta, Georgia 30308, USA</p>
						<p>Više informacija o “Privacy Shield” programu možete pronaći na stranicama <a href="http://azop.hr/aktualno/detaljnije/vodic-za-gradane-eu-sad-stit-privatnosti" target="_blank" rel="noopener noreferrer">Agencije za zaštitu podataka</a>.</p>
						<h3>9. Vanjske poveznice i kolačići</h3>
						<p>Korištenjem vanjskih poveznica na našim internet stranicama, npr. društvene mreže ili YouTube, bit ćete preusmjereni na vanjske domene koje mogu koristiti kolačiće, na što nemamo utjecaj. Podatke prikupljene uz pomoć kolačića i sličnih tehnologija na tim domenama ne dobivamo od njihovih vlasnika ili upravitelja.</p>
						<p>Za više informacija o korištenim kolačićima i mogućnostima upravljanja, molimo provjerite izjave i pravila o kolačićima na posjećenim domenama.</p>
						<h3>10. Razdoblje u kojem će osobni podaci biti pohranjeni</h3>
						<p>Vaše podatke čuvamo dok postoji svrha za čuvanje i obradu:</p>
						<p>Osobni podaci uneseni u obrazac za komentare: dok vlasnik podataka ne zatraži brisanje<br/>Upiti u sklopu potencijalne suradnje, podrške, pružanja informacija o odrađivanju prakse ili upita za posao: dok vlasnik podataka ne zatraži brisanje</p>
						<p>Ukoliko se isti podaci upotrebljavaju u različitu svrhu, čuvamo ih do isteka kasnijeg roka čuvanja; međutim, prestajemo ih upotrebljavati za druge svrhe za koje je (kraći) rok čuvanja istekao. Nakon isteka razdoblja čuvanja podataka, Vaši podaci koji više nisu potrebni se ili nepovratno anonimiziraju (a anonimizirani podaci se mogu zadržati) ili se brišu / uništavaju na siguran način.</p>
						<h3>11. Prava ispitanika</h3>
						<p>Vezano za prikupljanje i obradu Vaših osobnih podataka, osiguravamo Vam sljedeća prava:</p>
						<p>Pravo na pristup<br/>Pravo na ispravak<br/>Pravo na brisanje („pravo na zaborav”)<br/>Pravo na ograničenje obrade<br/>Pravo na prenosivost podataka<br/>Prava na prigovor</p>
						<h5>Pravo na pristup</h5>
						<p>Imate pravo dobiti od nas potvrdu obrađuju li se osobni podaci koji se odnose na Vas te, ako se takvi osobni podaci obrađuju, imate pravo na pristup osobnim podacima i sljedećim informacijama: svrsi obrade, kategorijama osobnih podataka o kojima je riječ, primateljima ili kategorijama primatelja osobnih podataka, razdoblju u kojem će osobni podaci biti pohranjeni, informacije o Vašim pravima i izvorima podataka ako nisu prikupljeni od Vas.</p>
						<p>Ako se Vaši podaci prenose i obrađuju izvan EU, imate pravo na informaciju o odgovarajućim zaštitnim mjerama.</p>
						<p>Kad je to moguće, možete dobiti kopiju osobnih podataka koji se obrađuju.</p>
						<h5>Pravo na ispravak</h5>
						<p>Imate pravo ishoditi od nas ispravak netočnih osobnih podataka koji se na Vas odnose, a koje smo dužani provesti bez nepotrebnog odgađanja. Uzimajući u obzir svrhe obrade, imate pravo dopuniti nepotpune osobne podatke, među ostalim i davanjem dodatne izjave.</p>
						<h5>Pravo na brisanje („pravo na zaborav”)</h5>
						<p>Imate pravo ishoditi od nas brisanje osobnih podataka koji se na Vas odnose, bez nepotrebnog odgađanja, ako ne postoji zakonit razlog za daljnju obradu tih podataka s naše strane (primjerice, ako podaci više nisu nužni u odnosu na svrhe za koje su obrađivani). Ako takav zakonit razlog ipak postoji, o tome ćemo Vas detaljno informirati u sklopu odgovora na Vaš zahtjev za brisanjem.</p>
						<h5>Pravo na ograničenje obrade</h5>
						<p>Imate pravo ishoditi od nas ograničenje obrade Vaših osobnih podataka u sljedećim situacijama: ako osporavate točnost; ako obrada nije zakonita, a protivite se brisanju; ako ih tražite radi postavljanja, ostvarivanja ili obrane pravnih zahtjeva, a nama nisu potrebni za obradu; ako ste uložili prigovor vezano za obradu Vaših osobnih podataka i čekate potvrdu.</p>
						<h5>Pravo na prenosivost podataka</h5>
						<p>Imate pravo podatke koji se odnose na Vas i koje ste nam pružili zaprimiti u strukturiranom, uobičajeno upotrebljavanom i strojno čitljivom formatu i prenijeti ih drugom pružatelju usluga tj. voditelju obrade podataka, ako su ispunjeni sljedeći uvjeti: obrada se temelji na Vašoj privoli ili na ugovoru i uz to se provodi automatiziranim putem.</p>
						<p>Prilikom ostvarivanja svojih prava na prenosivost podataka imate pravo na izravni prijenos podataka od nas drugom voditelju obrade ako je to tehnički izvedivo.</p>
						<h5>Pravo na prigovor</h5>
						<p>Ako se obrada Vaših osobnih podataka zasniva na ostvarenju naših legitimnih interesa, imate pravo u svakom trenutku uložiti prigovor na takvu obradu osobnih podataka u mjeri u kojoj se obrada odnosi na Vaše podatke. Ako uložite takav prigovor</p>
						<p> - vezano za izravni marketing – nećemo dalje obrađivati Vaše osobne podatke u svrhu izravnog marketinga;<br/>- vezano za druge slučajeve legitimnog interesa – nećemo dalje obrađivati Vaše osobne podatke u svrhu na koju se prigovor odnosi, osim u slučaju da dokažemo da postoje uvjerljivi legitimni razlozi za obradu koji nadilaze Vaše interese, prava i slobode ili ako je to potrebno radi postavljanja, ostvarivanja ili obrane naših pravnih zahtjeva</p>
						<h3>12. Kontakti: kako možete ostvarivati svoja prava</h3>
						<p>Telefon: (+385) 95 360 4455<br/>E-pošta: info@ori.solutions</p>
						<p>Kao korisnik naših usluga i posjetitelj naše web stranice, imate pravo dobiti informacije o postupanju s Vašim osobnim podacima i uputiti zahtjeve za ostvarenje Vaših prava.</p>
						<p>Za osnovne informacije, ispravke ili neka druga pitanja u vezi Vaših osobnih podataka možete nas kontaktirati telefonom ili e-poštom na info@ori.solutions.</p>
						<p>Vaše upite i zahtjeve obradit ćemo bez nepotrebnog odgađanja i u skladu sa zakonskim obvezama te ćemo Vas informirati o mjerama koje samo poduzeli.</p>
						<p>Svoja prava možete ostvarivati i putem pritužbe nadzornom tijelu u svezi s obradom Vaših osobnih podataka. U Republici Hrvatskoj, to je <a href="http://azop.hr/zastita-podataka-hrvatska/detaljnije/kontaktirajte-nas" target="_blank" rel="noopener noreferrer">Agencija za zaštitu osobnih podataka</a>, Martićeva ulica 14, 10 000 Zagreb, na čijim stranicama možete pronaći dodatne informacije o načinu kontaktiranja.</p>
						<h3>13. Dopune i izmjene</h3>
						<p>Ova izjava o zaštiti podataka može se povremeno mijenjati kako bi je uskladili sa stvarnim stanjem i zakonskim propisima. U slučaju značajnijih izmjena, poduzet ćemo odgovarajuće mjere da Vas pravovremeno i na primjeren način obavijestimo o svim takvim dopunama i izmjenama.</p>
						<p>Datum zadnje izmjene: 10.1.2019.</p>
					</div>
				</div>
			</div>
		</section>
	</Layout>
);

export default PrivacyPage;
