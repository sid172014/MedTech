$(document).ready(function () {
  const diseases = [];
  const userInputs = [];  // Concatenates the tests picked up by the user
  // Function to add a tag
  function addTag(value) {
    // Pushing all the condition values to the array
    userInputs.push(value);
    var tag = $('<div class="tag">' + value + '<span class="remove-tag" onclick="removeTag(this)">x</span></div>');
    $("#tagList").append(tag);
  }

  // Function to remove a tag
  window.removeTag = function (element) {
    $(element).parent().remove();
  };

  // Event listener for form submission
  $("#inputForm").submit(function (event) {
    event.preventDefault();
    handleSubmit();
  });

  // Event listener for goBack button click
  $("#goBackButton").click(function () {
    goBack();
  });

  // Check if there are elements in the tag list, and adjust textarea requirement
  function checkTagList() {
    var tagList = $("#tagList");
    var historyTextArea = $("#history");

    if (tagList.children().length > 0) {
      historyTextArea.prop("required", false);
    } else {
      historyTextArea.prop("required", true);
    }
  }

  // Event listener for changes in the tag list
  $("#tagList").on("DOMSubtreeModified", function () {
    checkTagList();
  });

  // Function to handle form submission
  function handleSubmit() {
    var values = $("#tagList").text();
    console.log("Values ", values);

    var name = $("#name").val();
    var age = $("#age").val();

    // var history = $("#tagList").children(".tag").map(function () {
    //   return $(this).text().slice(0, -1);
    // }).get().join(", ");


    var tests_combined = [];
    axios.post('http://localhost:3000/getillness', {
      conditions: userInputs
    }).then((response) => {
      tests_combined = response.data;
      console.log(tests_combined);

      // Displaying the tests once the data has been fetched
      var outputElement = $("#output");
      outputElement.html(`Name: ${name}<br>Age: ${age}<br>Medical History: ${tests_combined[0]}`);

    }).catch((e) => {
      console.log(e.message);
    });


    var outputElement = $("#output");
    outputElement.html(`Name: ${name}<br>Age: ${age}<br>Medical History: ${tests_combined[0]}`);

    var form = $("#inputForm");
    form.css({ "transition": "1s", "transform": "translateX(-10%)" });

    var outputBox = $("#outputBox");
    outputBox.removeClass("hidden");
  }

  // Function to go back to the input form
  function goBack() {
    var form = $("#inputForm");
    form.css({ "transition": "1s", "transform": "translateX(0)" });

    var outputBox = $("#outputBox");
    outputBox.addClass("hidden");
  }

  // Initialize Autocomplete and fetch diseases from the server
  axios.get('http://localhost:3000/illness')
    .then(function (response) {
      response.data.map((data) => {
        diseases.push(data.condition);
      });

      $("#history").autocomplete({
        source: diseases,
        select: function (event, ui) {
          addTag(ui.item.value);
          $("#history").val("");
          return false;
        }
      });
    })
    .catch(function (error) {
      console.error(error);
    });
});
