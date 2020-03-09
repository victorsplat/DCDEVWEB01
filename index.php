<?php include('config.php') ?>
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="<?php echo INCLUDE_PATH; ?>css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="<?php echo INCLUDE_PATH; ?>css/style.css">
    <title>Projeto 01 DC</title>
</head>

<body>

    <base base="<?php echo INCLUDE_PATH; ?>">

    <!-- Create a target to manipulate scrolls. -->
    <?php
    $url = isset($_GET['url']) ? $_GET['url'] : 'home';
    switch ($url) {
        case 'sobre':
            echo '<target target="sobre" />';
            break;
        case 'servicos':
            echo '<target target="servicos" />';
            break;
    }
    ?>

    <!--Invoke the header to the page -->
    <?php require('pages/header.php');  ?>

    <!--Dinamically create the page content or redrirect to 404 page. -->
    <div class="main-content">
        <?php
        if (file_exists('pages/' . $url . '.php')) {
            include('pages/' . $url . '.php');
        } else {
            if ($url != 'servicos' && $url != 'sobre') {
                $erro404 = true;
                include('pages/404.php');
            } else {
                include('pages/home.php');
            }
        }
        ?>
    </div>

    <!-- Invoke the footer to the page -->
    <?php require('pages/footer.php'); ?>

    <script src="<?php echo INCLUDE_PATH; ?>js/jquery.js"></script>
    <script src="<?php echo INCLUDE_PATH; ?>js/enviroment.js"></script>
    <script src='https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDHPNQxozOzQSZ-djvWGOBUsHkBUoT_qH4'></script>
    <script src="<?php echo INCLUDE_PATH; ?>js/map.js"></script>
    <script src="<?php echo INCLUDE_PATH; ?>js/scripts.js"></script>
    <script src="<?php echo INCLUDE_PATH; ?>js/slider.js"></script>

</body>

</html>