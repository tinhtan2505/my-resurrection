const domain = "http://localhost:8080/";

export const checkTokenValidity = async (): Promise<boolean> => {
  const token = localStorage.getItem("token");

  if (!token) return false;

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const requestOptions: RequestInit = {
    method: "GET",
    headers: new Headers(headers),
  };

  try {
    const response = await fetch(
      domain + "api/auth/check-token",
      requestOptions
    );
    return response.status === 200; // Token hợp lệ nếu status code là 200
  } catch (error) {
    console.error("Token không hợp lệ hoặc hết hạn:", error);
    return false;
  }
};
