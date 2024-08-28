const postContainer = document.querySelector(".post-container");

function displayResults(posts) {
  postContainer.innerHTML = posts
    .map(
      (postItem) => `
    <div class="post-item">
    <h3>${postItem.title}</h3>
    <p>${postItem.body}</p>
    </div>
    `
    )
    .join(" ");
}

// API calling using XHR :

const apiUsingXHR = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
  xhr.responseType = "json";
  xhr.send();
  xhr.onload = () => {
    if (xhr.status === 200) {
      displayResults(xhr.response);
    } else {
      console.log("Error");
    }
  };
};

// API calling using fetch :
const apiUsingFetch = () => {
  const fetchRequest = fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  });

  fetchRequest
    .then((res) => res.json())
    .then((result) => displayResults(result))
    .catch((error) => console.log(error));
};

// API calling using async-await :
const apiUsingAsync = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  });

  const result = await response.json();
  displayResults(result);
};

// API using both XHR and async/await :
const helperMethod = (method, url) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = "json";
    xhr.send();

    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.response);
      } else {
        reject(xhr.response);
      }
    };
  });

  return promise;
};

const apiUsingXHRAsync = async () => {
  const response = await helperMethod(
    "GET",
    "https://jsonplaceholder.typicode.com/posts"
  );
  displayResults(response);
};

// apiUsingXHR();
// apiUsingFetch()
apiUsingXHRAsync();
