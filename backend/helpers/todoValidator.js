const Joi = require("joi");

const validators = {};

validators.validateTodo = (todoData) => {
  const schema = Joi.object({
    title: Joi.string().min(3).max(40).messages({
      "string.base": "title must be string",
      "string.empty": "title field is required",
      "string.min": "title can not be less than three alphabetical characters",
      "string.max": "title can not be more than forty alphabetical characters",
      "any.required": "title field is required",
      "string.pattern.base": "title can only be alpahebtical characters"
  }),
    description: Joi.string().min(3).messages({
      "string.base": "description must be string",
      "string.empty": "description field is required",
      "string.min": "description can not be less than three alphabetical characters",
      "string.max": "description can not be more than forty alphabetical characters",
      "any.required": "description field is required",
      "string.pattern.base": "description can only be alpahebtical characters"
  }),
    category:  Joi.string().min(3).max(40).required().messages({
      "string.base": "category must be string",
      "string.empty": "category field is required",
      "string.min": "category can not be less than three alphabetical characters",
      "string.max": "category can not be more than forty alphabetical characters",
  })  
  
  });

  return schema.validate(todoData);
}; 
     

module.exports = validators;
