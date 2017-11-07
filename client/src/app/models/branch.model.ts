
export class Branch {
    constructor(
    public Name: String,
    public Code: String,
    public Type: String,
    public IsAgency: boolean,
    public Email: String,
    public ContactPerson: String,
    public Address: String,
    public State: String,
    public District?: String,
    public PIN?: number,
    public Telephone?: String,
    public Mobile?: number,
    public _id?: String
) {}

}
