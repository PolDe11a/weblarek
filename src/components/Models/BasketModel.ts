import { IProduct } from "../../types";

export class BasketModel {
  protected items: IProduct[] = [];

  getItems(): IProduct[] {
    return [...this.items];
  }

  addItem(item: IProduct): void {
    if (!this.contains(item.id) && item.price !== null) {
      this.items.push(item);
    }
  }

  removeItem(item: IProduct): void {
    this.items = this.items.filter((basketItem) => basketItem.id !== item.id);
  }

  clear(): void {
    this.items = [];
  }

  getTotal(): number {
    return this.items.reduce((sum, item) => sum + (item.price ?? 0), 0);
  }

  getCount(): number {
    return this.items.length;
  }

  contains(id: string): boolean {
    return this.items.some((item) => item.id === id);
  }
}