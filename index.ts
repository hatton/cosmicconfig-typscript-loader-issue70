import * as Cosmic from "cosmiconfig";
import { TypeScriptLoader } from "cosmiconfig-typescript-loader";

export interface IPlugin {
  name: string;

  /* If tsconfig.json has "strict', then following fails at runtime with
    test.config.ts:5:16 - error TS7006: Parameter 'block' implicitly has an 'any' type.
    sayHello: (block) => "Hello",
  */
  sayHello: (block: IFoo) => string;
}
export interface IFoo {}
const cosmic = Cosmic.cosmiconfigSync("test", {
  loaders: {
    ".ts": TypeScriptLoader(),
  },
  searchPlaces: [`test.config.ts`],
});
const found = cosmic.search();

console.log(found?.config.name + " " + found?.config.sayHello({}));
