//your JS code here. If required.
<script>
    // Array of animal names in the specified order
    var animals = [
      'camel',
      'cheetah',
      'elephant',
      'gorilla',
      'koala',
      'lion',
      'polar_bear',
      'tiger',
      'wolf'
    ];
 
    // Function to create and append image elements to the container
    function renderAnimalPhotos() {
      var container = document.getElementById('animal-photos');
 
      animals.forEach(function(animal) {
        var image = document.createElement('img');
        image.src = 'https://www2.d125.org/applied_arts/teched/courses/WEB/portfolios/2014_FallP8/Rami_Portfolio_Period8/unit4_css/project_1folder/cssProject1/' + animal + '.jpg';
        image.alt = animal;
        image.className = 'animal-photo';
        container.appendChild(image);
      });
    }
 
    // Call the function to render the animal photos
    renderAnimalPhotos();
  </script>