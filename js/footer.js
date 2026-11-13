document.addEventListener("DOMContentLoaded", () => {
    const footerContainer = document.getElementById("footer-container");
    
    if (footerContainer) {
        // Lee la ruta especificada en el atributo data-include
        const url = footerContainer.getAttribute("data-include");
        
        fetch(url)
            .then(response => {
                if (!response.ok) throw new Error(`No se pudo cargar: ${url}`);
                return response.text();
            })
            .then(data => {
                footerContainer.innerHTML = data;
            })
            .catch(error => console.error("Error al cargar el footer:", error));
    }
});
