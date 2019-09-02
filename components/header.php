<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
    <header>
        <nav class="fix">
            <a href="#">
                <div id="logo">
                    <img src="images/logo_patates.png">
                    <h2>Les patates</h2>
                </div>
            </a>
            <ul id="menu">
                <li class="menu_item"><a href="index.php">Accueil</a></li>
                <li class="menu_item"><a href="recettes.php">Recettes</a></li>
                <li class="menu_item"><a href="achat.php">Acheter</a></li>
            </ul>
            <div id="bouton_menu_burger">
                <img src="images/menu_hamburger_blanc.png">
            </div>
        </nav>
        <div id="titre">
            <h1>Les Patates</h1>
            <h2><?php echo "$sousTitre"; ?></h2>
        </div>
    </header>
    <div id="noir_menu"></div>
    <div id="menu_burger">
        <ul>
            <a href="index.php"><li>Accueil</li></a>
            <a href="recettes.php"><li>Recettes</li></a>
            <a href="achat.php"><li>Acheter</li></a>
        </ul>
    </div>

    </div>
    <main>