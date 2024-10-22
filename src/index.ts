type Product = [number, string, number, number];

class ProductNotFoundError extends Error {
    constructor(id: number) {
        super(`Producto con ID ${id} no encontrado.`);
        this.name = "ProductNotFoundError";
    }
}

const inventory: Product[] = [
    [1, "Chocolate con Leche", 1.99, 50],
    [2, "Chocolate Amargo", 2.49, 30],
    [3, "Bombones de Frutas", 3.99, 0],
    [4, "Chocolate Blanco", 2.99, 20],
    [5, "Bombones de Menta", 4.29, 15],
    [6, "Chocolate con Almendras", 2.89, 25],
    [7, "Figuras de Chocolate - Conejo", 5.99, 10],
    [8, "Figuras de Chocolate - Santa", 5.99, 5],
    [9, "Chocolate Sin Azúcar", 3.49, 40],
    [10, "Bombones de Café", 4.59, 20],
    [11, "Chocolate con Frutos Rojos", 3.99, 30],
    [12, "Chocolate con Naranja", 2.79, 22],
    [13, "Bombones de Licor", 5.49, 18],
    [14, "Chocolate con Cacao Nibs", 3.99, 28],
    [15, "Chocolate al 70% Cacao", 2.99, 35],
    [16, "Bombones de Caramelo", 4.99, 12],
    [17, "Chocolate con Coco", 2.49, 27],
    [18, "Figuras de Chocolate - Corazón", 6.49, 8],
    [19, "Chocolate con Pasas", 3.49, 21],
    [20, "Bombones de Avellana", 5.29, 14],
    [21, "Chocolate con Cereza", 2.79, 30],
    [22, "Chocolate con Café", 3.99, 33],
    [23, "Figuras de Chocolate - Estrella", 5.99, 16],
    [24, "Chocolate con Miel", 3.49, 18],
    [25, "Chocolate a la Menta", 2.59, 26],
    [26, "Bombones de Yogur", 4.39, 11],
    [27, "Chocolate con Pistacho", 3.89, 20],
];

const searchButton = document.getElementById("searchButton") as HTMLButtonElement;
const viewAllButton = document.getElementById("viewAllButton") as HTMLButtonElement;
const resultBox = document.getElementById("result") as HTMLDivElement;
const allProductsBox = document.getElementById("allProducts") as HTMLDivElement;
const productList = document.getElementById("productList") as HTMLUListElement;

let allProductsVisible = false;

searchButton.addEventListener("click", () => {
    const productIdInput = document.getElementById("productId") as HTMLInputElement;
    const productId = parseInt(productIdInput.value);
    
    const product = inventory.find(p => p[0] === productId);
    
    const resultList = document.getElementById("resultList") as HTMLUListElement;
    resultList.innerHTML = "";

    if (product) {

        const resultContainer = document.createElement("div");
        resultContainer.classList.add("result-item");

        const idItem = document.createElement("div");
        idItem.textContent = `ID: ${product[0]}`;
        
        const nameItem = document.createElement("div");
        nameItem.textContent = `Nombre: ${product[1]}`;
        
        const priceItem = document.createElement("div");
        priceItem.textContent = `Precio: $${product[2].toFixed(2)}`;
        
        const quantityItem = document.createElement("div");
        quantityItem.textContent = `Cantidad: ${product[3]}`;


        resultContainer.appendChild(idItem);
        resultContainer.appendChild(nameItem);
        resultContainer.appendChild(priceItem);
        resultContainer.appendChild(quantityItem);


        resultList.appendChild(resultContainer);

        resultBox.classList.remove("hidden");
    } else {
        resultList.innerHTML = "";
        const errorItem = document.createElement("li");
        errorItem.textContent = `Producto con ID ${productId} no encontrado.`;
        resultList.appendChild(errorItem);
        resultBox.classList.remove("hidden");
    }
});

viewAllButton.addEventListener("click", () => {
    productList.innerHTML = "";
    inventory.forEach(product => {
        const listItem = document.createElement("li");
        listItem.textContent = `ID: ${product[0]}, Nombre: ${product[1]}, Precio: $${product[2].toFixed(2)}, Cantidad: ${product[3]}`;
        productList.appendChild(listItem);
    });
    
    allProductsVisible = !allProductsVisible;

    if (allProductsVisible) {
        allProductsBox.classList.remove("hidden");
        viewAllButton.textContent = "Ocultar Productos";
    } else {
        allProductsBox.classList.add("hidden");
        viewAllButton.textContent = "Ver Todos los Productos";
    }
});
