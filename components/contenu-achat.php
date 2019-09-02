<section id="achat">
      <h2>Acheter</h2>
      <form action="submission.php" method="POST">
        <label for="nom">Nom :</label>
        <input type="text" name="nom" id="nom"><br />

        <label for="prenom">Prénom :</label>
        <input type="text" name="prenom" id="prenom"><br />

        <label for="adresse">Adresse :</label>
        <input type="text" name="adresse" id="adresse"><br />

        <label for="code_postal">Code postal :</label>
        <input type="text" name="code_postal" id="code_postal">

        <label for="ville">Ville :</label>
        <input type="text" name="ville" id="ville">

        <hr>

        <label for="variete">Quelle variété de pommes de terres vous intéresse ?</label>
          <select name="variete" id="variete">
            <option value="bintje">Bintje</option>
            <option value="vitelotte">Vitelotte</option>
            <option value="nouvelles">Nouvelles</option>
          </select><br />

        <label for="quantite">Quelle quantité voulez-vous acheter ?</label>
        <input type="number" name="quantite" id="quantite"><span> kg</span><br />

        <span>Sous quelle forme voulez-vous les pommes de terre ?</span><br />
          <input type="radio" name="forme" id="brut" value="brut">
          <label for="brut" class="choix">Brutes</label>
          <input type="radio" name="forme" id="pelees" value="pelees">
          <label for="pelees" class="choix">Pelées et surgelées</label>
          <input type="radio" name="forme" id="frites" value="frites">
          <label for="frites" class="choix">Frites surgelées</label>

          <hr>

          <label for="extra">Avez-vous des recommandations supplémentaires?</label>
          <br />
          <textarea id="extra" name="extra" rows="3" cols="40"></textarea><br />

          <input type="submit" value="Acheter">

      </form>
</section>