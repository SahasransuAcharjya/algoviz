// algoviz-frontend/utils/api.ts

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

export async function fetcher<T>(url: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${url}`, options);

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    const error = new Error(errorData.message || 'API request failed');
    throw error;
  }

  return res.json();
}
