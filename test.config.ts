import { IPlugin, IFoo } from "./index";

const p: IPlugin = {
  name: "test",
  sayHello: (block: IFoo) => "Hello",
};

export default p;
