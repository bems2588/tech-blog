console.log("JS loaded")

document.getElementById("create-post").addEventListener("click", function (event) {
  event.preventDefault()
  var postContent = document.getElementById("post-content").value
  console.log(postContent, "post");
  fetch('/api/post', {
    body: JSON.stringify({
      content: postContent,
    }),
    method: "POST"
  }).then(response => {
    console.log(response)
    location.replace("/")
  }).catch(err => {
    console.log("Unable to post data", err)
  })
});