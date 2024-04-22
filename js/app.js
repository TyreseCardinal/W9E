const tweets = [
  {
    tweet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    username: "User1",
    created_at: "04-21-2024",
    age: 22
  },
  {
    tweet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu justo ac elit suscipit euismod.",
    username: "User2",
    created_at: "04-20-2024",
    age: 16
  },
  {
    tweet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis justo a eros luctus, eu cursus nisl laoreet.",
    username: "User3",
    created_at: "04-19-2024",
    age: 30
  },
  {
    tweet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.",
    username: "User4",
    created_at: "04-18-2024",
    age: 14
  },
  {
    tweet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu eros non quam dapibus eleifend.",
    username: "User5",
    created_at: "04-17-2024",
    age: 19
  },
  {
    tweet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula enim id augue tempor, eget consequat nibh vestibulum.",
    username: "User6",
    created_at: "04-16-2024",
    age: 25
  },
  {
    tweet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae felis in elit vehicula tristique.",
    username: "User7",
    created_at: "04-15-2024",
    age: 16
  },
  {
    tweet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac ex eget eros dignissim feugiat.",
    username: "User8",
    created_at: "04-14-2024",
    age: 32
  },
  {
    tweet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    username: "User9",
    created_at: "04-13-2024",
    age: 20
  },
  {
    tweet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet nulla vitae elit lacinia vulputate.",
    username: "User10",
    created_at: "04-12-2024",
    age: 18
  }
];

console.log("--Users over 18--");

let a = 0;
while (a < tweets.length) {
  const tweet = tweets[a];

  if (tweet.age >= 18) {
    console.log(`${tweet.tweet} - ${tweet.username} - ${tweet.created_at}`);
  }
  a++;
}

console.log("-------------");
console.log("--Users under 18--")

for (let a = 0; a < tweets.length; a++) {
  const tweet = tweets[a];

  if (tweet.age < 18) {
    console.log(`${tweet.tweet} - ${tweet.username} - ${tweet.created_at}`);
  }
}