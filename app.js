function updateCities() {
    // Get the selected state
    var selectedState = document.getElementById("state").value;
    
    // Get the city dropdown
    var cityDropdown = document.getElementById("city");
    
    // Clear existing options
    cityDropdown.innerHTML = "";
    
    // Add new options based on the selected state
    if (selectedState === "Florida") {
      var floridaCities = ["Miami", "Orlando", "Tampa"];
      addOptions(cityDropdown, floridaCities);
    } else if (selectedState === "Georgia") {
      var georgiaCities = ["Atlanta", "Savannah", "Athens"];
      addOptions(cityDropdown, georgiaCities);
    }
  }

  function addOptions(selectElement, options) {
    for (var i = 0; i < options.length; i++) {
      var option = document.createElement("option");
      option.text = options[i];
      selectElement.add(option);
    }
  }