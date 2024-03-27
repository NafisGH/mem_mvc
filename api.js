const MEMES_MOCK = [
  {
    id: "181913649",
    name: "Drake Hotline Bling",
    url: "https://i.imgflip.com/30b1gx.jpg",
  },
  {
    id: "87743020",
    name: "Two Buttons",
    url: "https://i.imgflip.com/1g8my4.jpg",
  },
  {
    id: "112126428",
    name: "Distracted Boyfriend",
    url: "https://i.imgflip.com/1ur9b0.jpg",
  },
];

class Api {
  constructor() {
    this.baseUrl = "https://api.imgflip.com"
  }

  async getMems() {
     const response = await fetch(`${this.baseUrl}/get_memes`);
      const data = await response.json();
      return data.data.memes;

  }
}
