"use server";

export const categoryEmoji = (category: string) => {
  switch (category) {
    case "Books":
      return "📚";
    case "Tech":
      return "👩‍💻";
    case "Traveling":
      return "🌍";
    case "Photography":
      return "📸";
    case "General":
      return "🪶";
    default:
      return "📃";
  }
};
