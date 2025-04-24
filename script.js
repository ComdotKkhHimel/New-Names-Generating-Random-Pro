let nameData = {};

fetch('final_random_name_generator.json')
  .then(response => response.json())
  .then(data => {
    nameData = data;
  });

document.getElementById('generate').addEventListener('click', () => {
  const gender = document.getElementById('gender').value;
  const nameList = gender === 'male' ? nameData.random_male_names : nameData.random_female_names;
  if (!nameList || nameList.length === 0) {
    document.getElementById('result').textContent = 'Loading names...';
    return;
  }
  const randomName = nameList[Math.floor(Math.random() * nameList.length)];
  document.getElementById('result').textContent = randomName;
});
