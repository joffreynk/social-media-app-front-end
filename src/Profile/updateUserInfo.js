import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../context/requests";

import "./createPost.css";

const CreatePost = () => {
  const { currentUser } = useContext(AuthContext);
  const [userData, setUserData] = useState({
    description: "",
    postImage: null,
  });
  const queryClient = useQueryClient();

  function resetFile() {
    const file = document.querySelector(".postImage");
    file.value = "";
  }
  const mutation = useMutation({
    queryKey: ["users"],
    mutationFn: (data) => {
      const formData = new FormData();
      formData.set("description", data.description);
      formData.set("postImage", data.postImage);
      return makeRequest.post("/posts", formData, {
        headers: {
          "Content-Type":
            "multipart/form-data; boundary=----WebKitFormBoundaryl75WdZW7JBJ8IQ0Y",
        },
      });
    },
    onSuccess: () => {
      setUserData({ ...userData, description: "" });
      resetFile();
      return queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  return (
    <div>
      <h1>Update your Information Details</h1>
      <form>
        <div>
          <label>First Name</label>
          <input
            type="text"
            value={currentUser.firstName}
            onChange={(e) =>
              setUserData({ ...userData, firstName: e.target.value })
            }
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            value={currentUser.lastName}
            onChange={(e) =>
              setUserData({ ...userData, lastName: e.target.value })
            }
          />
        </div>
        <div>
          <label>Website</label>
          <input
            type="text"
            value={currentUser.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            value={currentUser.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
        </div>


        

        <input
          type="file"
          accept="image/*"
          className="postImage"
          onChange={(e) =>
            setUserData({ ...userData, postImage: e.target.files[0] })
          }
          name="postImage"
          alt="choose picture"
        />
        <textarea
          rows={4}
          value={userData.description}
          placeholder="what is in your mind"
          name="description"
          onChange={(e) =>
            setUserData({ ...userData, description: e.target.value })
          }
        ></textarea>
        <input
          type="file"
          accept="image/*"
          className="postImage"
          onChange={(e) =>
            setUserData({ ...userData, postImage: e.target.files[0] })
          }
          name="postImage"
          alt="choose picture"
        />
        <button
          type="button"
          onClick={() => {
            mutation.mutate(userData);
          }}
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
