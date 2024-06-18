document.getElementById('listar').addEventListener('click', function() {
    function recorrerArbol(node) {
        // Recorrer los nodos hijos
        node.childNodes.forEach(function(child) {
            if (child.nodeType === Node.ELEMENT_NODE) {
                // Alert con el contenido del nodo
                alert(child.textContent.trim());
                // Cambiar el color del texto a gris
                child.classList.add('highlighted');
                // Recursivamente recorrer el árbol
                recorrerArbol(child);
            }
        });
    }
    
    // Obtener el elemento del menú
    var menu = document.getElementById('menu');
    // Recorrer el árbol a partir del nodo del menú
    recorrerArbol(menu);
});