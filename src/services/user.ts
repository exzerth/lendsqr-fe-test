import axios from "axios";
const user = () => {
  interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

  async function getData(): Promise<void> {
    try {
      const response = await axios.get<Post[]>(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = response.data;
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  getData();
};

export default user;
