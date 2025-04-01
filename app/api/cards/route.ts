export const mockCards = [
    { id: 1, subject: "Mathematics", type: "Essay", words: 500 },
    { id: 2, subject: "Science", type: "Report", words: 800 },
    { id: 5, subject: "Science", type: "Report", words: 800 },
    { id: 6, subject: "Science", type: "Report", words: 800 },
    { id: 7, subject: "Science", type: "Report", words: 800 },
    { id: 8, subject: "Science", type: "Report", words: 800 },
    { id: 9, subject: "Science", type: "Report", words: 800 },
    { id: 10, subject: "Science", type: "Report", words: 800 },
    { id: 11, subject: "Science", type: "Report", words: 800 },
    { id: 3, subject: "History", type: "Article", words: 600 },
    { id: 4, subject: "English", type: "Essay", words: 700 },
  ];
  
  export async function GET() {
    return new Response(JSON.stringify(mockCards), {
      headers: { "Content-Type": "application/json" },
    });
  }
  