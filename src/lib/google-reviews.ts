export interface GoogleReview {
  author_name: string;
  author_url: string;
  profile_photo_url: string;
  rating: number;
  text: string;
  relative_time_description: string;
}

export async function getGoogleReviews(): Promise<GoogleReview[]> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.NEXT_PUBLIC_PLACE_ID;

  if (!apiKey || !placeId) {
    console.error("Google API Key or Place ID not found");
    return [];
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&reviews_sort=newest&key=${apiKey}&language=id`;
    
    // next fetch caching: cache for 24 hours (86400 seconds)
    const response = await fetch(url, {
      next: { revalidate: 86400 }
    });

    const data = await response.json();

    if (data.result && data.result.reviews) {
      return data.result.reviews.filter((r: GoogleReview) => r.rating >= 4 && r.text);
    }
    
    return [];
  } catch (error) {
    console.error("Failed to fetch Google reviews:", error);
    return [];
  }
}
