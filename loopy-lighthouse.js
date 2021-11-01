const chant1 = "Loopy";
const chant2 = "Lighthouse";

for(let i = 100; i <= 200; i++){
  if (i % 3 === 0 && i % 4 === 0){
    console.log(chant1 + chant2);
  } else if(i % 4 === 0){
    console.log(chant2);
  } else if(i % 3 === 0){
    console.log(chant1);
  } else {
    console.log(i);
  }
}
