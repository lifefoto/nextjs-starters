import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import DesignSystemPage from "./page"

describe("DesignSystemPage", () => {
  it("should render Dropdown Menu section", () => {
    render(<DesignSystemPage />)
    expect(screen.getByText("Dropdown Menu")).toBeInTheDocument()
  })

  it("should render Context Menu section", () => {
    render(<DesignSystemPage />)
    expect(screen.getByText("Context Menu")).toBeInTheDocument()
  })

  it("should render all major sections", () => {
    render(<DesignSystemPage />)

    const expectedSections = [
      "Buttons - Variants",
      "Buttons - Sizes",
      "Badge",
      "Card",
      "Alert",
      "Skeleton",
      "Separator",
      "Avatar",
      "Tooltip",
      "Toast / Sonner",
      "Input",
      "Sheet",
      "Dropdown Menu",
      "Context Menu",
      "Breadcrumb",
      "Chart (recharts)",
    ]

    for (const section of expectedSections) {
      expect(screen.getByText(section)).toBeInTheDocument()
    }
  })

  it("should render without errors", () => {
    expect(() => render(<DesignSystemPage />)).not.toThrow()
  })
})
