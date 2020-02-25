<?php 
    if(empty( $_POST["email"]) || empty($_POST["motdepasse"])){
        header ('Location: ../index.php');
        exit();
}
elseif(isset($_POST['connexion'])){ 
    echo "bonjour, ton email est "; echo $_POST["email"]; echo " est ton mot de passe est : ";
    echo $_POST["motdepasse"]; 
} 
