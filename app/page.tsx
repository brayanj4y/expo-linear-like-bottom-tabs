"use client"

import { useState } from "react"
import {
  Box,
  CircleDot,
  FileStack,
  Home,
  Inbox,
  Rocket,
  Settings,
  Sparkles,
  Zap,
} from "lucide-react"

const menuItems = [
  { label: "Home", icon: Home },
  { label: "Inbox", icon: Inbox },
  { label: "My Issues", icon: CircleDot },
  { label: "Pulse", icon: Zap },
  { label: "View", icon: FileStack },
  { label: "Initiatives", icon: Rocket },
  { label: "Projects", icon: Box },
  { label: "Settings", icon: Settings },
]

const visibleItems = menuItems.slice(0, 3)

export default function Page() {
  const [expanded, setExpanded] = useState(false)
  const [selected, setSelected] = useState(2)

  const choose = (index: number) => {
    setSelected(index)
    setExpanded(false)
  }

  return (
    <main className="demo-page">
      <div className="demo-copy">
        <span className="eyebrow">Linear workspace</span>
        <h1>Move work forward.</h1>
        <p>Select a destination from the floating navigation below.</p>
      </div>

      {expanded && <button aria-label="Close navigation" className="scrim" onClick={() => setExpanded(false)} />}

      <nav className={`bottom-nav ${expanded ? "is-expanded" : ""}`} aria-label="Primary navigation">
        <div className="nav-surface">
          <div className="expanded-menu" aria-hidden={!expanded}>
            {menuItems.map(({ label, icon: Icon }, index) => (
              <button
                className={`menu-item ${selected === index ? "is-selected" : ""}`}
                key={label}
                onClick={() => choose(index)}
                tabIndex={expanded ? 0 : -1}
              >
                <span className="menu-icon"><Icon strokeWidth={2.2} /></span>
                <span>{label}</span>
              </button>
            ))}
          </div>

          <div className="compact-bar" aria-hidden={expanded}>
            {visibleItems.map(({ label, icon: Icon }, index) => (
              <button
                className={`tab-button ${selected === index ? "is-selected" : ""}`}
                key={label}
                aria-label={label}
                onClick={() => choose(index)}
                tabIndex={expanded ? -1 : 0}
              >
                <span className="tab-highlight" />
                <Icon strokeWidth={2.1} />
              </button>
            ))}
            <button
              className="tab-button menu-trigger"
              aria-label={expanded ? "Close menu" : "Open menu"}
              onClick={() => setExpanded((value) => !value)}
              tabIndex={expanded ? -1 : 0}
            >
              <span className="tab-highlight" />
              <Sparkles strokeWidth={2.1} />
            </button>
          </div>
        </div>
      </nav>
    </main>
  )
}
