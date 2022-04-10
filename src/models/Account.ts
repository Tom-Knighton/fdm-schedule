export class Account {
    public name: String
    public surname: String
    public email: String
    public personalPhone: String
    public workPhone: String
    public street: string 
    public city: String
    public county: String 
    public postcode: String
    constructor(name: String, surname: String, email: String, personalPhone: String, workPhone: String, street: string, city: string, county: string, postcode: string) {

        this.name = name
        this.surname = surname
        this.email = email
        this.personalPhone = personalPhone
        this.workPhone = workPhone
        this.street = street
        this.city = city
        this.county = county
        this.postcode = postcode

    }
};
