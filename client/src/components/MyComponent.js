const MyComponent = () => {

  const recipe = {
    name: 'Pizza',
    ingredients: ['Tomato', 'Cheese', 'Ham'],
    calories: 400
  }
  return (
    <div className="my-component">
      <h1> {'Recipe: ' + recipe.name} </h1>
      <h2> {'Calories: ' + recipe.calories} </h2>
      <ol>
        {
          recipe.ingredients.map((ingredient, i) => {
            console.log(ingredient);
            return (
              <li key={i}>
                {ingredient}
              </li>
            );
          })
        }
      </ol>
      <hr />
    </div>
  );
}

export default MyComponent;