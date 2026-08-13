import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../../src/App.js";
import * as api from "../../src/api.js";

describe("App", () => {
  // WORKED EXAMPLE — provided for you.
  it("renders the TokTickIT heading", () => {
    render(<App />);
    expect(screen.getByText(/TokTickIT/i)).toBeInTheDocument();
  });

  it("shows Online and the seeded categories on success", async () => {
    const mockCategories = [
      { id: 1, name: "Account and Access" },
      { id: 2, name: "Hardware" },
      { id: 3, name: "Software" },
      { id: 4, name: "Network" },
    ];
    vi.spyOn(api, "checkSystem").mockResolvedValueOnce({
      online: true,
      categories: mockCategories,
    });

    render(<App />);
    const button = screen.getByRole("button", { name: /Check System/i });
    fireEvent.click(button);

    expect(await screen.findByText(/Online/i)).toBeInTheDocument();
    expect(screen.getByText("Account and Access")).toBeInTheDocument();
    expect(screen.getByText("Hardware")).toBeInTheDocument();
    expect(screen.getByText("Software")).toBeInTheDocument();
    expect(screen.getByText("Network")).toBeInTheDocument();
  });

  it("shows an Offline error message when the API is unavailable", async () => {
    vi.spyOn(api, "checkSystem").mockRejectedValueOnce(
      new Error("Backend API is unavailable")
    );

    render(<App />);
    const button = screen.getByRole("button", { name: /Check System/i });
    fireEvent.click(button);

    expect(await screen.findByText(/Offline/i)).toBeInTheDocument();
    expect(screen.getByText("Backend API is unavailable")).toBeInTheDocument();
  });
});

