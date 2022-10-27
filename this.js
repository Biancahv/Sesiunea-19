 console.log(this);

// function showMeThis() {
//     console.log(this);
// }
// showMeThis();

const cat = {
    name: 'Garfield',
    showThis: function() {
      console.log(this);
    }
  }
  cat.showThis();
  console.log(cat);

  const newCat = cat;
  newCat.showThis();

  const localShowThis = cat.showThis;
  localShowThis();
  