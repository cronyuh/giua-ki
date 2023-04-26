let products = [
    {
      name: "Áo thun nam",
      price: 250000,
      description: "Áo thun nam phong cách trẻ trung và năng động",
    },
    {
      name: "Áo khoác nữ",
      price: 800000,
      description: "Áo khoác nữ dành cho những ngày đông lạnh",
    },
    {
      name: "Quần jean nam",
      price: 500000,
      description: "Quần jean nam phối được với nhiều kiểu trang phục khác nhau",
    },
    {
      name: "Đầm hoa nữ",
      price: 650000,
      description: "Đầm hoa nữ dễ thương và duyên dáng",
    },
  ];
  
  // Lặp qua mảng sản phẩm và in ra trang HTML
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
  
    // Tạo một phần tử HTML để chứa thông tin sản phẩm
    const productElement = document.createElement("div");
    productElement.classList.add("product");
  
    // Thêm thông tin sản phẩm vào phần tử HTML
    productElement.innerHTML = `
      <h2>${product.name}</h2>
      <p class="price">giá: ${product.price.toLocaleString()} đ</p>
      <p>${product.description}</p>
    `;
  
    // Thêm phần tử sản phẩm vào trang HTML
    document.body.appendChild(productElement);
  }
  for (let i = 0; i < products.length; i++) {
    console.log("Sản phẩm " + (i + 1) + ": " + products[i].name);
    console.log("Giá: " + products[i].price);
    console.log("Mô tả: " + products[i].description);
    console.log("------------");
  }