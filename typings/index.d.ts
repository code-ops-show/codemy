declare module '*.sass' {
  const content: {[className: string]: string};
  export = content;
}

declare module '*.png' {
  const content: any;
  export default content;
}

declare module "*.svg" {
  const content: any;
  export default content;
}

declare module 'classnames'
declare module 'aos'
