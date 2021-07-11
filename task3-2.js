"use strict"

let sarah = {

    name: 'Sarah',
    job: {

      name: 'Andersen',
      hiringDate: '23.07.2020'

    }

  };
  


  function printJobName(user){

    let { 
        name: Username,
        job: {

        name: CompanyName,
        hiringDate

    }
  } = sarah;

  console.log(CompanyName);

};

printJobName(sarah);