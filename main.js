const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Five", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Six", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Seven", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Eight", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 33];

for(let i = 0; i< companies.length; i++) {
    console.log(companies[i].name);
}

// forEach
// companies.forEach(function(Company){ 
//     console.log(Company.name)
// })


// filter
// let canDrive = [];
// for(let i = 0; i< ages.length; i++){
//     if(ages[i] >= 21){
//         canDrive.push(ages[i]);
//     }
// }
/*
const canDrive = ages.filter(function(age){
    if(ages >= 21){
        return true;
    }
});

console.log(canDrive);*/
// const canDrive = ages.filter(age => age >= 21);
// console.log(canDrive);


// filter retail companies 
// const retailCompanies = companies.filter(function (company) {
//     if (company.category === 'Retail') {
//         return true;
//     }
// });

// const retailCompanies = companies.filter(company => company.category === 'Retail');
// console.log(retailCompanies);



// FILTER 80S companies
// const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990)  );

// console.log(eightiesCompanies);

// get companies that lasted 10 year or more 
// const lastedTenyears = companies.filter(company => (company.end - company.start >=10));
// console.log(lastedTenyears);


// MAP
//map function data me se new array banane ke lye use hota aur usme koe function call krta

// const ageMap = ages.map(age => Math.sqrt(age));
// // console.log(ageMap);

// const ageMap = ages.map(function(age){
//     if(age > 0 ){
//         return (age *2 && Math.sqrt(age));
//     }
// })
// console.log(ageMap);


// sort mean (in) urdu tarteeb dena \
// method 1 sort companies by start years
/*
const sortedCompanies = companies.sort(function(cl,cl2){
    if(cl.start >cl2.start ){
        return 1;   
    } else {
        return -1;
    }
})
*/
// shorter way code method 2 impressive
// const sortedCompanies = companies.sort((c1, c2) => (c1.start > c2.start ? 1 : -1));

// console.log(sortedCompanies);

// Sort ages 
// const sortAges = ages.sort((a,b) => a-b);
// console.log(sortAges);


// reduce
// const  totalYear = companies.reduce(function(total,company){
//     return total + (company.end - company.start);
// },0);


// using arrow funtion
// const totalYear = companies.reduce((total,company) => total + (company.end - company.start),0);

// Total ages 
// const ageSum = ages.reduce((totalage,age) => totalage + age,0);
// const ageSum = ages.reduce(function(total,age){
//     return total + age;
// },0);

// console.log(ageSum);

// COMBINE METHODS 
// const combined = ages
//     .map(age => age*2)
//     .filter(age => age >= 40)
//     .sort((a,b) => a-b,)
//     .reduce((a,b) => a+b, 0); // sum 
    
// console.log(combined);   






