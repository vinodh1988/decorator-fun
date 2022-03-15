type component={
    selector:string;
    template:string;
    style:string;
}

function Add(x: component){
return function<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      additional = x;
      
    };
  }
}


  @Add(
    {
        selector:"x-name",
        style:"x.css",
        template:"x.html"
    }
  )
  class Extra{
      x: string=" first "

      constructor(name: string) {
             this.x=name
      }
  }

  let obj=new Extra("india");
  console.log(obj)
  console.log(obj["additional"])