"use server";

export const categoryImage = (category: string) => {
  switch (category) {
    case "Books":
      return "/images/books.jpg";
    case "Tech":
      return "/images/react.jpg";
    case "Traveling":
      return "/images/scenary.jpg";
    case "Photography":
      return "/images/photo.jpeg";
    case "General":
      return "/images/general.jpg";
    default:
      return "/images/scenary.jpg";
  }
};
