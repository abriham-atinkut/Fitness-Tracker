import axios from "axios";

const fetchExercise = async () => {
  let url = "https://wger.de/api/v2/exerciseinfo/";
  let allName = [];

  try {
    while (url) {
      const response = await axios.get(url);
      // extract Engilsh name only
      const namesFromApi = response.data.results.map((exercise) => {
        const englishTranslation = exercise.translations.find(
          (translation) => translation.language === 2, // English language id
        );
        return englishTranslation?.name;
      });
      allName.push(...namesFromApi)
      // url = response.data.next;
      url = null;
    }
  } catch (error) {
    console.error("Faild to fetch exercises: ", error);
    throw error;
  }

  return allName;
};

export default fetchExercise;
