const path = require("path");

// Use the existing dishes data
const dishes = require(path.resolve("src/data/dishes-data"));

// Use this function to assign ID's when necessary
const nextId = require("../utils/nextId");
const { log } = require("console");

// TODO: Implement the /dishes handlers needed to make the tests pass
function list(req, res) {
  res.json({ data: dishes });
  //     console.log(dishes);
}

// Functions to validate proprties for creat

function bodyDataHas(propertyName) {
  return function (req, res, next) {
    const { data = {} } = req.body;
    if (data[propertyName]) {
      return next();
    }
    next({
      status: 400,
      message: `Must include a ${propertyName}`,
    });
  };
}

// validate if id matches routeId

function bodyIdMatchesRouteId(req, res, next) {
  const { dishId } = req.params;
  const { id } = req.body.data;

  if (id  && dishId !== id) {
  return  next({
        status: 400,
        message: `Dish id does not match route id. Dish: ${id}, Route: ${dishId}`,
      });
    
  }
  next()
}
// validate if price < 0

function validatePriceProperty(req, res, next) {
  const { data: { price } = {} } = req.body;

  if (!price || price < 0 || typeof price !== "number") {
    next({
      status: 400,
      message: `Dish must include a price and it must be an integer greater than 0.`,
    });
  }
  return next();
}

function create(req, res) {
  const { data: { name, description, image_url, price } = {} } = req.body;

  const newDish = {
    id: nextId(),
    name,
    description,
    image_url,
    price,
  };
  dishes.push(newDish);
  res.status(201).json({ data: newDish });
}

function dishExists(req, res, next) {
  const { dishId } = req.params;
  //     console.log(dishId)
  const foundDish = dishes.find((dish) => dish.id === dishId);
  //     console.log(foundDish)

  if (foundDish) {
    res.locals.dish = foundDish;

    res.locals.dishId = dishId;
    return next();
  }
  next({
    status: 404,
    message: `Dish id not found ${dishId}`,
  });
}

function read(req, res, next) {
  res.json({ data: res.locals.dish });
}

function update(req, res, next) {
  const dish = res.locals.dish;
  const { data: { name, description, image_url, price } = {} } = req.body;

  // update the dish
  dish.name = name;
  dish.description = description;
  dish.image_url = image_url;
  dish.price = price;

  res.json({ data: dish });
}

module.exports = {
  create: [
    bodyDataHas("name"),
    bodyDataHas("description"),
    bodyDataHas("image_url"),
    bodyDataHas("price"),
    validatePriceProperty,
    create,
  ],
  list,
  read: [dishExists, read],
  update: [
    dishExists,
    bodyIdMatchesRouteId,
    bodyDataHas("name"),
    bodyDataHas("description"),
    bodyDataHas("image_url"),
    bodyDataHas("price"),
    validatePriceProperty,

    update,
  ],
};
