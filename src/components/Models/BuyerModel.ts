import { IBuyer, TBuyerErrors, TPayment } from '../../types';

export class BuyerModel {
  protected _payment: TPayment = null;
  protected _address = '';
  protected _phone = '';
  protected _email = '';

  setPayment(payment: TPayment): void {
    this._payment = payment;
  }

  setAddress(address: string): void {
    this._address = address;
  }

  setPhone(phone: string): void {
    this._phone = phone;
  }

  setEmail(email: string): void {
    this._email = email;
  }

  getData(): IBuyer {
    return {
      payment: this._payment,
      address: this._address,
      phone: this._phone,
      email: this._email,
    };
  }

  clear(): void {
    this._payment = null;
    this._address = '';
    this._phone = '';
    this._email = '';
  }

  validate(): TBuyerErrors {
    const errors: TBuyerErrors = {};

    if (!this._payment) {
      errors.payment = 'Не выбран способ оплаты';
    }

    if (!this._address) {
      errors.address = 'Необходимо указать адрес';
    }

    if (!this._phone) {
      errors.phone = 'Укажите телефон';
    }

    if (!this._email) {
      errors.email = 'Введите Email';
    }

    return errors;
  }
}