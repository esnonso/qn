import { json, redirect } from "react-router-dom";
const token = localStorage.getItem("token");
export const storiesApiCalls = async ({ request }) => {
  switch (request.method) {
    case "PUT": {
      let formData = await request.formData();
      const title = formData.get("title");
      const body = formData.get("body");
      const topic = formData.get("topic");
      const id = formData.get("id");
      const trending = formData.get("trending");
      try {
        const response = await fetch(
          "http://localhost:5002/api/stories/" + id,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ title, body, topic, trending }),
          }
        );
        if (!response.ok) {
          const error = await response.json();
          return { error: true, message: error.message };
        }
        alert("sucess!");
        window.location.reload();
        return redirect("/dashboard");
      } catch (err) {
        throw json({ status: 400 }, { message: err.message });
      }
    }

    default:
      return;
  }
};

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const userApiCalls = async ({ request }) => {
  switch (request.method) {
    case "POST": {
      let formData = await request.formData();
      const name = `${formData.get("firstname")} ${formData.get("lastname")}`;
      const email = formData.get("email");
      const password = formData.get("password");
      const status = formData.get("status");
      const terms = formData.get("terms");

      if (!email || !validateEmail(email))
        return { error: true, message: "Invalid Email" };
      if (formData.get("firstname").length < 2)
        return { error: true, message: "First Name is required" };
      if (formData.get("lastname").length < 2)
        return { error: true, message: "Last Name is required" };
      if (password.length < 7)
        return {
          error: true,
          message: "Password should have up to seven characters",
        };

      try {
        if (!terms)
          return { error: true, message: "Accept terms and condition" };
        const response = await fetch("http://localhost:5002/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password, status }),
        });
        if (!response.ok) {
          const error = await response.json();
          return { error: true, message: error.message };
        }
        return {
          message:
            "User created sucessfully, check your email for verification",
        };
      } catch (err) {
        throw json({ status: 400 }, { message: err.message });
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
    localStorage.setItem("token", data.token);
    await window.location.reload();
    return redirect("/");
  } catch (err) {
    throw err;
  }
};

export const fetchPosts = async () => {
  try {
    const response = await fetch("http://localhost:5002/api/stories");
    if (!response.ok) throw new Error("An error occured getting posts");
    const data = await response.json();
    if (!response.ok) throw new Error("An error occured fetching posts");
    return data.data;
  } catch (error) {
    throw error;
  }
};

export const fetchVideos = async () => {
  try {
    const response = await fetch("http://localhost:5002/api/videos");
    if (!response.ok) throw new Error("An error occured getting videos");
    const data = await response.json();
    return data.data;
  } catch (error) {
    throw error;
  }
};

export const videosApiCalls = async ({ request }) => {
  switch (request.method) {
    case "PUT": {
      let formData = await request.formData();
      const title = formData.get("title");
      const imageUrl = formData.get("imgUrl");
      const body = formData.get("body");
      const topic = formData.get("topic");
      const id = formData.get("id");
      try {
        const response = await fetch("http://localhost:5002/api/videos/" + id, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ title, imageUrl, body, topic }),
        });

        if (!response.ok) {
          const error = await response.json();
          return { error: true, message: error.message };
        }
        await window.location.reload();
        return "Post edit sucessfully";
      } catch (err) {
        throw json({ status: 400 }, { message: err.message });
      }
    }
    default:
      return;
  }
};

export const fetchPostsAndVideos = async () => {
  try {
    const posts = await fetchPosts();
    const videos = await fetchVideos();
    return { posts, videos };
  } catch {
    throw json(
      { message: "Server down. An error occured fetching blogs" },
      { status: 500 }
    );
  }
};

export const fetchAdmins = async () => {
  try {
    const response = await fetch("http://localhost:5002/api/admins", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      const error = await response.json();
      return { error: true, message: error.message };
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw json({ status: 400 }, { message: error.message });
  }
};

export const sendComments = async ({ request }) => {
  let formData = await request.formData();
  const comment = formData.get("comment");
  const id = formData.get("id");
  try {
    const response = await fetch("http://localhost:5002/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ comment, id }),
    });
    if (!response.ok) {
      const error = await response.json();
      return { error: true, message: error.message };
    }
    return {
      message: "Comment Added!",
    };
  } catch (err) {
    throw json({ status: 400 }, { message: err.message });
  }
};
