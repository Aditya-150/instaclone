import { USERS } from "./Users";

export const POSTS = [
  {
    imageurl:
      "https://www.nasa.gov/sites/default/files/thumbnails/image/for_press_release.jpg",
    user: USERS[0].user,
    likes: 9990,
    caption: "Pretending to be out of the world 🚀.",
    profile_picture: USERS[0].image,
    comments: [
      {
        user: "xavierelite",
        comment: "Are you an alien? 🐸",
      },
      {
        user: "elonmusk",
        comment: "How did you know that?👽 ",
      },
    ],
  },
  {
    imageurl:
      "https://www.blueorigin.com/assets/blueorigin_bluemoon_ascent.jpg",
    user: USERS[1].user,
    likes: 8990,
    caption: "Pretending to be Elon Musk 🚀.",
    profile_picture: USERS[1].image,
    comments: [
      {
        user: "elonmusk",
        comment: "Why? 🐸",
      },
      {
        user: "jeffbezos",
        comment: "Because I love you ❣️",
      },
    ],
  },
];