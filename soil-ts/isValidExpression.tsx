function isValidExpression(property: Property): property is Property {
    return property.expression !== "" && property.expressionError === "";
}

export default isValidExpression;
