function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var ProductNotFoundError = /*#__PURE__*/ function(Error1) {
    "use strict";
    _inherits(ProductNotFoundError, Error1);
    function ProductNotFoundError(id) {
        _class_call_check(this, ProductNotFoundError);
        var _this;
        _this = _call_super(this, ProductNotFoundError, [
            "Producto con ID ".concat(id, " no encontrado.")
        ]);
        _this.name = "ProductNotFoundError";
        return _this;
    }
    return ProductNotFoundError;
}(_wrap_native_super(Error));
var inventory = [
    [
        1,
        "Chocolate con Leche",
        1.99,
        50
    ],
    [
        2,
        "Chocolate Amargo",
        2.49,
        30
    ],
    [
        3,
        "Bombones de Frutas",
        3.99,
        0
    ],
    [
        4,
        "Chocolate Blanco",
        2.99,
        20
    ],
    [
        5,
        "Bombones de Menta",
        4.29,
        15
    ],
    [
        6,
        "Chocolate con Almendras",
        2.89,
        25
    ],
    [
        7,
        "Figuras de Chocolate - Conejo",
        5.99,
        10
    ],
    [
        8,
        "Figuras de Chocolate - Santa",
        5.99,
        5
    ],
    [
        9,
        "Chocolate Sin Azúcar",
        3.49,
        40
    ],
    [
        10,
        "Bombones de Café",
        4.59,
        20
    ],
    [
        11,
        "Chocolate con Frutos Rojos",
        3.99,
        30
    ],
    [
        12,
        "Chocolate con Naranja",
        2.79,
        22
    ],
    [
        13,
        "Bombones de Licor",
        5.49,
        18
    ],
    [
        14,
        "Chocolate con Cacao Nibs",
        3.99,
        28
    ],
    [
        15,
        "Chocolate al 70% Cacao",
        2.99,
        35
    ],
    [
        16,
        "Bombones de Caramelo",
        4.99,
        12
    ],
    [
        17,
        "Chocolate con Coco",
        2.49,
        27
    ],
    [
        18,
        "Figuras de Chocolate - Corazón",
        6.49,
        8
    ],
    [
        19,
        "Chocolate con Pasas",
        3.49,
        21
    ],
    [
        20,
        "Bombones de Avellana",
        5.29,
        14
    ],
    [
        21,
        "Chocolate con Cereza",
        2.79,
        30
    ],
    [
        22,
        "Chocolate con Café",
        3.99,
        33
    ],
    [
        23,
        "Figuras de Chocolate - Estrella",
        5.99,
        16
    ],
    [
        24,
        "Chocolate con Miel",
        3.49,
        18
    ],
    [
        25,
        "Chocolate a la Menta",
        2.59,
        26
    ],
    [
        26,
        "Bombones de Yogur",
        4.39,
        11
    ],
    [
        27,
        "Chocolate con Pistacho",
        3.89,
        20
    ]
];
var searchButton = document.getElementById("searchButton");
var viewAllButton = document.getElementById("viewAllButton");
var resultList = document.getElementById("resultList");
var resultBox = document.getElementById("result");
var allProductsBox = document.getElementById("allProducts");
var productList = document.getElementById("productList");
var editForm = document.getElementById("editForm");
var editName = document.getElementById("editName");
var editPrice = document.getElementById("editPrice");
var editQuantity = document.getElementById("editQuantity");
var saveButton = document.getElementById("saveButton");
var currentProductId = null;
function displayProduct(product) {
    resultList.innerHTML = "";
    var li = document.createElement("li");
    li.classList.add("result-item");
    li.innerHTML = "\n        <p><strong>ID:</strong> ".concat(product[0], "</p>\n        <p><strong>Nombre:</strong> ").concat(product[1], "</p>\n        <p><strong>Precio:</strong> $").concat(product[2], "</p>\n        <p><strong>Cantidad:</strong> ").concat(product[3], "</p>\n    ");
    resultList.appendChild(li);
    resultBox.classList.remove("hidden");
    // Mostrar formulario de edición
    editForm.classList.remove("hidden");
    currentProductId = product[0];
    editName.value = product[1];
    editPrice.value = product[2].toString();
    editQuantity.value = product[3].toString();
}
function displayAllProducts(products) {
    productList.innerHTML = "";
    products.forEach(function(product) {
        var li = document.createElement("li");
        li.classList.add("result-item");
        li.innerHTML = "\n            <p><strong>ID:</strong> ".concat(product[0], "</p>\n            <p><strong>Nombre:</strong> ").concat(product[1], "</p>\n            <p><strong>Precio:</strong> $").concat(product[2], "</p>\n            <p><strong>Cantidad:</strong> ").concat(product[3], "</p>\n        ");
        productList.appendChild(li);
    });
    allProductsBox.classList.remove("hidden");
}
searchButton.addEventListener("click", function() {
    var productId = document.getElementById("productId").valueAsNumber;
    try {
        var product = inventory.find(function(p) {
            return p[0] === productId;
        });
        if (!product) {
            throw new ProductNotFoundError(productId);
        }
        displayProduct(product);
    } catch (error) {
        alert(error.message);
    }
});
viewAllButton.addEventListener("click", function() {
    displayAllProducts(inventory);
});
saveButton.addEventListener("click", function() {
    if (currentProductId === null) return;
    var updatedName = editName.value;
    var updatedPrice = parseFloat(editPrice.value);
    var updatedQuantity = parseInt(editQuantity.value);
    var productIndex = inventory.findIndex(function(p) {
        return p[0] === currentProductId;
    });
    if (productIndex !== -1) {
        inventory[productIndex] = [
            currentProductId,
            updatedName,
            updatedPrice,
            updatedQuantity
        ];
        alert("Producto actualizado correctamente.");
        displayProduct(inventory[productIndex]);
    }
});
