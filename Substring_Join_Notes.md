#String Methods
##Substring

####Definition and Usage

The substring() method extracts the characters from a string, between two specified indices, and returns the new sub string.

This method extracts the characters in a string between "start" and "end", not including "end" itself.

If "start" is greater than "end", this method will swap the two arguments, meaning str.substring(1,4) == str.substring(4,1).

If either "start" or "stop" is less than 0, it is treated as if it were 0.

Note: The substring() method does not change the original string.

####Example

Extract characters from a string:

```javascript
var str = "Oh golly what characters do I want from this string?";
var res = str.substring(5, 10);
```
The result of res will be:
```javascript
"lly w"
```

#Array Methods
##Join

####Definition and Usage
The join() method joins the elements of an array into a string, and returns the string.

The elements will be separated by a specified separator. The default separator is comma (,).


####Example

Join the elements of an array into a string:
```javascript
var table3 = ["Crystal", "Yuse", "Brandon"];
var team = table3.join(", ");
```
The result of team will be:
```javascript
"Crystal, Yuse, Brandon"
```
