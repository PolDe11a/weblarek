import { IProduct } from "../../types";

export class BasketModel {
  protected _items: IProduct[] = [];

  getItems(): IProduct[] {
    return this._items;
  }

  addItem(item: IProduct): void {
    if (!this.contains(item.id) && item.price !== null) {
      this._items.push(item);
    }
  }

  removeItem(item: IProduct): void {
    this._items = this._items.filter((basketItem) => basketItem.id !== item.id);
  }

  clear(): void {
    this._items = [];
  }

  getTotal(): number {
    return this._items.reduce((sum, item) => sum + (item.price ?? 0), 0);
  }

  getCount(): number {
    return this._items.length;
  }

  contains(id: string): boolean {
    return this._items.some((item) => item.id === id);
  }
}
