<?php 
//phpinfo(); //voir ma config php ce quelle supporte ou pas
// Initialisation de la session
// session_start();
// Test de var_dump()
// var_dump($_SESSION);
// initialisation de la variable
$texteDuBoutton="Page 2";
?>

<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Questrial&display=swap"
    />
    <link rel="stylesheet" href="/component/css/mesCssPerso.css" />
    <link
      rel="stylesheet"
      href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css"
    />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script
      src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
      crossorigin="anonymous"
    ></script>
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <title>Accueil</title>
  </head>

  <body>
    <h1><strong>Page Accueil</strong></h1>
    <div class="col">
      <div class="row justify-content-between" id="logoConnexion">
        <div class="connexion" id="connect">
        <a href="./page2.php?texteDuBoutton=acceuil"> <button
            type="button"
            class="btn btn-success btn-lg"
            onClick="window.location.href=''"
          >
          <i class="fa fa-fighter-jet" aria-hidden="true"></i>&nbsp;<?php echo $texteDuBoutton;?>
          </button>
          </a>
        </div>
      </div>
    </div>
     <!-- Formulaire -->
     <h2>Formulaire</h2>
    <form method="POST" action="./page2.php?texteDuBoutton=retour">
              <div class="row">
                <div class="col">
                  <label for="name">Nom</label>
                  <input id="name" type="text" class="form-control" name="nom" placeholder="Votre nom"required>
                </div>
                <div class="col">
                  <label for="lastname">Prénom</label>
                  <input id="lastname" type="text" class="form-control" name="prenom" placeholder="Votre prénom"required>
                </div>
                  <div class="col">
                  <label for="age">Age</label>
                  <input id="age" class="form-control" type="number" name="age" placeholder="Votre age" required>
                </div>
              </div>
            <div>
            <button class="btn btn-success" type="submit" name="envoie">Envoyer</button>
            <button class="btn btn-danger"type="reset">Effacer</button>
            </div>
          </form>
  </body>
</html>
<?php 
//echo "toto 2";
