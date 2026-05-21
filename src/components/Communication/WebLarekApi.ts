import { IApi, TOrder, TOrderResult, TProductsResponse } from "../../types";

export class WebLarekApi {
  protected api: IApi;

  constructor(api: IApi) {
    this.api = api;
  }

  getProducts(): Promise<TProductsResponse> {
    return this.api.get<TProductsResponse>("/product/");
  }

  orderProducts(order: TOrder): Promise<TOrderResult> {
    return this.api.post<TOrderResult>("/order/", order);
  }
}
