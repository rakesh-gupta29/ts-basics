type Truck = {
  type: "truck";
  isHeavy: boolean;
};

type Car = {
  type: "car";
  isHeavy: boolean;
};

type Vehicle = Truck | Car;
const isHeavy: (vehicle: Vehicle) => boolean = (vehicle: Vehicle) => {
  // here , both in and instanceof can't be used to check therefore introducing a discriminatior for the types combined .
  if (vehicle.type == "car") return false;
  else return true;
};
