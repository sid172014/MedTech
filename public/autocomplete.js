$(document).ready(function () {
  const diseases = [];


  // Initialize Autocomplete
  $("#history").autocomplete({
    source: diseases,
    select: function (event, ui) {
      // Add selected item to the tag list
      addTag(ui.item.value);
      return false; // Prevent the input value from being inserted
    }
  });

  function addTag(value) {
    // Create a tag with a fade-in animation and a remove button
    var tag = $('<div class="tag" style="display:none;">' + value + '<span class="remove-tag" onclick="removeTag(this)">x</span></div>');
    // Append the tag to the container
    $("#tagList").append(tag);

    // Fade in the tag
    tag.fadeIn("fast");
  }

  // Function to remove a tag
  window.removeTag = function (element) {
    $(element).parent().fadeOut("fast", function () {
      $(this).remove();
    });
  };

  function handleSubmit() {
    // Get form values
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;

    // Get medical history from tag list
    var history = $("#tagList").children(".tag").map(function () {
      return $(this).text().slice(0, -1); // Remove the 'x' from the tag
    }).get().join(", ");

    // Display output
    var outputElement = document.getElementById('output');
    outputElement.innerHTML = `Name: ${name}<br>Age: ${age}<br>Medical History: ${history}`;

    // Slide animation
    var form = document.getElementById('inputForm');
    form.style.transition = "1s";
    form.style.transform = "translateX(-10%)";

    var outputBox = document.getElementById('outputBox');
    outputBox.classList.remove('hidden');
  }

  function goBack() {
    var form = document.getElementById('inputForm');
    form.style.transition = "1s";
    form.style.transform = "translateX(0)";

    var outputBox = document.getElementById('outputBox');
    outputBox.classList.add('hidden');
  }

  // Event listener for form submission
  $("#inputForm").submit(function (event) {
    event.preventDefault();
    handleSubmit();
  });

  // Check if there are elements in the tag list, and adjust textarea requirement
  function checkTagList() {
    var tagList = $("#tagList");
    var historyTextArea = $("#history");

    if (tagList.children().length > 0) {
      // If there are elements in the tag list, make the textarea non-mandatory
      historyTextArea.prop("required", false);
    } else {
      // If there are no elements in the tag list, make the textarea mandatory
      historyTextArea.prop("required", true);
    }
  }

  // Event listener for changes in the tag list
  $("#tagList").on("DOMSubtreeModified", function () {
    checkTagList();
  });

  // Check the initial state
  checkTagList();

  // Event listener for goBack button click
  $("#goBackButton").click(function () {
    goBack();
  });
});

$(document).ready(function () {
  const diseases = [];
  axios.get('http://localhost:3000/illness')
    .then(function (response) {
      // Handle success: Log the response data to the console
      response.data.map((data) => {
        diseases.push(data.condition);
      })
    })
    .catch(function (error) {
      // Handle error: Log the error to the console
      console.error(error);
    });

  // Initialize Autocomplete
  $("#history").autocomplete({
    source: diseases,
    select: function (event, ui) {
      addTag(ui.item.value);
      // Clear the input after selecting an item
      $("#history").val("");
      return false; // Prevent the input value from being inserted
    }
  });

  function addTag(value) {
    // Create a tag with a remove button
    var tag = $('<div class="tag">' + value + '<span class="remove-tag" onclick="removeTag(this)">x</span></div>');
    // Append the tag to the container
    $("#tagList").append(tag);
  }

  // Function to remove a tag
  window.removeTag = function (element) {
    $(element).parent().remove();
  };
});
