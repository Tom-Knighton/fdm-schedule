import {Account} from "../models/Account";
export const Accounts: Array<Account> = [
    new Account(
      "John",
      "Smith",
      "johnsmith@gmail.com",
      "07679178129",
      "07278157156",
      "7 Maple rd",
      "London",
      "London",
      "E6 7GD"
    ),
    new Account(
        "JohnJohn",
        "SmithSmith",
        "johnsmith2@gmail.com",
        "07679178122",
        "07278122122",
        "2 Tea lane",
        "London",
        "London",
        "E2 2GD"
    ),
    new Account(
        "JohnJohnJohn",
        "SmithSmithSmith",
        "johnsmith3@gmail.com",
        "07679378133",
        "07278133132",
        "3 Trifecta lane",
        "London",
        "London",
        "E3 3KD"
    ),
    new Account(
        "Mr Mustafa",
        "Bozkurt",
        "m.bozkurt@fdmgroup.com",
        "07672901382",
        "07672901389",
        "2 Redbridge Road",
        "London",
        "London",
        "E8 IG5"
    ),
];
class AccountService{
    static getAccountbyEmail(email: String){
        const validAccount = Accounts.filter((u) => u.email === email);
        return validAccount.length > 0 ? validAccount[0] : null;
    }

    static updateAccountInfo(account: Account, name: String, surname: String, email: String, personalPhone: String, workPhone: String, street: string, city: string, county: string, postcode: string){
        account.name = name
        account.surname = surname
        account.email = email
        account.personalPhone = personalPhone
        account.workPhone = workPhone
        account.street = street
        account.city = city
        account.county = county
        account.postcode = postcode
    }
}

export {AccountService}
