<?php header('Access-Control-Allow-Origin: *');

session_start();

require_once 'Parser.php';

use Reensq\plugin\core\Parser;

if (isset($_POST['form'])) {

	$err = [];

	// Преобразуем BB коды
	$content = Parser::register($_POST['content']);

	if (isset($content)) {
		$output = $content;
	} else {
		$output = $content;
		$err[] = 'Ошибка';
	}

}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Test HTMLREditor</title>
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.10.1/css/all.css" />
	<script src="https://use.fontawesome.com/d96f9c8bf6.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	<script src="./example/highlight.pack.js"></script>
	<link rel="stylesheet" href="./example/styles/atom-one-dark.css">
	<link rel="stylesheet" href="./example/main.css">
	<link href="https://fonts.googleapis.com/css?family=Roboto:400,500,500i,700,700i,900&display=swap" rel="stylesheet">
</head>
<body>

	<form enctype="multipart/form-data" action="" method="POST" >
		<div id="editor">

		</div>

		<input type="submit" value="send" name="form">
	</form>

	<div id="output">
		<?=$output?>
	</div>

	<script src="../build/script/htmlreditor.bundle.js"></script>


	<!-- Editor start -->
	<script type="module">

        'use strict';

		(async function () {

            document.addEventListener('DOMContentLoaded', (event) => {
                document.querySelectorAll('pre code').forEach((block) => {
                    hljs.highlightBlock(block);
                });
            });

            await HTMLREditor
				.register('#editor', 'dark')
				.catch(_err => console.error(_err))
				.finally((data = 'finally') => console.log(data))

        })(window, document, window.jQuery);

	</script>
</body>
</html>
