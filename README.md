# MongoDB $inc Operator String Value Error

This repository demonstrates a common error when using the `$inc` operator in MongoDB: providing a string value instead of a number.

## Bug Description
The `$inc` operator is used to increment a numerical field in a MongoDB document.  If you attempt to use a string value, the update operation will fail.

## Bug Reproduction
1. Create a MongoDB collection.
2. Attempt to increment a field using `$inc` with a string value.
3. Observe the error.

## Bug Solution
Ensure that the value provided to the `$inc` operator is a number.
