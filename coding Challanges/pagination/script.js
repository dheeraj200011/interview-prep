document.addEventListener("DOMContentLoaded", () => {
  const app = document.querySelector(".app");
  let products = [];
  let page = 1;

  const fetchProducts = async () => {
    try {
      let res = await fetch("https://dummyjson.com/products?limit=100");
      let data = await res.json();

      if (data && data.products) {
        products = data.products;
        render();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const render = () => {
    const productContainer = document.createElement("div");
    productContainer.classList.add("products");

    const pagination = document.createElement("div");
    pagination.classList.add("pagination");

    if (products.length > 0) {
      products.slice(page * 10 - 10, page * 10).forEach((prod) => {
        const productElem = document.createElement("div");
        productElem.classList.add("products_single");
        productElem.innerHTML = `
        <img src= ${prod.thumbnail} alt= ${prod.title}/>
        <span> ${prod.title} </span>
        `;

        productContainer.appendChild(productElem);
      });

      // OPREV BUTTON
      if (page > 1) {
        const prev = createPagination("<", () => {
          selectedPageHandler(page - 1);
        });

        pagination.appendChild(prev);
      }

      // PAGE NUMBERS
      for (let i = 0; i < products.length / 10; i++) {
        const pageButton = createPagination(
          i + 1,
          () => {
            selectedPageHandler(i + 1);
          },
          page === i + 1,
        );

        pagination.appendChild(pageButton);
      }

      // NEXT BUTTON
      if (page < products.length / 10) {
        const nextButton = createPagination(">", () => {
          selectedPageHandler(page + 1);
        });

        pagination.appendChild(nextButton);
      }
    }

    app.innerHTML = ""; // ye jab page change hoga click par to pagibntion ke according page show hoag
    app.appendChild(productContainer);
    app.appendChild(pagination);
  };

  const createPagination = (text, clickHandler, isSelected = false) => {
    const button = document.createElement("button");
    button.textContent = text;

    button.addEventListener("click", clickHandler);
    if (isSelected) {
      button.classList.add("pagination_selected");
    }
    return button;
  };
  const selectedPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= products.length / 10 &&
      selectedPage !== page
    ) {
      page = selectedPage;
      render();
    }
  };

  fetchProducts();
});
