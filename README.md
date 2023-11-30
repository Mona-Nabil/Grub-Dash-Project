## Project Grub-Dash API

- GrubDash is a fictional company that operates an online food ordering and food delivery platform.
- For this Thinkful project, I set up a RESTful API, wrote custom validation functions, created route handlers, and built specific API endpoints. Of note, the front-end application was provided for this assignment.

## Technology 

- Built with Node.js and Express server framework.

## Endpoints for dishes:

# Get Dishes: GET to /dishes
- Requests all existing dish data.
- Successful GET requests will return an array of JSON objects representing the saved dishes. The response from the server should look like the following:
```
  {
  "data": [
    {
      "id": "d351db2b49b69679504652ea1cf38241",
      "name": "Dolcelatte and chickpea spaghetti",
      "description": "Spaghetti topped with a blend of dolcelatte and fresh chickpeas",
      "price": 19,
      "image_url": "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?h=530&w=350"
    }
    // ...
  ]
}
```
# Create New Dish: POST to /dishes:
POST request will be sent with a single JSON object like so:

  ```
  {
  "data": {
    "name": "Dolcelatte and chickpea spaghetti",
    "description": "Spaghetti topped with a blend of dolcelatte and fresh chickpeas",
    "price": 19,
    "image_url": "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?h=530&w=350"
  }
}
```
- Successful POST requests will return the newly created dish as a JSON object. The response from the server should look like the following:

```
{
  "data": {
    "id": "d351db2b49b69679504652ea1cf38241",
    "name": "Dolcelatte and chickpea spaghetti",
    "description": "Spaghetti topped with a blend of dolcelatte and fresh chickpeas",
    "price": 19,
    "image_url": "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?h=530&w=350"
  }
}
```
## Get Specific Dish: GET to /dishes/:dishId:
   - Requests a specific dish by :dishId
   - Successful GET requests will return a JSON object. The response from the server should look like this:
    ```{
  "data": {
    "id": "d351db2b49b69679504652ea1cf38241",
    "name": "Dolcelatte and chickpea spaghetti",
    "description": "Spaghetti topped with a blend of dolcelatte and fresh chickpeas",
    "price": 19,
    "image_url": "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?h=530&w=350"
  }
}```

## Update a Dish: PUT to /dishes/:dishId:
- PUT request will be sent with a single JSON object like so:
  
```
  {
  "data": {
    "id": "3c637d011d844ebab1205fef8a7e36ea",
    "name": "Century Eggs",
    "description": "Whole eggs preserved in clay and ash for a few months",
    "image_url": "some-valid-url",
    "price": "17"
  }
}
```
- Note: The id property isn't required in the body of the request, but if it is present, it must match :dishId from the route.
- The response from the server should look like the following:
  ```
  {
  "data": {
    "id": "3c637d011d844ebab1205fef8a7e36ea",
    "name": "Century Eggs",
    "description": "Whole eggs preserved in clay and ash for a few months",
    "image_url": "some-valid-url",
    "price": "17"
  }}
  
```




