const API = 'https://api.sampleapis.com/wines/reds';
        let vinosData = [];
        let ordenAscendente = true;  // alternar entre ascendente y descendente

        // Obtener los vinos al cargar la página
        fetch(API)
        .then(response => response.ok ? response.json() : Promise.reject(`Error ${response.status}`))
        .then(data => {
            vinosData = data;
            mostrarTabla(vinosData);
        })
        .catch(error => alert(`Ocurrió un error: ${error}`));

        function mostrarTabla(datos) {
            const tbody = document.getElementById('vinos-tbody');
            tbody.innerHTML = '';  // Limpiar antes de renderizar

            datos.forEach(vino => {
                const fila = document.createElement('tr');
                fila.innerHTML = `
                    <td>${vino.wine}</td>
                    <td>${vino.winery}</td>
                    <td>${vino.location}</td>
                    <td><img src="${vino.image}" alt="Botella de ${vino.wine}"></td>
                `;
                tbody.appendChild(fila);
            });
        }

        function ordenarTabla(campo) {
            vinosData.sort((a, b) => {
                let valorA = a[campo]?.toLowerCase() || '';
                let valorB = b[campo]?.toLowerCase() || '';

                if (valorA < valorB) return ordenAscendente ? -1 : 1;
                if (valorA > valorB) return ordenAscendente ? 1 : -1;
                return 0;
            });

            ordenAscendente = !ordenAscendente;  // Cambiar el sentido de la ordenación
            mostrarTabla(vinosData);
        }