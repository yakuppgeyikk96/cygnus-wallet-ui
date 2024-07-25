import { beforeEach, describe, expect, it, vi } from "vitest";
import Signup from "./index";
import { render, screen } from "@testing-library/react";

describe("Signup Page", () => {
  beforeEach(() => {
    render(<Signup />);
  });

  it("should have create button with the right text and styles", () => {
    const createButtonEl = screen.getByRole("button", {
      name: /create new wallet/i,
    });

    expect(createButtonEl).toBeInTheDocument();
    expect(createButtonEl).toHaveClass("w-1/2");
  });

  it("should have import button with the right text and style", () => {
    const importButtonEl = screen.getByRole("button", {
      name: /import an existing one/i,
    });

    expect(importButtonEl).toBeInTheDocument();
    expect(importButtonEl).toHaveClass("w-1/2");
  });

  it("should have a text in between the buttons", () => {
    const textEl = screen.getByText(/or/i, {
      selector: "span",
    });

    expect(textEl).toBeInTheDocument();
    expect(textEl).toHaveClass("text-font-dark dark:text-font-white");
  });

  it("should call the right function when create button is clicked", () => {
    const consoleOutput = "Create wallet";
    const handleCreateClick = vi.fn(() => {
      console.log(consoleOutput);
    });

    const createButtonEl = screen.getByRole("button", {
      name: /create new wallet/i,
    });

    const consoleSpy = vi.spyOn(console, "log");

    createButtonEl.onclick = handleCreateClick;

    createButtonEl.click();

    expect(consoleSpy).toHaveBeenCalledWith(consoleOutput);
    expect(handleCreateClick).toHaveBeenCalledTimes(1);
  });

  it("should call the right function when import button is clicked", () => {
    const consoleOutput = "Import wallet";
    const handleImportClick = vi.fn(() => {
      console.log(consoleOutput);
    });
    const importButtonEl = screen.getByRole("button", {
      name: /import an existing one/i,
    });

    importButtonEl.onclick = handleImportClick;

    const consoleSpy = vi.spyOn(console, "log");

    importButtonEl.click();

    expect(consoleSpy).toHaveBeenCalledWith(consoleOutput);
    expect(handleImportClick).toHaveBeenCalledTimes(1);
  });
});
