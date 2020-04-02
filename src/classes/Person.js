import React from 'react'; 

const Ages = {
    c0: 0, // "_2to3_", 
    c1: 1, // "_4to8_", 
    t0: 2, // "_9to13_", 
    t1: 3, // "_14to18_", 
    a0: 4, // "_19to30_", 
    a1: 5, // "_31to50_", 
    a2: 6 // "_51nUp_"
}; 
Object.freeze(Ages); 


export default function Person(name, category, age) {
    this.firstName = name; 
    this.category = category; 
    this.age = age; 
    if (this.category.valueOf() === "man".valueOf()) {
      if (age >= 19 && age <= 30) {
        this.ageCategory = Ages.a0; 
        this.grain = 8; 
      } else if (age >= 31 && age <= 50) {
        this.ageCategory = Ages.a1; 
        this.grain = 7;
      } else if (age >= 51) {
        this.ageCategory = Ages.a2; 
        this.grain = 6;
      } 
    } // Woman: 19-30 yrs, 31-50 yrs, 51+ yrs 
    else if (this.category.valueOf() === "woman".valueOf()) {
      if (age >= 19 && age <= 30) {
        this.ageCategory = Ages.a0; 
        this.grain = 6; 
      } else if (age >= 31 && age <= 50) {
        this.ageCategory = Ages.a1; 
        this.grain = 6;
      } else if (age >= 51) {
        this.ageCategory = Ages.a2; 
        this.grain = 5;
      }
    } // Girl: 9-13 yrs, 14-18 yrs
    else if (this.category.valueOf() === "girl".valueOf()) {
      if (age >= 9 && age <= 13) {
        this.ageCategory = Ages.t0; 
        this.grain = 5; 
      } else if (age >= 14 && age <= 18) {
        this.ageCategory = Ages.t1; 
        this.grain = 6;
      } 
    } // Boy: 9-13 yrs, 14-18 yrs
    else if (this.category.valueOf() === "boy".valueOf()) {
      if (age >= 9 && age <= 13) {
        this.ageCategory = Ages.t0; 
        this.grain = 6; 
      } else if (age >= 14 && age <= 18) {
        this.ageCategory = Ages.t1; 
        this.grain = 8;
      } 
    } // Child: 2-3 yrs, 4-8 yrs
    else if (this.category.valueOf() === "child".valueOf()) {
      if (age >= 2 && age <= 3) {
        this.ageCategory = Ages.c0; 
        this.grain = 3; 
      } else if (age >= 4 && age <= 8) {
        this.ageCategory = Ages.c1; 
        this.grain = 5;
      } 
    }	
  }