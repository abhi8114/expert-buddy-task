export const mockCards = [
  { "id": 1, "subject": "Mathematics", "type": "Essay", "words": 500, "content": "An introduction to calculus and its applications." },
  { "id": 2, "subject": "Science", "type": "Report", "words": 1800, "content": "A study on the impact of climate change on marine ecosystems." },
  { "id": 3, "subject": "History", "type": "Article", "words": 6000, "content": "The fall of the Roman Empire and its long-term effects on Europe." },
  { "id": 4, "subject": "English", "type": "Essay", "words": 700, "content": "A literary analysis of Shakespeare's Hamlet." },
  { "id": 5, "subject": "Science", "type": "Report", "words": 800, "content": "The role of photosynthesis in sustaining life on Earth." },
  { "id": 6, "subject": "Mathematics", "type": "Report", "words": 1200, "content": "Understanding probability and its applications in real-world scenarios." },
  { "id": 7, "subject": "English", "type": "Essay", "words": 900, "content": "Exploring modern poetry and its influence on contemporary literature." },
  { "id": 8, "subject": "History", "type": "Article", "words": 7500, "content": "A deep dive into the Industrial Revolution and its societal impact." },
  { "id": 9, "subject": "Science", "type": "Report", "words": 1500, "content": "The structure and function of the human brain." },
  { "id": 10, "subject": "Mathematics", "type": "Essay", "words": 600, "content": "An exploration of fractals and their occurrence in nature." },
  { "id": 11, "subject": "English", "type": "Essay", "words": 1100, "content": "The evolution of the English language over the centuries." },
  { "id": 12, "subject": "Science", "type": "Report", "words": 2000, "content": "Space exploration and the search for extraterrestrial life." },
  { "id": 13, "subject": "History", "type": "Article", "words": 5000, "content": "World War II: Causes, events, and consequences." },
  { "id": 14, "subject": "Mathematics", "type": "Essay", "words": 1300, "content": "The Pythagorean Theorem and its applications in geometry." },
  { "id": 15, "subject": "Science", "type": "Report", "words": 900, "content": "Understanding genetic inheritance and DNA sequencing." },
  { "id": 16, "subject": "History", "type": "Article", "words": 4500, "content": "The Renaissance period and its contributions to art and science." },
  { "id": 17, "subject": "English", "type": "Essay", "words": 950, "content": "The importance of storytelling in human culture." },
  { "id": 18, "subject": "Science", "type": "Report", "words": 2100, "content": "The development and future of renewable energy sources." },
  { "id": 19, "subject": "Mathematics", "type": "Essay", "words": 1400, "content": "Exploring the concept of infinity in mathematics." },
  { "id": 20, "subject": "History", "type": "Article", "words": 7000, "content": "The American Civil War and its impact on modern democracy." }
]
  export async function GET() {
    return new Response(JSON.stringify(mockCards), {
      headers: { "Content-Type": "application/json" },
    });
  }
  