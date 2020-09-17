// Given a string will return a new string which is the reverse of the one provided to the function
// O(N)

function reverse(str){
  if (str === "") return ""

  return reverse(str.substr(1)) + str[0]
}

console.log(reverse("abcdefg"))