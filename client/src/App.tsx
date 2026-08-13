import { useState } from "react";
import { checkSystem, Category } from "./api.js";

// UI states: idle, loading, success, error.
type UiState = "idle" | "loading" | "success" | "error";

export default function App() {
  const [state, setState] = useState<UiState>("idle");
  const [categories, setCategories] = useState<Category[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleCheck() {
    setState("loading");
    setErrorMessage("");
    try {
      const result = await checkSystem();
      if (result.online) {
        setCategories(result.categories);
        setState("success");
      }
    } catch (err: any) {
      setErrorMessage(err?.message || "Backend API is unavailable");
      setState("error");
    }
  }

  return (
    <div className="container py-5" style={{ maxWidth: 640 }}>
      <h1 className="h3 mb-4">
        TokTickIT <span className="text-success">IT Service Desk</span>
      </h1>

      <button className="btn btn-success" onClick={handleCheck} disabled={state === "loading"}>
        {state === "loading" ? "Loading…" : "Check System"}
      </button>

      {state === "success" && (
        <div className="alert alert-success mt-3" role="status">
          <div><strong>Status:</strong> Online</div>
          {categories.length > 0 && (
            <ul className="mt-2 mb-0">
              {categories.map((cat) => (
                <li key={cat.id}>{cat.name}</li>
              ))}
            </ul>
          )}
        </div>
      )}

      {state === "error" && (
        <div className="alert alert-danger mt-3" role="alert">
          <div><strong>Status:</strong> Offline</div>
          <div>{errorMessage || "Backend API is unavailable"}</div>
        </div>
      )}
    </div>
  );
}
