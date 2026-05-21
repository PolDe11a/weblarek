import { IBuyer, TBuyerErrors, TPayment } from "../../types";

export class BuyerModel {
  protected payment: TPayment | null = null;
  protected address = "";
  protected phone = "";
  protected email = "";

  setPayment(payment: TPayment): void {
    this.payment = payment;
  }

  setAddress(address: string): void {
    this.address = address;
  }

  setPhone(phone: string): void {
    this.phone = phone;
  }

  setEmail(email: string): void {
    this.email = email;
  }

  getData(): IBuyer {
    return {
      payment: this.payment,
      address: this.address,
      phone: this.phone,
      email: this.email,
    };
  }

  clear(): void {
    this.payment = null;
    this.address = "";
    this.phone = "";
    this.email = "";
  }

  validate(): TBuyerErrors {
    const errors: TBuyerErrors = {};

    if (!this.payment) {
      errors.payment = "Не выбран способ оплаты";
    }

    if (!this.address) {
      errors.address = "Необходимо указать адрес";
    }

    if (!this.phone) {
      errors.phone = "Укажите телефон";
    }

    if (!this.email) {
      errors.email = "Введите Email";
    }

    return errors;
  }
}
