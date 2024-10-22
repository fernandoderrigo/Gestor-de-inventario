type Product = [number, string, number, number];

class ProductNotFoundError extends Error {
    constructor(id: number) {
        super(`Producto con ID ${id} no encontrado.`);
        this.name = "ProductNotFoundError";
    }
}

class OutOfStockError extends Error {
    constructor(name: string) {
        super(`El producto "${name}" está agotado.`);
        this.name = "OutOfStockError";
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
const resultList = document.getElementById("resultList") as HTMLUListElement;
const resultBox = document.getElementById("result") as HTMLDivElement;
const allProductsBox = document.getElementById("allProducts") as HTMLDivElement;
const productList = document.getElementById("productList") as HTMLUListElement;

const editForm = document.getElementById("editForm") as HTMLDivElement;
const editName = document.getElementById("editName") as HTMLInputElement;
const editPrice = document.getElementById("editPrice") as HTMLInputElement;
const editQuantity = document.getElementById("editQuantity") as HTMLInputElement;
const saveButton = document.getElementById("saveButton") as HTMLButtonElement;

let currentProductId: number | null = null;

function findProduct(inventory: Product[], id: number): Product {
    const product = inventory.find(p => p[0] === id);
    if (!product) {
        throw new ProductNotFoundError(id);
    }
    if (product[3] === 0) {
        throw new OutOfStockError(product[1]);
    }
    return product;
}

function displayProduct(product: Product): void {
    resultList.innerHTML = "";
    const li = document.createElement("li");
    li.classList.add("result-item");
    li.innerHTML = `
        <p><strong>ID:</strong> ${product[0]}</p>
        <p><strong>Nombre:</strong> ${product[1]}</p>
        <p><strong>Precio:</strong> $${product[2].toFixed(2)}</p>
        <p><strong>Cantidad:</strong> ${product[3]}</p>
    `;
    resultList.appendChild(li);
    resultBox.classList.remove("hidden");

    // Mostrar formulario de edición
    editForm.classList.remove("hidden");
    currentProductId = product[0];
    editName.value = product[1];
    editPrice.value = product[2].toString();
    editQuantity.value = product[3].toString();
}

function displayAllProducts(products: Product[]): void {
    productList.innerHTML = "";
    products.forEach((product) => {
        const li = document.createElement("li");
        li.classList.add("result-item");
        li.innerHTML = `
            <p><strong>ID:</strong> ${product[0]}</p>
            <p><strong>Nombre:</strong> ${product[1]}</p>
            <p><strong>Precio:</strong> $${product[2].toFixed(2)}</p>
            <p><strong>Cantidad:</strong> ${product[3]}</p>
        `;
        productList.appendChild(li);
    });
    allProductsBox.classList.remove("hidden");
}

// Registrar operaciones de búsqueda
function logSearchOperation(success: boolean, productId: number): void {
    const logMessage = success 
        ? `Búsqueda exitosa para el producto ID: ${productId}`
        : `Búsqueda fallida para el producto ID: ${productId}`;
    console.log(logMessage);
}

searchButton.addEventListener("click", () => {
    const productId = (document.getElementById("productId") as HTMLInputElement).valueAsNumber;
    try {
        const product = findProduct(inventory, productId);
        displayProduct(product);
        logSearchOperation(true, productId);
    } catch (error) {
        alert(error.message);
        logSearchOperation(false, productId);
    }
});

viewAllButton.addEventListener("click", () => {
    displayAllProducts(inventory);
});

saveButton.addEventListener("click", () => {
    if (currentProductId === null) return;

    const updatedName = editName.value;
    const updatedPrice = parseFloat(editPrice.value);
    const updatedQuantity = parseInt(editQuantity.value);

    const productIndex = inventory.findIndex(p => p[0] === currentProductId);
    if (productIndex !== -1) {
        inventory[productIndex] = [currentProductId, updatedName, updatedPrice, updatedQuantity];
        alert("Producto actualizado correctamente.");
        displayProduct(inventory[productIndex]);
    }
});
