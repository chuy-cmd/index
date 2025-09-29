function operar(op) {
      const n1 = parseFloat(document.getElementById('numero1').value);
      const n2 = parseFloat(document.getElementById('numero2').value);
      let res;

      if (isNaN(n1) || isNaN(n2)) {
        document.getElementById('resultado').value = 'Error: faltan números';
        return;
      }

      switch (op) {
        case '+': res = n1 + n2; break;
        case '-': res = n1 - n2; break;
        case '*': res = n1 * n2; break;
        case '/':
          if (n2 === 0) {
            res = 'Error: división entre 0';
          } else {
            res = n1 / n2;
          }
          break;
      }
      document.getElementById('resultado').value = res;
    }

    function limpiar() {
      document.getElementById('numero1').value = '';
      document.getElementById('numero2').value = '';
      document.getElementById('resultado').value = '';
    }