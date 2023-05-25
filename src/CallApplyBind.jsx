import React from "react";

const CallApplyBind = () => {
  let student = {
    firstName: "Kaushal",
    lastName: "Panchal",
    // getFullName: function () {
    //   return `${this.firstName} ${this.lastName}`;
    // },
    // getName: getFullName(this), // here this will give you undefined
  };

  let teacher = {
    firstName: "Sujit",
    lastName: "patel",
    // getFullName: function () {
    //     return `${this.firstName} ${this.lastName}`;
    //   },
    // getName: getFullName(this), // here this will give you undefined
  };
  //here we have the two objects so for full name we have two methods seperately
  //so we can define common function but we can't achieve this
  //   function getFullName  (data){
  //     // console.log(data)
  //     return `${data.firstName} ${data.lastName}`;
  //   }

  function getFullNane() {
    return `${this.firstName} ${this.lastName}`;
  }

  function chooseSubject(sub1, sub2) {
    return `${sub1} ${sub2}`;
  }
  // major difference between call apply and bind
  //if you are using call function so it will give you function and execute it directly
  // if you are using bind then it will not call the function it will make the function return the function
  // you have to call it manually as below
//   for bind you can bind the function use it when you want to

  return (
    <>
      {/* <div>{student.getName()}</div>; */}
      {/* <div>{teacher.getName()}</div>; */}
      <div>{getFullNane.call(teacher)}</div>
      <div>{chooseSubject.call(teacher, "mathematics", "science")}</div>
      <div>{chooseSubject.apply(teacher, ["mathematics", "science"])}</div>
      <div>{getFullNane.bind(teacher)()}</div>

    </>
  );
};

export default CallApplyBind;
