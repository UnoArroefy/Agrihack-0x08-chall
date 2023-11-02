<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f0f0f0; 
        }

        .container {
            background-color: #ffffff; 
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        form {
            width: 100%;
            max-width: 400px;
        }

        input[type="text"] {
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            margin-right: 10px;
        }

        input[type="submit"] {
            padding: 10px 20px;
            background-color: #007bff; 
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        input[type="submit"]:hover {
            background-color: #0056b3; 
        }

        
        .container {
            font-family: 'Arial', sans-serif; 
        }

        label {
            font-weight: bold; 
            color: #333; 
        }
    </style>
</head>
<body>
    <div class="container">
        <form action="" method="POST">
            <label for="flag">Flag : </label>
            <input type="text" name="flag" id="flag">
            <input type="submit" name="submit">
        </form>
    </div>
</body>
</html>


<?php

$flag = getenv("FLAG_ENV");
if(isset($_POST['flag']))
{
	for($i = 0; $i < strlen($flag); $i++)
	{
		if($_POST['flag'][$i] == $flag[$i]){
            if ($_POST['flag'] === $flag)
                die("thats right");
            sleep(1);
            error_reporting(E_ERROR | E_PARSE);
        }
		else{
            die("Wrong!");
        }
			
	}
}
?>