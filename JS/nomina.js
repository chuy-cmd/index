 // Aquí va tu código JavaScript
    function calcular() {
      // Validar ID: solo letras y números
      const id = document.getElementById('empleado').value.trim();
      if (!/^[a-zA-Z0-9]+$/.test(id)) {
        alert('El ID solo debe contener letras y números.');
        document.getElementById('empleado').focus();
        return;
      }

      // Validar y formatear Nombre: primera letra de cada palabra en mayúscula
      let nombre = document.getElementById('nombre').value.trim();
      if (nombre.length === 0) {
        alert('El nombre no puede estar vacío.');
        document.getElementById('nombre').focus();
        return;
      }
      nombre = nombre
        .toLowerCase()
        .replace(/(?:^|\s)\S/g, l => l.toUpperCase());
      document.getElementById('nombre').value = nombre;

      // Obtener valores numéricos
      const horas = parseFloat(document.getElementById('horas').value) || 0;
      const costo = parseFloat(document.getElementById('costo').value) || 0;

      // Calcular horas normales y extra
      let h_norm = horas > 40 ? 40 : horas;
      let h_extra = horas > 40 ? horas - 40 : 0;

      // Calcular subtotal
      let subtotal = (h_norm * costo) + (h_extra * costo * 2);

      // Calcular ISPT (10%)
      let ispt = subtotal * 0.10;

      // Calcular monto neto
      let monto = subtotal - ispt;

      // Mostrar resultados
      document.getElementById('h_norm').value = h_norm;
      document.getElementById('h_extra').value = h_extra;
      document.getElementById('sub_t').value = subtotal.toFixed(2);
      document.getElementById('ispt').value = ispt.toFixed(2);
      document.getElementById('monto').value = monto.toFixed(2);
    }

    function limpiar() {
      document.getElementById('empleado').value = '';
      document.getElementById('nombre').value = '';
      document.getElementById('horas').value = '';
      document.getElementById('costo').value = '';
      document.getElementById('h_norm').value = '';
      document.getElementById('h_extra').value = '';
      document.getElementById('sub_t').value = '';
      document.getElementById('ispt').value = '';
      document.getElementById('monto').value = '';
    }