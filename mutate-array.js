// 1. create a constant named friends,
// which is an array that contains 2
// names of your choosing.
const friends = ['kenneth', 'tim']

// 2. Create a new constant named updatedFriends,
// which includes the friends array values plus
// one additional name
const updatedFriends = [...friends, 'nat']

// 3. Create a new constant named friendNameLengths,
// which is based on the array updatedFriends,
// but instead of having the friends names,
// have the array store the length of each persons name.
const friendNameLengths = updatedFriends.map(name => name.length)

// 4. Create a new constant named shorterNamedFriends,
// which will be a list of the friends except the friend with the longest name.
const maxFriendLength = Math.max(...friendNameLengths)
const shorterNamedFriends = updatedFriends.filter((name, i) => friendNameLengths[i] < maxFriendLength)

// 5. Print each variable to the console.
console.log(friends)
console.log(updatedFriends)
console.log(friendNameLengths)
console.log(shorterNamedFriends)
