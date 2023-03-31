describe("Pizza order form", function() {
  
  // Test case for selecting a pizza size
  it("should select a pizza size", function() {
    var select = document.getElementById("tamaño");
    select.value = "mediana";
    expect(select.value).toBe("mediana");
  });

  // Test case for selecting pizza ingredients
  it("should select pizza ingredients", function() {
    var checkbox1 = document.getElementsByName("ingredientes")[0];
    var checkbox2 = document.getElementsByName("ingredientes")[1];
    checkbox1.checked = true;
    checkbox2.checked = true;
    expect(checkbox1.checked && checkbox2.checked).toBe(true);
  });

  // Test case for selecting a pizza quantity
  it("should select a pizza quantity", function() {
    var input = document.getElementById("cantidad");
    input.value = 3;
    expect(input.value).toBe("3");
  });

  // Test case for selecting a pizza sauce
  it("should select a pizza sauce", function() {
    var select = document.getElementById("salsa");
    select.value = "blanca";
    expect(select.value).toBe("blanca");
  });

  // Test case for selecting pizza extras
  it("should select pizza extras", function() {
    var checkbox1 = document.getElementsByName("extras")[0];
    var checkbox2 = document.getElementsByName("extras")[1];
    checkbox1.checked = true;
    checkbox2.checked = true;
    expect(checkbox1.checked && checkbox2.checked).toBe(true);
  });

  // Test case for adding an item to the cart
  it("should add an item to the cart", function() {
    agregarAlCarrito();
    var carrito = document.getElementById("carrito");
    expect(carrito.childNodes.length).toBe(1);
  });
  
});
