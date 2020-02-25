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
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- Framework -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Questrial&display=swap">
    <link rel="stylesheet" href="/component/css/mesCssPerso.css">
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <!-- Mon css -->
    <link rel="stylesheet" href="./components/css/style.css">
    <!-- Titre de l'onglet -->
    <title>Accueil</title>
  </head>
  <body>
    <!-- Navigation du site  -->
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
  <!-- Titre de la page -->
    <h1><strong>Accueil</strong></h1>
    <!-- Container du site -->
    <div class="container">
    <!-- Formulaire d'inscription -->
    <form method="POST" action="./auth/authentification.php " class="form-signin col-3 mr-auto ml-auto">
    <h2 class="h3 mb-3 font-weight-normal text-center">Inscription</h2>
    <figure class="text-center">
    <img class="mb-4" src="./img/avatar.jpg" alt="logo de Trunky" width="72" height="72">
</figure>
  <div class="col-">
    <label for="inputEmail" class="sr-only">adresse Email</label>
    <input type="email" id="inputEmail" class="form-control" name="email" placeholder="Adresse email" autofocus="">
  </div>
  <div class="col-">
    <label for="inputPassword" class="sr-only">Mot de passe</label>
    <input type="password" id="inputPassword" class="form-control" name="motdepasse" placeholder="Mot de passe">
  </div>
  <div class="checkbox mb-3">
    <label>
      <input type="checkbox" value="remember-me"> Se souvenir de moi
    </label>
  </div>
  <div class="bouttonconnexion">
    <button class="btn btn-lg btn-primary btn-block col-" type="submit" name="connexion">Connexion</button>
  </div>
</form>
     <!-- Formulaire -->  
     <form class="formu2" method="POST" action="./page2.php?texteDuBoutton=retour">
     <h2 class="h3 mb-3 font-weight-normal">Formulaire</h2>
              <div class="row">
                <div class="col-4">
                  <label for="name">Nom</label>
                  <input id="name" type="text" class="form-control" name="nom" placeholder="Votre nom"required>
                </div>
                <div class="col-4">
                  <label for="lastname">Prénom</label>
                  <input id="lastname" type="text" class="form-control" name="prenom" placeholder="Votre prénom"required>
                </div>
                  <div class="col-4">
                  <label for="age">Age</label>
                  <input id="age" class="form-control" type="number" name="age" placeholder="Votre age" required>
                </div>
              </div>
            <div class="btn-form2">
            <button class="btn btn-success" type="submit" name="envoie">Envoyer</button>
            <button class="btn btn-danger"type="reset">Effacer</button>
            </div>
          </form>
          </div>
          <!-- Script -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  </body>
</html>
<?php 
//echo "toto 2";
