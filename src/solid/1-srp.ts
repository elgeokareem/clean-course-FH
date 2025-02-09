(() => {
  interface Product {
    id: number;
    name: string;
  }

  class ProductService {
    getProduct(id: number) {
      console.log("Producto: ", { id, name: "Oled Tv" });
    }

    saveProduct(product: Product) {
      console.log("Producto guardado: ", product);
    }
  }

  class Mailer {
    private masterEmail: string = "ayylmao@gg.com";

    sendEmail(emailList: string[], template: "to-clients" | "to-admin") {
      console.log("Enviando correo a los clientes", template);
    }
  }

  // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
  // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
  class ProductBloc {
    private productService: ProductService;
    private mailer: Mailer;

    constructor(productService: ProductService, mailer: Mailer) {
      this.productService = productService;
      this.mailer = mailer;
    }

    loadProduct(id: number) {
      // Realiza un proceso para obtener el producto y retornarlo
      this.productService.getProduct(id);
    }

    saveProduct(product: Product) {
      // Realiza una petición para salvar en base de datos
      console.log("Guardando en base de datos", product);
      this.productService.saveProduct(product);
    }

    notifyClients() {
      console.log("Enviando correo a los clientes");
    }
  }

  class CardBloc {
    private items: Object[] = [];
    addToCart(productId: number) {
      // Agregar al carrito de compras
      console.log("Agregando al carrito ", productId);
    }
  }

  const productService = new ProductService();
  const mailer = new Mailer();

  const productBloc = new ProductBloc(productService, mailer);
  const cardBloc = new CardBloc();

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: "OLED TV" });
  productBloc.notifyClients();
  cardBloc.addToCart(10);
})();
