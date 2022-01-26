<!DOCTYPE html>
<html>
<head>        
    <title>Sähköinen keruulista projekti</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" href="styles.css">
    <script src="functions.js"></script>
    </head>
    <body>
        <script>

        </script>
        <header>      
        </header>
        <div id="main">
                <div class="hakualue">
                    <h1>Hae tilausta</h1>
                    <br>
                    <div>
                        <input id="input" placeholder="Aloita haku..." type="text">
                    </div>                           
                </div>
            <div class="maindiv">                
                        <table class="greenTable">
                          <tr>
                              <th style="width: 20%;">Tilausnumero</th>
                              <th style="width: 20%;">Asiakasnumero</th>
                              <th style="width: 20%;">Asiakas</th>
                              <th style="width: 20%;">Myyjä</th>
                              <th style="width: 20%;">Hinta euroina</th>
                          </tr>                     
                          <tbody id="tilaukset">
                              <tr hidden>
                                  <th hidden></th>
                              </tr>                             
                          </tbody>
                      </table>
            </div>    
        </div>
    </body>
</html>