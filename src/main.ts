import "./scss/styles.scss";
import { ProductsModel } from "./components/Models/ProductsModel";
import { BasketModel } from "./components/Models/BasketModel";
import { BuyerModel } from "./components/Models/BuyerModel";
import { apiProducts } from "./utils/data";
import { Api } from "./components/base/Api";
import { WebLarekApi } from "./components/Communication/WebLarekApi.ts";
import { API_URL } from "./utils/constants";

//Проверяем каталог товаров
const productsModel = new ProductsModel();
productsModel.setItems(apiProducts.items);
console.log("Массив товаров из каталога:", productsModel.getItems());

const firstProduct = productsModel.getItems()[0];
console.log("Первый товар из каталога:", firstProduct);

console.log("Получение товара по id:", productsModel.getItem(firstProduct.id));

productsModel.setPreview(firstProduct);

console.log("Товар для подробного отображения:", productsModel.getPreview());

//Проверяем корзину
const basketModel = new BasketModel();
basketModel.addItem(firstProduct);

console.log("Товары в корзине после добавления:", basketModel.getItems());
console.log("Количество товаров в корзине:", basketModel.getCount());
console.log("Стоимость товаров в корзине:", basketModel.getTotal());
console.log("Товар есть в корзине:", basketModel.contains(firstProduct.id));

basketModel.removeItem(firstProduct);
console.log("Товары в корзине после удаления:", [...basketModel.getItems()]);

basketModel.addItem(firstProduct);
basketModel.clear();
console.log("Товары в корзине после очистки:", basketModel.getItems());

//Проверяем данные пользователя
const buyerModel = new BuyerModel();

console.log("Данные покупателя до заполнения:", buyerModel.getData());
console.log("Ошибки валидации пустой формы:", buyerModel.validate());

buyerModel.setPayment("card");
buyerModel.setAddress("Москва, улица Пушкина, дом 1");
buyerModel.setPhone("+79998887766");
buyerModel.setEmail("test@test.ru");

console.log("Данные покупателя после заполнения:", buyerModel.getData());
console.log("Ошибки валидации заполненной формы:", buyerModel.validate());

buyerModel.clear();
console.log("Данные покупателя после очистки:", buyerModel.getData());

const api = new Api(API_URL);
const webLarekApi = new WebLarekApi(api);
webLarekApi
  .getProducts()
  .then((data) => {
    productsModel.setItems(data.items);

    console.log(
      "Каталог товаров, полученный с сервера:",
      productsModel.getItems(),
    );
  })
  .catch((error) => {
    console.error("Ошибка при загрузке товаров", error);
  });
