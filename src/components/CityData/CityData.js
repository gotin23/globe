import paris from "../../Assets/paris.jpg";
import tower from "../../Assets/eiffel-tower.jpg";
import beach from "../../Assets/beach.jpeg";
import slumBombay from "../../Assets/slumBombay.webp";

const dataCity = [
  {
    city: "Barcelona",
    lat: 41.385064,
    lng: 2.173404,
    size: 15,
  },

  {
    city: "Paris",
    lat: 48.866667,
    lng: 2.333333,
    popu: 2.161,
    evolutionPop: [2.9, 2.8, 2.7, 2.8, 2.7, 2.3, 2.1, 2.1, 2.1, 2.2, 2.1],
    ageOfPop: [13.6, 45.7, 18.5, 22.2],
    percentageOfPoor: 15.2,
    pics: [paris, tower],
    size: 15,
    description: `The inhabitants of Paris, also known as "Parisians," are diverse in terms of ethnicity, culture, and socioeconomic background. The city has a long history of immigration, and many different nationalities and ethnicities are represented among its residents. Many Parisians are fluent in multiple languages and have a cosmopolitan outlook. Paris is also known for its well-educated population, with many residents having attended prestigious universities. Despite the city's reputation for being expensive, there are also many working-class neighborhoods with a mix of long-time residents and recent immigrants. Parisians are known for their love of art, culture, and fashion, and the city is famous for its museums, galleries, and fashion boutiques.`,
  },

  {
    city: "Bombay",
    lat: 19.0759837,
    lng: 72.8776559,
    size: 15,
    popu: 22,
    evolutionPop: [1.2, 1.2, 1.6, 2.9, 4.1, 5.9, 8.2, 9.9, 16.3, 18.4, 20.4],
    ageOfPop: [22, 48, 17, 13],
    percentageOfPoor: 55,
    pics: [slumBombay, beach],
    description:
      "Bombay, also known as Mumbai, is the capital city of the Indian state of Maharashtra. Located on the west coast of India, it is one of the largest and most populous cities in the country. With its bustling streets, towering skyscrapers, and vibrant culture, Bombay is a true melting pot of Indian and colonial heritage. From the historic Gateway of India and the iconic Taj Mahal Palace Hotel, to the thriving film industry of Bollywood, Bombay has something to offer for everyone. Whether you re looking to experience the rich history and architecture of the city, sample delicious street food, or simply soak up the energy and excitement of this bustling metropolis, Bombay is a must-visit destination in India.",
  },

  {
    city: "New York",
    lat: 40.712784,
    lng: -74.005941,
    size: 15,
  },
];
export default dataCity;
