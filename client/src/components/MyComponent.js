const MyComponent = ({ greetings }) => {

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
            return (
              <li key={i}>
                {ingredient}
              </li>
            );
          })
        }
      </ol>
      <hr />

      {greetings &&
        <>
          <h1>From a prop:</h1>
          <h3>{greetings}</h3>
        </>
      }

    </div>
  );
}

export default MyComponent;