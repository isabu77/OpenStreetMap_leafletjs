// exercice Aformac du 03/08/2019
// OpenStreetMap avec Leaflet.js

// on recopie la table des marqueurs 
// car on ne peut pas charger le datas.json
var villes = [{
        "nom": "T\u00e9l\u00e9centre - Aurillac",
        "adresse": "44 boulevard du Pont Rouge",
        "code_postal": "15000",
        "ville": "AURILLAC",
        "tel": "04-71-45-64-40",
        "e-mail": "",
        "site_web": "",
        "porteur": "",
        "latitude": 44.92689,
        "longitude": 2.448084
    },
    {
        "nom": "Connecting Bourbon",
        "adresse": "1 place Mar\u00e9chale de Lattre de tassigny",
        "code_postal": "03000",
        "ville": "MOULINS",
        "tel": "00-00-00-00-00",
        "e-mail": "",
        "site_web": "http:\/\/connectingbourbon.com\/",
        "porteur": "",
        "latitude": 46.5621205,
        "longitude": 3.33011
    },
    {
        "nom": "T\u00e9l\u00e9centre du Pays de Mauriac",
        "adresse": "Rue du 11 novembre",
        "code_postal": "15200",
        "ville": "MAURIAC",
        "tel": "04-71-67-35-97",
        "e-mail": "telecentre@paysdemauriac.fr",
        "site_web": "http:\/\/www.telecentre.paysdemauriac.fr\/",
        "porteur": "Communaut\u00e9 de communes",
        "latitude": 45.218316,
        "longitude": 2.334772
    },
    {
        "nom": "T\u00e9l\u00e9centre - Montmurat",
        "adresse": "Le bourg",
        "code_postal": "15600",
        "ville": "MONTMURAT",
        "tel": "04-71-46-22-02",
        "e-mail": "",
        "site_web": "http:\/\/www.montmurat.fr\/activites\/telecentre",
        "porteur": "CD15",
        "latitude": 44.628702,
        "longitude": 2.200891
    },
    {
        "nom": "Epicentre Cowork",
        "adresse": "5 rue Saint-Dominique",
        "code_postal": "63000",
        "ville": "CLERMONT-FERRAND",
        "tel": "09-81-04-60-81",
        "e-mail": "contact@epicentrecowork.org",
        "site_web": "http:\/\/epicentrecowork.org\/",
        "porteur": "SCOP Culture Trafic",
        "latitude": 45.778593,
        "longitude": 3.081186
    },
    {
        "nom": "H\u00e9l'Yss Cowork",
        "adresse": "4 rue Eug\u00e8ne Gauttier",
        "code_postal": "63500",
        "ville": "ISSOIRE",
        "tel": "04-73-54-73-88",
        "e-mail": "helyss.cowork@gmail.com",
        "site_web": "http:\/\/issoire-cowork.org",
        "porteur": "Association H\u00e9l'Yss",
        "latitude": 45.545236,
        "longitude": 3.251364
    },
    {
        "nom": "La Forge",
        "adresse": "12 rue Paul Doumer",
        "code_postal": "15000",
        "ville": "AURILLAC",
        "tel": "04-82-53-37-93",
        "e-mail": "la-forge@coworking-aurillac.fr",
        "site_web": "http:\/\/www.coworking-aurillac.fr\/",
        "porteur": "Association La Forge",
        "latitude": 44.927008,
        "longitude": 2.44522
    },
    {
        "nom": "T\u00e9l\u00e9centre - Allanche",
        "adresse": "Grand'Rue de l'Abb\u00e9 de Pradt",
        "code_postal": "15160",
        "ville": "ALLANCHE",
        "tel": "04-71-20-49-26",
        "e-mail": "telecentre@cezallier.org",
        "site_web": "http:\/\/www.cezallier.org\/telecentre.php",
        "porteur": "Communaut\u00e9 de communes",
        "latitude": 45.229095,
        "longitude": 2.93444
    },
    {
        "nom": "T\u00e9l\u00e9centre - Riom es Montagne",
        "adresse": "Place de la gare",
        "code_postal": "15400",
        "ville": "RIOM-\u00c8S-MONTAGNES",
        "tel": "04-71-78-21-49",
        "e-mail": "eps@pays-gentiane.com",
        "site_web": "http:\/\/www.pays-gentiane.com\/accueillir\/sinstaller-en-pays-gentiane\/le-telecentre-du-pays-gentiane\/",
        "porteur": "Communaut\u00e9 de communes",
        "latitude": 45.28482,
        "longitude": 2.658225
    },
    {
        "nom": "Le 4puissance3",
        "adresse": "ZA Chavanon 2",
        "code_postal": "43120",
        "ville": "MONISTROL SUR LOIRE",
        "tel": "06-17-93-76-10",
        "e-mail": "contact@4puissance3.com",
        "site_web": "http:\/\/4puissance3.com\/",
        "porteur": "4puissance3 SARL",
        "latitude": 45.27093,
        "longitude": 4.193935
    },
    {
        "nom": "Local 19",
        "adresse": "33, rue Pascal",
        "code_postal": "63000",
        "ville": "CLERMONT-FERRAND",
        "tel": "06-01-81-25-42",
        "e-mail": "contact@local19.fr",
        "site_web": "http:\/\/www.local19.fr",
        "porteur": "Association Local 19",
        "latitude": 45.780081,
        "longitude": 3.088045
    },
    {
        "nom": "Combrailles Durables",
        "adresse": "Le Bourg",
        "code_postal": "63410",
        "ville": "LOUBEYRAT",
        "tel": "09-54-63-92-52",
        "e-mail": "contact@combraillesdurables.fr",
        "site_web": "http:\/\/combraillesdurables.blogspot.fr",
        "porteur": "Combrailles Durables",
        "latitude": 45.936155,
        "longitude": 3.010823
    },
    {
        "nom": "Espace Economique T\u00e9l\u00e9centre",
        "adresse": "26 rue Winston Churchill",
        "code_postal": "03120",
        "ville": "LAPALISSE",
        "tel": "04-70-99-76-25",
        "e-mail": "telecentre@cc-paysdelapalisse.fr",
        "site_web": "http:\/\/www.cc-paysdelapalisse.fr\/entreprendre\/espace-travail-partage.html",
        "porteur": "Communaut\u00e9 de communes",
        "latitude": 46.248873,
        "longitude": 3.635139
    },
    {
        "nom": "T\u00e9l\u00e9centre - Chaudes Aigues",
        "adresse": "29, Avenue Pierre Vialard",
        "code_postal": "15110",
        "ville": "CHAUDES AIGUES",
        "tel": "04-71-23-92-33",
        "e-mail": "maisondeservicesccca@orange.fr",
        "site_web": "",
        "porteur": "Communaut\u00e9 de communes",
        "latitude": 44.85506,
        "longitude": 3.005618
    },
    {
        "nom": "P\u00f4le T\u00e9l\u00e9travail du Pays de Murat",
        "adresse": "4, rue Fg. Notre-Dame",
        "code_postal": "15300",
        "ville": "MURAT",
        "tel": "04-71-20-28-88",
        "e-mail": "mds@paysdemurat.fr",
        "site_web": "http:\/\/www.paysdemurat.fr\/telecentre\/accueil.html",
        "porteur": "Communaut\u00e9 de communes",
        "latitude": 45.110983,
        "longitude": 2.869945
    },
    {
        "nom": "T\u00e9l\u00e9centre - Cassaniouze",
        "adresse": "Rue du Mont",
        "code_postal": "15340",
        "ville": "CASSANIOUZE",
        "tel": "04-71-49-90-03",
        "e-mail": "mairie.cassaniouze@wanadoo.fr",
        "site_web": "",
        "porteur": "Mairie",
        "latitude": 44.690281,
        "longitude": 2.383909
    },
    {
        "nom": "La maison Jules Verne",
        "adresse": "Chemin du Fleuve",
        "code_postal": "43110",
        "ville": "AUREC-SUR-LOIRE",
        "tel": "07 61 41 52 40",
        "e-mail": "contact@yoann-duriaux.fr",
        "site_web": "http:\/\/yoannduriaux.wixsite.com\/maisonjulesverne",
        "porteur": "ShareAurec",
        "latitude": 45.374188,
        "longitude": 4.200302
    },
    {
        "nom": "Work \u00e0 venir",
        "adresse": "5 rue Saint Gen\u00e8s",
        "code_postal": "63000",
        "ville": "CLERMONT-FERRAND",
        "tel": "04-73-92-30-50",
        "e-mail": "clubworkavenir@gmail.com",
        "site_web": "https:\/\/clubworkavenir.wordpress.com",
        "porteur": "Espace Info Jeunes",
        "latitude": 45.77704,
        "longitude": 3.085397
    },
    {
        "nom": "T\u00e9l\u00e9centre - Saint Flour",
        "adresse": "ZA Rozier Coren",
        "code_postal": "15100",
        "ville": "SAINT FLOUR",
        "tel": "04-71-60-56-83",
        "e-mail": "s.soubeyroux@ccpsf.fr",
        "site_web": "http:\/\/www.cc-paysdesaintflour.fr\/entreprendre\/telecentre\/",
        "porteur": "Communaut\u00e9 de communes",
        "latitude": 45.061804,
        "longitude": 3.107845
    },
    {
        "nom": "T\u00e9l\u00e9centre - Ydes",
        "adresse": "4 rue du Docteur Basset",
        "code_postal": "15210",
        "ville": "YDES",
        "tel": "04-71-40-87-31",
        "e-mail": "services-publics@ydes,fr",
        "site_web": "",
        "porteur": "CD15",
        "latitude": 45.346126,
        "longitude": 2.43607
    },
    {
        "nom": "Num\u00e9ro 7 Cowork In Velay",
        "adresse": "7 Boulevard Saint Louis",
        "code_postal": "43000",
        "ville": "LE PUY EN VELAY",
        "tel": "06-58-99-61-19",
        "e-mail": "contact@numero-sept.net",
        "site_web": "http:\/\/www.numero-sept.net\/",
        "porteur": "Num\u00e9ro 7",
        "latitude": 45.041847,
        "longitude": 3.881518
    },
    {
        "nom": "Le Bivouac",
        "adresse": "22, All\u00e9e Alan Turing",
        "code_postal": "63000",
        "ville": "CLERMONT-FERRAND",
        "tel": "04-43-86-02-00",
        "e-mail": "hello@lebivouac.com",
        "site_web": "http:\/\/www.lebivouac.com",
        "porteur": "GIP",
        "latitude": 45.758811,
        "longitude": 3.129791
    }
];

// Fonction d'initialisation de la carte OpenStreetMap_LeafletJs
// dans la page about
function initMap() {
    // On initialise la latitude et la longitude (centre de la carte)
    // Paris  lat = 48.852969 lon = 2.349903
    // Auvergne :
    var lat = 45.778593;
    var lon = 3.081186;

    // Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
    var macarte = L.map('map').setView([lat, lon], 11);

    // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. 
    // Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
        // Il est toujours bien de laisser le lien vers la source des données
        attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
        minZoom: 1,
        maxZoom: 8
    }).addTo(macarte);

    // On charge en Ajax les données des marqueurs qui sont dans datas.json sur le serveur :
    //$.getJSON("/assets/js/datas.json", function(villes) {

    // fonction callback au chargement du fichier json :
    // le tableau json est utilisable tel quel, pas de json.parse
    //villes = JSON.parse(data);
    //villes = data;

    //initialise les groupes de marqueurs
    var markerClusters = L.markerClusterGroup();

    // ajouter les marqueurs sur la carte
    for (ville in villes) {
        var marker = L.marker([villes[ville].latitude, villes[ville].longitude]);
        //.addTo(macarte);
        // construire le texte en html
        var obj = villes[ville];
        var bulle = "Nom : " + obj.nom + "<br/>" +
            "Adresse : " + obj.adresse + "<br/>" +
            "Code Postal : " + obj.code_postal + "<br/>" +
            "Ville : " + obj.ville + "<br/>" +
            "Tél : " + obj.tel + "<br/>" +
            "e-mail : " + obj.email + "<br/>" +
            "Site Web : " + obj.site_web + "<br/>" +
            "Porteur : " + obj.porteur + "<br/>" +
            "Latitude : " + obj.latitude + "<br/>" +
            "Longitude : " + obj.longitude + "<br/>";

        marker.bindPopup(bulle);

        // ajout du marqueur aux groupes
        markerClusters.addLayer(marker);
    }

    macarte.addLayer(markerClusters);
    //});
}

window.onload = function() {
    initMap();
};