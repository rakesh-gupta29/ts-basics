class User {
  static isAlive: boolean = true;
  constructor(
    public name: string,
    readonly DOB: Date,
    private age: number,
    protected hobbies: string[]
  ) {}
}

const user: User = new User("userName", new Date(12, 10, 1999), 10, [
  "badminton",
]);
