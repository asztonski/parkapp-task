declare namespace global {
  namespace WebAssembly {
    interface Imports { [module: string]: any }
    interface Instance { readonly exports: any }
  }
  interface SharedWorker {
    readonly port: MessagePort;
  }
  var SharedWorker: {
    prototype: SharedWorker;
    new(scriptURL: string | URL, options?: { name?: string }): SharedWorker;
  };
}
export {};
