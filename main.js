const navBar = document.querySelector("nav");

const changeMenu = () => {
    if (window.scrollY < 150) {
        navBar.classList.add("fix");
        navBar.classList.remove("float");
    }

    else {
        navBar.classList.add("float");
        navBar.classList.remove("fix");
    }
};

window.addEventListener('scroll', changeMenu);

const recettes = [
    {
        id: 1,
        titre: 'Recette du hachis Parmentier',
        image: '<img src="images/hachis_parmentier.jpg">',
        ingredients: '<li>Pommes de terre</li><li>Viande hâchée</li><li>Beurre</li><li>Oignons, ail, échalote</li><li>Sel, poivre</li>',
        recette: "Hacher l'oignon, l'ail et l’échalote. éplucher et couper la carotte en brunoise très fine. Éplucher les pommes de terre et les couper en petits morceaux. Faire cuire les pommes de terre à l'eau salée ou du lait (attention à surveiller car le lait risque de déborder quand il bout) environ 30 minutes. Faire revenir 1 minute les carottes dans le beurre puis ajouter l'oignon, l'ail et l’échalote. Laisser encore 1 minute. Rajouter la viande. Saler poivrer et laisser cuire 10 minutes en remuant. Passer les pommes de terre au moulin à légumes ou au presse purée et y ajouter le beurre, le lait, la crème et bien saler. Mélanger rapidement. Disposer la viande dans un plat à gratin et recouvrir de purée. Terminer avec le fromage. Passer au four très chaud 10 minutes et 2 minutes sous le gril."
    },

    {
        id: 2,
        titre: 'Recette de la Tartiflette',
        image: '<img src="images/tartiflette.jpeg">',
        ingredients: '<li>Pommes de terre</li><li>Lardons</li><li>Reblochon</li><li>Oignons</li><li>Vin blanc</li>',
        recette: "Pelez et émincez les oignons. Dans une poêle, faites chauffer l’huile et faites-y revenir les oignons émincés. Lorsqu’ils deviennent translucides, ajoutez-y les allumettes de lardons fumés. Faites chauffer l’huile dans une poêle. Poursuivez la cuisson en remuant régulièrement à l’aide d’une cuillère en bois, jusqu’à ce que les oignons et les lardons soient bien dorés. Déglacez la poêle avec le vin blanc et poursuivez la cuisson pendant 5 minutes. Réservez.  Pelez les pommes de terre cuites et coupez-les en grosses rondelles. Beurrez un grand plat à four ou de petits contenants individuels. Râpez-y un peu de noix de muscade. Parsemez de poivre blanc concassé. Répartissez-y les oignons et les lardons dorés au vin blanc, puis les pommes de terre. Recouvrez le tout de crème fraîche, puis étalez-y les lamelles de fromage. Enfournez la tartiflette pendant 35 min, jusqu’à ce que le reblochon forme une croûte bien dorée et gratinée."
    },
    {
        id: 3,
        titre: 'Recette des Country Potatoes',
        image: '<img src="images/potatoes.jpeg">',
        ingredients: '<li>Pommes de terre</li><li>Paprika</li><li>Fécule de maïs</li><li>Oignon semoule</li><li>Ciboulette</li>',
        recette: "Préchauffer le four à 220°C (thermostat 7). Lavez soigneusement les pommes de terre mais surtout ne pas les éplucher. Les couper en 4 dans le sens de la longueur puis les sécher dans un linge. Mettre toutes les épices, la chapelure, la fécule et les oignons frits dans le bol d'un mixer et donner juste deux tours afin de hacher grossièrement le tout. Déposer les quartiers de pommes dans une jatte avec l'huile et bien mélanger. Puis ajouter la chapelure aux épices sur les pommes de terre et bien mélanger afin de bien recouvrir les pommes de terre. Mettre les pommes de terre assaisonnées dans un grand plat à four anti-adhésif ou sur la plaque du four. Il faut que les pommes de terre soit le plus à plat possible. Faire cuire 50 minutes environ à four bien chaud, les pommes de terre sont cuites lorsqu'elles sont bien dorées et qu'elles ont bien séché. "
    },
    {
        id: 4,
        titre: 'Recette du Velouté Poireau Pomme de terre',
        image: '<img src="images/veloute.jpg">',
        ingredients: '<li>Pommes de terre</li><li>Poireaux</li><li>Crème fraîche</li><li>Bouillon de poule</li><li>Sel, poivre</li>',
        recette: "Epluchez et coupez les pommes de terre en dés. Lavez et émincez les poireaux. Faites chauffer le beurre dans une cocotte, mettez-y les poireaux et laissez suer. Ajoutez les pommes de terre, le bouquet garni, sel et poivre. Mouillez avec le bouillon, couvrez et laissez cuire 45 min. Mixez et rajoutez la crème. Servez bien chaud avec des croûtons. "
    },
    {
        id: 5,
        titre: 'Recette des Pommes de terres farcies',
        image: '<img src="images/farcies.jpeg">',
        ingredients: '<li>Pommes de terre</li><li>Jambon</li><li>Crème fraîche</li><li>Emmental</li><li>Sel, poivre</li>',
        recette: "Préchauffez le four à 200°C (th.6/7). Lavez les pommes de terre dans les épluchez et enveloppez-les dans du papier d'aluminium. Disposez-les sur la grille du four et laissez cuire environ 30 min. Sortez les pommes de terre du four, découpez le dessus, prélevez un peu de chair à l’aide d’une cuillère et mettez-la dans un saladier. Écrasez à la fourchette avec la crème, salez, poivrez et ajoutez le jambon coupé en lanières. Remettez le mélange dans les pommes de terre et parsemez-les de fromage râpé. Enfournez et faites gratiner environ 10 min. Servez bien chaud."
    },
    {
        id: 6,
        titre: 'Recette du Pot au Feu',
        image: '<img src="images/potaufeu.jpg">',
        ingredients: '<li>Pommes de terre</li><li>Os a moelle</li><li>Carottes</li><li>Oignon</li><li>Sel, poivre, bouquet garni</li>',
        recette: "Laver, éplucher tous les légumes, et les couper en morceaux assez gros. Piquer l'oignon entier avec les clous de girofle. Faire bouillir 3 litres d'eau, ajouter tous les légumes, puis le bouquet garni, l'ail, sel, poivre puis la viande. Faire cuire le tout pendant environ 2 h 30-3 h, écumer de temps en temps. 1 h avant la fin, ajouter les os à moelle, et mettre du gros sel aux extremités pour conserver la moelle. Egoutter les légumes et la viande, et servir bien chaud avec de la moutarde. "
    },


];

const ouvrirMenu = () => {
    document.getElementById('noir_menu').classList.add('show');
    document.getElementById('menu_burger').classList.add('show');
};

const fermerMenu = () => {
    document.getElementById('noir_menu').classList.remove('show');
    document.getElementById('menu_burger').classList.remove('show');
};

document.getElementById('bouton_menu_burger').addEventListener('click',ouvrirMenu);
document.getElementById('noir_menu').addEventListener('click',fermerMenu);

const lienRecette = document.getElementsByClassName('lien_recette');

if (lienRecette) {
    recettes.forEach((recette) => {
        let contenu = "<h3>"+recette.titre+"</h3>"+recette.image+"<ul>"+recette.ingredients+"</ul><p>"+recette.recette+"</p>";
        document.getElementById(recette.id).addEventListener('click', (event) => {
            event.preventDefault();
            document.getElementById('modal').classList.add('show');
            document.getElementById('contenu_modal').innerHTML = contenu;
            document.getElementById('noir_modal').classList.add('show');
        });
    });

    document.getElementById('croix').addEventListener('click', (event) => {
        document.getElementById('noir_modal').classList.remove('show');
        document.getElementById('modal').classList.remove('show');
    });

    document.getElementById('noir_modal').addEventListener('click', (event) => {
        document.getElementById('noir_modal').classList.remove('show');
        document.getElementById('modal').classList.remove('show');
    });
}

