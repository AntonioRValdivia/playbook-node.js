const dishes = ['pancakes', 'hotcakes', 'cheeseburger', 'tacos', 'hotdog', 'pizza']

const dishesWithCake = dishes.filter( dish =>{
  return dish.includes('cakes');
})

console.log(dishesWithCake)