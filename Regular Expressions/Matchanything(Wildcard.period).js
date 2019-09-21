Sometimes you won't (or don't need to) know the exact characters in your patterns. Thinking of all words that match, 
say, a misspelling would take a long time. Luckily, you can save time using the wildcard character: .

The wildcard character .will match any one character. The wildcard is also called dotand period. 
You can use the wildcard character just like any other character in the regex. For example, if you wanted to match 
"hug", "huh", "hut", and "hum", you can use the regex /hu./to match all four words.


let humSong = "I'll hum a song";
let hugBear = "Bear hug";
let Regex = /hu./gi; 
console.log(humSong.match(Regex)); // Returns ["hum"]
console.log(hugBear.match(Regex)); // Returns ["hug"]
