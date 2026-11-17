document.addEventListener("DOMContentLoaded", () => {
    const headerContainer = document.getElementById("header-container");

    if (headerContainer) {
        const url = headerContainer.getAttribute("data-include");

        fetch(url)
            .then(response => {
                if (!response.ok) throw new Error(`No se pudo cargar: ${url}`);
                return response.text();
            })
            .then(data => {
                headerContainer.innerHTML = data;
                marcarLinkActivo(headerContainer);
            })
            .catch(error => console.error("Error al cargar el header:", error));
    }
});

function marcarLinkActivo(contenedor) {
    const paginaActual = location.pathname.split("/").pop() || "index.html";

    contenedor.querySelectorAll(".nav-link").forEach(link => {
        const destino = link.getAttribute("href").split("/").pop();

        if (destino === paginaActual) {
            link.classList.add("activo");
            link.setAttribute("aria-current", "page");
        }
    });
}
