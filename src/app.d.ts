declare global {
  namespace App {
    interface Error {
      message: string;
      stack?: string;
    }
    interface Locals {}
    interface PageData {}
    interface Platform {}
  }
}

export {};