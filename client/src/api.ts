const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3000";

export interface Category {
  id: number;
  name: string;
}

export interface SystemStatus {
  online: boolean;
  categories: Category[];
}

// Call the backend to check system health and fetch request categories.
// Throwing on failure lets the UI show a single Offline/error state.
export async function checkSystem(): Promise<SystemStatus> {
  let healthRes: Response;
  try {
    healthRes = await fetch(`${API_URL}/api/health`);
  } catch {
    throw new Error("Backend API is unavailable");
  }

  if (!healthRes.ok) {
    throw new Error("Backend API is unavailable");
  }

  let categoriesRes: Response;
  try {
    categoriesRes = await fetch(`${API_URL}/api/categories`);
  } catch {
    throw new Error("Backend API is unavailable");
  }

  if (!categoriesRes.ok) {
    throw new Error("Backend API is unavailable");
  }

  const categories: Category[] = await categoriesRes.json();
  return { online: true, categories };
}
