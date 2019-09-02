<?php

    $nom = $_POST['nom'] ?? "";
    $prenom = $_POST['prenom'] ?? "";
    $adresse = $_POST['adresse'] ?? "";
    $code_postal = $_POST['code_postal'] ?? "";
    $ville = $_POST['ville'] ?? "";

    $variete = $_POST['variete'] ?? "";
    $quantite = $_POST['quantite'] ?? "";
    $forme = $_POST['forme'] ?? "";

    $extra = $_POST['extra'] ?? "";

    $submission = "NOUVEAU CLIENT \n Nom : $nom \n Prénom : $prenom \n Adresse : $adresse $code_postal $ville \n Le client souhaite acheter $quantite kg de $variete sous la forme $forme. Il a ajouté ceci : \n $extra";
    file_put_contents("commandes.txt", $submission, FILE_APPEND);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Merci pour votre achat</title>
</head>
<body>
    <h1>Merci pour votre achat !</h1>

    <p>Vos produits sont dès à présent commandés et vous parviendront dans les plus brefs délais (enfin, j'espère).</p>
</body>
</html>