import baseValues from "./_baseValues.jsx";
import keysIn from "../#keysIn";

function valuesIn<T>(object: Dictionary<T>): Array<T> {
    return object == null ? [] : baseValues(object, keysIn(object));
}

export default valuesIn;
