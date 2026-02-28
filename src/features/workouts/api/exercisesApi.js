import axios from "axios";

const fetchExercise = async () => {
  const localStorageKey = "exerciseNames";
  const cachedData = localStorage.getItem(localStorageKey);
  if (cachedData) {
    try {
      return JSON.parse(cachedData);
    } catch (err) {
      console.warn("Failed to parse cached exercise data, refetching...", err);
      // Continue to fetch from API if parsing fails
    }
  }

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
      allName.push(...namesFromApi);
      url = response.data.next;
      localStorage.setItem(localStorageKey, JSON.stringify(allName));
    }
  } catch (error) {
    console.error("Faild to fetch exercises: ", error);
    throw error;
  }

  return allName;
};

export default fetchExercise;
