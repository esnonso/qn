export const storiesApiCalls = async ({ request }) => {
  switch (request.method) {
    case "POST": {
      let formData = await request.formData();
      const title = formData.get("title");
      const imageUrl = formData.get("imgUrl");
      const body = formData.get("body");
      const topic = formData.get("topic");

      try {
        const response = await fetch("http://localhost:5002/api/stories", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, imageUrl, body, topic }),
        });
        if (!response.ok) throw new Error("An error occured try again");
        alert("success");
        return "Post created sucessfully";
      } catch (err) {
        console.log(err);
        return err;
      }
    }
    case "PUT": {
      let formData = await request.formData();
      const title = formData.get("title");
      const imageUrl = formData.get("imgUrl");
      const body = formData.get("body");
      const topic = formData.get("topic");
      const id = formData.get("id");
      console.log(title);
      try {
        const response = await fetch(
          "http://localhost:5002/api/stories/" + id,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, imageUrl, body, topic }),
          }
        );
        if (!response.ok) throw new Error("An error occured try again");
        alert("success");
        return "Post edit sucessfully";
      } catch (err) {
        console.log(err);
        return err;
      }
    }
    default:
      return;
  }
};

export const userApiCalls = async ({ request }) => {
  switch (request.method) {
    case "POST": {
      let formData = await request.formData();
      const name = `${formData.get("firstname")} ${formData.get("lastname")}`;
      const email = formData.get("email");
      const password = formData.get("password");
      try {
        const response = await fetch("http://localhost:5002/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password }),
        });
        if (!response.ok) throw new Error("An error occured try again");
        alert("success");
        return "User created sucessfully, check your email for verification";
      } catch (err) {
        console.log(err);
        return err;
      }
    }
    default:
      return;
  }
};

export const loginUser = async ({ request }) => {
  try {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    const response = await fetch("http://localhost:5002/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) throw new Error("Invalid username or password");
    const data = await response.json();
    console.log(data);
    alert("success");
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const fetchPosts = async () => {
  try {
    const response = await fetch("http://localhost:5002/api/stories");
    if (!response.ok) throw new Error("An error occured getting posts");
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const fetchVideos = async () => {
  try {
    const response = await fetch("http://localhost:5002/api/videos");
    if (!response.ok) throw new Error("An error occured getting videos");
    const data = await response.json();
    console.log(data.data);
    return data.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const videosApiCalls = async ({ request }) => {
  switch (request.method) {
    case "POST": {
      let formData = await request.formData();
      const title = formData.get("title");
      const videoUrl = formData.get("videoUrl");
      const topic = formData.get("topic");
      const slug = title;
      try {
        const response = await fetch("http://localhost:5002/api/videos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, videoUrl, topic, slug }),
        });
        if (!response.ok) throw new Error("An error occured try again");
        alert("success");
        return "Post created sucessfully";
      } catch (err) {
        console.log(err);
        return err;
      }
    }
    case "PUT": {
      let formData = await request.formData();
      const title = formData.get("title");
      const imageUrl = formData.get("imgUrl");
      const body = formData.get("body");
      const topic = formData.get("topic");
      const id = formData.get("id");
      try {
        const response = await fetch(
          "http://localhost:5002/api/stories/" + id,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, imageUrl, body, topic }),
          }
        );
        if (!response.ok) throw new Error("An error occured try again");
        alert("success");
        return "Post edit sucessfully";
      } catch (err) {
        console.log(err);
        return err;
      }
    }
    default:
      return;
  }
};
