$(document).ready(function() {
    // Define your list of diseases
    var diseases = [
        // A
        "Acute Flaccid Myelitis (AFM)",
        "Adenovirus",
        "Anthrax",
        "Avian Influenza",
        // B
        "Botulism",
        "Blue-Green Algae",
        "Brucellosis",
        // C
        "Campylobacteriosis",
        "Chagas Disease (American trypanosomiasis)",
        "Chickenpox",
        "Chikungunya",
        "Cholera",
        "Congenital Rubella Syndrome",
        "COVID-19 (Coronavirus Disease 2019)",
        "Creutzfeldt-Jakob Disease",
        "Cryptosporidiosis",
        "Cyclosporiasis",
        "Cytomegalovirus",
        // D
        "Dengue Fever",
        "Diphtheria",
        // E
        "E. coli",
        "Ebola Virus Disease",
        "Ehrlichiosis",
        "Enteroviruses",
        // F
        "Fifth Disease",
        // G
        "Giardiasis",
        // H
        "Haemophilus Influenzae Invasive Disease",
        "Hand, Foot, and Mouth Disease",
        "Hantavirus",
        "Head Lice",
        "Heartland Virus",
        "Hemolytic Uremic Syndrome",
        "Hepatitis A",
        // I
        "Influenza",
        // L
        "Legionellosis",
        "Leprosy (Hansen's Disease)",
        "Leptospirosis",
        "Listeriosis",
        "Lyme Disease",
        // M
        "Malaria",
        "Marburg Virus Disease",
        "Measles (Rubeola)",
        "Meningitis",
        "Meningococcal Disease",
        "Molluscum Contagiosum",
        "Mpox",
        "Mononucleosis",
        "Mumps",
        // N
        "Norovirus",
        // P
        "Pertussis",
        "Plague",
        "Polio (polio myelitis)",
        "Primary Amebic Meningoencephalitis (PAM)",
        "Psittacosis",
        // Q
        "Q Fever",
        // R
        "Rabies",
        "Reye Syndrome",
        "Ringworm",
        "Rocky Mountain Spotted Fever",
        "Rotavirus",
        "Rubella (German Measles)",
        // S
        "Salmonellosis",
        "Scabies",
        "Shiga toxin-producing E. coli (STEC)",
        "Shigellosis",
        "Shingles",
        "Smallpox",
        "Southern Tick-Associated Rash Illness (STARI)",
        "Streptococcus, group A, invasive disease",
        "Streptococcus pneumoniae, invasive disease",
        "Tetanus",
        "Toxoplasmosis",
        "Trichinellosis",
        "Tuberculosis",
        "Tularemia",
        "Typhoid Fever",
        "Vibrio species",
        "West Nile Virus",
        "Yellow Fever",
        "Zika Virus"
      
    ];

    // Initialize Autocomplete
    $("#medicalHistory").autocomplete({
      source: diseases,
      select: function(event, ui) {
        addTag(ui.item.value);
        // Clear the input after selecting an item
        $("#medicalHistory").val("");
        return false; // Prevent the input value from being inserted
      }
    });
    $("#symptoms").autocomplete({
        source:diseases,
        select:function(event,ui){
            addTag(ui.item.value);
            $("#medicalHistory").val("");
            return false;
        }
    })

    function addTag(value) {
      // Create a tag with a remove button
      var tag = $('<div class="tag">' + value + '<span class="remove-tag" onclick="removeTag(this)">x</span></div>');
      // Append the tag to the container
      $("#tagList").append(tag);
    }
    function addTag(value) {
        // Create a tag with a remove button
        var tag = $('<div class="tag">' + value + '<span class="remove-tag" onclick="removeTag(this)">x</span></div>');
        // Append the tag to the container
        $("#symptomsTagList").append(tag);
      }
  

    // Function to remove a tag
    window.removeTag = function(element) {
      $(element).parent().remove();
    };
  });