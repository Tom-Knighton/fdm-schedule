import { getActiveElement } from "@testing-library/user-event/dist/utils";
import { json } from "stream/consumers";
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
      "E14NS"
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
        "E14NS"
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
        "E14NS"
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
        "E14NS"
    ),
];
class AccountService{
    static getAccountbyEmail(email: String){
        const email2 = email
        const account = localStorage.getItem("account." + email2);
        if (account === null){
            const validAccount = Accounts.filter((u) => u.email === email);
            if (validAccount.length >0){
                localStorage.setItem('account.'+(validAccount[0].email), JSON.stringify(validAccount[0]));
                return validAccount[0];
            }else{
                return null;
            }
        }else{
            const localAccount = JSON.parse(account);
            const newAccount = new Account(
             localAccount.name, localAccount.surname, localAccount.email,localAccount.personalPhone,localAccount.workPhone,localAccount.street,localAccount.city,localAccount.county,localAccount.postcode
            );
            return newAccount;

        }
            
    }

    static updateAccountInfo(account: Account, name: String, surname: String, personalPhone: String, workPhone: String, street: string, city: string, county: string, postcode: string){
        account.name = name
        account.surname = surname
        account.personalPhone = personalPhone
        account.workPhone = workPhone
        account.street = street
        account.city = city
        account.county = county
        account.postcode = postcode
        localStorage.setItem('account.'+(account.email), JSON.stringify(account))
    }
}

export {AccountService}
