        function cuadrado(){
            let numero = document.getElementById("numero").value;
            if(isNaN(numero) || numero === ""){
                alert("Por favor ingresa un número válido.");
                document.getElementById("numero").value = "";
                return;
            }
            let resultado = numero * numero;
            document.getElementById("resultado").value = resultado;
        }