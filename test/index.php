<?php header('Access-Control-Allow-Origin: *');

session_start();

require_once 'Parser.php';

use \Engine\core\Parser;

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
    <title>Test JsEditor</title>
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.10.1/css/all.css" />
	<script src="https://use.fontawesome.com/d96f9c8bf6.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	<script src="./test/highlight.pack.js"></script>
	<link rel="stylesheet" href="./test/styles/atom-one-dark.css">
	<link rel="stylesheet" href="./test/main.css">
	<link href="https://fonts.googleapis.com/css?family=Roboto:400,500,500i,700,700i,900&display=swap" rel="stylesheet">
</head>
<body>

	<form enctype="multipart/form-data" action="" method="post" >
		<div id="editor">

		</div>

		<input type="submit" value="send" name="form">
	</form>

	<div id="output">
		<?=$output?>
	</div>

	<!-- Editor start -->
	<script type="module">

        document.addEventListener('DOMContentLoaded', (event) => {
            document.querySelectorAll('pre code').forEach((block) => {
                hljs.highlightBlock(block);
            });
        });

		import HTMLREditor from '../src/core/HTMLREditor.js';
		import namespace from '../src/core/logger.js';

		const debug = namespace('HTMLREditor:register');

		namespace.editor = {
            /**
			 *
             * @param {String} id
             * @returns {Promise<void>}
             */
		    create: async (id) => {
                return await HTMLREditor
                    .register(id)
                    .then(editor => console.log(editor))
                    .catch(err => console.error(err))
			}
		};

       	namespace.editor.create('#editor');

	</script>
</body>
</html>
