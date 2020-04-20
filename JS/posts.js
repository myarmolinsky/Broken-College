let data = [
  {
    location: "Ingersoll Hall, men's bathroom 2nd floor",
    problem: "Nasty broken toilet",
    image: "../Resources/nastyBrokenToilet.jpg",
    upvotes: 124,
    downvotes: 16,
    upvoted: false,
    downvoted: false,
  },
  {
    location: "Boylan Hall, by front door",
    problem: "Broken window",
    image: "../Resources/brokenWindow.jpg",
    upvotes: 12,
    downvotes: 43,
    upvoted: false,
    downvoted: false,
  },
];

function loadPosts() {
  container = document.getElementById("container");
  while (document.getElementById("post") !== null) {
    container.removeChild(document.getElementById("post"));
  }
  for (let i = 0; i < data.length; i++) {
    container.innerHTML =
      container.innerHTML +
      '<div class="card" id="post">        <div class="card-body">          <div class="row">            <div class="col-md-3">              <label for="location" style="font-weight: bold;">                Location:              </label>            </div>            <div class="col-md-5">              <span id="location">' +
      data[i].location +
      '</span>            </div>          </div>          <hr />          <div class="row">            <div class="col-md-3 form-group">              <label style="font-weight: bold;">Problems:</label>            </div>            <div class="col-md-8">              <span id="problem">' +
      data[i].problem +
      '</span>            </div>          </div>          <hr />          <div class="row">            <div class="col-md-12 form-group">              <span id="images"><img src="' +
      data[i].image +
      '"/> </span>            </div>          </div>          <div class="row">            <button              class="btn btn-primary"              onclick="upvote(' +
      i +
      ')"              style="margin-left: 1%; margin-right: 1%;"            >              +' +
      data[i].upvotes +
      '            </button>            <button class="btn btn-primary" onclick="downvote(' +
      i +
      ')">              -' +
      data[i].downvotes +
      "            </button>          </div>        </div>      </div>";
  }
}

function upvote(id) {
  if (!data[id].upvoted) {
    data[id].upvotes++;
    data[id].upvoted = true;
    if (data[id].downvoted) {
      data[id].downvotes--;
      data[id].downvoted = false;
    }
  }
  loadPosts();
}

function downvote(id) {
  if (!data[id].downvoted) {
    data[id].downvotes++;
    data[id].downvoted = true;
    if (data[id].upvoted) {
      data[id].upvotes--;
      data[id].upvoted = false;
    }
  }
  loadPosts();
}
