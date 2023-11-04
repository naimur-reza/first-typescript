interface Developer<T> {
  name: string;
  age: number;
  computer: {
    system: string;
    memory: number;
  };

  monitorDetails: T;
}

interface MonitorDetails {
  size: number;
  resolution: string;
}

const developer1: Developer<MonitorDetails> = {
  name: "John",
  age: 30,
  computer: {
    system: "Mac",
    memory: 16,
  },
  monitorDetails: {
    size: 27,
    resolution: "4k",
  },
};

interface MonitorDetails2 {
  name: string;
  resolution: string;
}
const developer2: Developer<MonitorDetails2> = {
  name: "Witch",
  age: 22,
  computer: {
    memory: 24,
    system: "Hp",
  },
  monitorDetails: {
    name: "Apple",
    resolution: "8k",
  },
};
