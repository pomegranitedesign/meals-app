export default class Meal {
  constructor(
    id,
    categoryIds,
    title,
    affordability,
    complexity,
    imageURL,
    cookDuration,
    ingredients,
    steps,
    isGlutenFree,
    isVegan,
    isVegeratian,
    isLactoseFree
  ) {
    this.id = id
    this.categoryIds = categoryIds
    this.title = title
    this.affordability = affordability
    this.complexity = complexity
    this.imageURL = imageURL
    this.cookDuration = cookDuration
    this.ingredients = ingredients
    this.steps = steps
    this.isGlutenFree = isGlutenFree
    this.isVegan = isVegan
    this.isVegeratian = isVegeratian
    this.isLactoseFree = isLactoseFree
  }
}
