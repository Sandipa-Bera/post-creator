import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useState from "react";
//This page is only used to create a post and it will be used in the App component. We will create a form that will take the title and content of the post and then we will submit the form to create a new post.
// CreatePost component is used to create a new post and it will be used in the CreatePost component.
//Basically we are creatimg a form that will take the title and content of the post and then we will submit the form to create a new post.
//the accept attribute is used to specify the types of files that the server accepts. In this case, we are accepting only image files. The name attribute is used to specify the name of the input field. The required attribute is used to specify that the input field is required and the placeholder attribute is used to specify a short hint that describes the expected value of the input field.
//the required attribute is used to specify that the input field is required and the placeholder attribute is used to specify a short hint that describes the expected value of the input field. The textarea element is used to create a multi-line text input field. The button element is used to create a button that will submit the form when clicked. The type attribute is used to specify the type of the button, in this case, it is set to "submit" which means that when the button is clicked, the form will be submitted.
//after all this we will render this component in the App component and we will also add a route for this component in the App component so that we can navigate to this page when we want to create a new post. We will also add a link to this page in the home page so that we can easily navigate to this page from the home page. We will also add some styling to this page to make it look better. We will use CSS for styling and we will create a separate CSS file for this component. We will also add some basic validation to the form to ensure that the user enters valid data before submitting the form. We will also handle the form submission and send the data to the server to create a new post. We will use Axios for making HTTP requests to the server. We will also handle the response from the server and display appropriate messages to the user based on the response. We will also handle any errors that may occur during the form submission process and display appropriate error messages to the user. Overall, this CreatePost component will provide a user-friendly interface for creating new posts in our application.
//Axios is a promise-based HTTP client for the browser and Node.js. It provides a simple and easy-to-use API for making HTTP requests and handling responses. It also supports features like interceptors, request cancellation, and automatic JSON parsing. We will use Axios to send the form data to the server when the user submits the form to create a new post. We will also handle the response from the server and display appropriate messages to the user based on the response. We will also handle any errors that may occur during the form submission process and display appropriate error messages to the user.
const CreatePost = () => {



  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true); // START loading

  const formData = new FormData(e.target);

  axios.post('http://localhost:3000/create-post', formData)
    .then(response => {
      alert('Post created successfully');
      e.target.reset();
      navigate('/feed');
    })
    .catch(error => {
      alert('Error creating post: ' + error.message);
    })
    .finally(() => {
      setLoading(false); // STOP loading
    });
};


  return (
    <section className = "create-post-section" > 
    <h1>Create a New Post</h1>
    <form className = "create-post-form" onSubmit={handleSubmit}>
      <input type="file" name="image" disabled={loading} />
      <input type="text" name="caption" disabled={loading} />
      <button type="submit" disabled={loading}>
        {loading ? <span className="loader"></span> : "Create Post"}
      </button>
    </form>
    </section>
    
  );
};

export default CreatePost;