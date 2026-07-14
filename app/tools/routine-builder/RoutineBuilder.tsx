"use client";

import React, { useState } from "react";
import { PlusIcon, TrashIcon, GripIcon, SunIcon, MoonIcon, ClockIcon, SparkleIcon } from "@/components/Icons";
import ToolIcon from "@/components/ToolIcon";

type RoutineType = "morning" | "focus" | "evening";

type RoutineItem = {
  id: string;
  text: string;
  duration?: string;
};

type Routine = {
  type: RoutineType;
  title: string;
  icon: React.ReactNode;
  color: string;
  items: RoutineItem[];
};

const defaultRoutines: Routine[] = [
  {
    type: "morning",
    title: "Morning Routine",
    icon: <SunIcon size={20} />,
    color: "var(--orange)",
    items: [
      { id: "1", text: "Drink water", duration: "1 min" },
      { id: "2", text: "Stretch or light movement", duration: "5 min" },
      { id: "3", text: "Review top 3 tasks for today", duration: "2 min" },
    ],
  },
  {
    type: "focus",
    title: "Focus Session",
    icon: <ClockIcon size={20} />,
    color: "var(--sage)",
    items: [
      { id: "1", text: "Clear workspace", duration: "1 min" },
      { id: "2", text: "Set timer for 25 min", duration: "25 min" },
      { id: "3", text: "One task only", duration: "until done" },
    ],
  },
  {
    type: "evening",
    title: "Evening Routine",
    icon: <MoonIcon size={20} />,
    color: "var(--blue)",
    items: [
      { id: "1", text: "Review tomorrow's top 3 tasks", duration: "3 min" },
      { id: "2", text: "Prepare tomorrow's clothes/items", duration: "5 min" },
      { id: "3", text: "Wind down activity", duration: "15 min" },
    ],
  },
];

export default function RoutineBuilder() {
  const [routines, setRoutines] = useState<Routine[]>(defaultRoutines);
  const [activeTab, setActiveTab] = useState<RoutineType>("morning");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newItemText, setNewItemText] = useState("");

  const currentRoutine = routines.find((r) => r.type === activeTab);

  const addItem = () => {
    if (!newItemText.trim()) return;
    
    setRoutines((prev) =>
      prev.map((r) =>
        r.type === activeTab
          ? {
              ...r,
              items: [...r.items, { id: Date.now().toString(), text: newItemText.trim() }],
            }
          : r
      )
    );
    setNewItemText("");
  };

  const removeItem = (itemId: string) => {
    setRoutines((prev) =>
      prev.map((r) =>
        r.type === activeTab
          ? { ...r, items: r.items.filter((i) => i.id !== itemId) }
          : r
      )
    );
  };

  const updateItem = (itemId: string, text: string) => {
    setRoutines((prev) =>
      prev.map((r) =>
        r.type === activeTab
          ? {
              ...r,
              items: r.items.map((i) => (i.id === itemId ? { ...i, text } : i)),
            }
          : r
      )
    );
  };

  return (
    <div className="px-4 py-14" style={{ background: "var(--warm-bg)" }}>
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-5">
            <ToolIcon name="focus-timer" size={28} containerSize={56} />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3" style={{ color: "var(--text-primary)" }}>
            Routine Builder
          </h1>
          <p className="text-lg leading-relaxed max-w-lg mx-auto" style={{ color: "var(--text-secondary)" }}>
            Build daily routines that actually work with your brain. 
            Keep it simple. Keep it consistent.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 justify-center">
          {routines.map((routine) => (
            <button
              key={routine.type}
              onClick={() => setActiveTab(routine.type)}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all flex items-center gap-2 ${
                activeTab === routine.type ? "ring-2" : ""
              }`}
              style={{
                background: activeTab === routine.type ? routine.color : "var(--surface-dark-elevated)",
                color: activeTab === routine.type ? "#fff" : "var(--text-secondary)",
                ["--tw-ring-color" as string]: routine.color,
              }}
            >
              {routine.icon}
              {routine.title}
            </button>
          ))}
        </div>

        {/* Routine Items */}
        <div 
          className="rounded-2xl border p-6 mb-6" 
          style={{ background: "var(--warm-card)", borderColor: "var(--warm-border)" }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span style={{ color: currentRoutine?.color }}>
              {currentRoutine?.icon}
            </span>
            <h2 className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>
              {currentRoutine?.title}
            </h2>
          </div>

          <div className="space-y-3">
            {currentRoutine?.items.map((item, index) => (
              <div
                key={item.id}
                className="flex items-center gap-3 p-3 rounded-xl border"
                style={{
                  background: "var(--surface-dark-elevated)",
                  borderColor: "rgba(160,157,150,0.15)",
                }}
              >
                <span 
                  className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{ background: currentRoutine?.color, color: "#fff" }}
                >
                  {index + 1}
                </span>
                
                {editingId === item.id ? (
                  <input
                    type="text"
                    value={item.text}
                    onChange={(e) => updateItem(item.id, e.target.value)}
                    onBlur={() => setEditingId(null)}
                    onKeyDown={(e) => e.key === "Enter" && setEditingId(null)}
                    className="flex-1 bg-transparent border-none outline-none text-sm"
                    style={{ color: "var(--text-primary)" }}
                    autoFocus
                  />
                ) : (
                  <span 
                    className="flex-1 text-sm cursor-pointer"
                    style={{ color: "var(--text-primary)" }}
                    onClick={() => setEditingId(item.id)}
                  >
                    {item.text}
                  </span>
                )}
                
                <button
                  onClick={() => removeItem(item.id)}
                  className="p-1 rounded hover:bg-red-50 transition-colors"
                  style={{ color: "var(--text-muted)" }}
                >
                  <TrashIcon size={16} />
                </button>
              </div>
            ))}

            {/* Add new item */}
            <div
              className="flex items-center gap-3 p-3 rounded-xl border border-dashed"
              style={{
                borderColor: "rgba(160,157,150,0.3)",
              }}
            >
              <span 
                className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                style={{ background: "var(--text-muted)", color: "#fff" }}
              >
                +
              </span>
              <input
                type="text"
                value={newItemText}
                onChange={(e) => setNewItemText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addItem()}
                placeholder="Add a step..."
                className="flex-1 bg-transparent border-none outline-none text-sm"
                style={{ color: "var(--text-muted)" }}
              />
              <button
                onClick={addItem}
                className="p-1 rounded transition-colors"
                style={{ color: "var(--sage)" }}
              >
                <PlusIcon size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Tips */}
        <div 
          className="rounded-2xl border p-5"
          style={{ background: "var(--surface-dark-elevated)", borderColor: "rgba(160,157,150,0.15)" }}
        >
          <h3 className="text-sm font-bold mb-3 flex items-center gap-2" style={{ color: "var(--on-dark)" }}>
            <SparkleIcon size={16} style={{ color: "var(--sage)" }} />
            Tips for ADHD-friendly routines
          </h3>
          <ul className="space-y-2 text-xs" style={{ color: "var(--on-dark-soft)" }}>
            <li>• Start with 3 items max — you can add more later</li>
            <li>• Use event triggers instead of times ("after coffee" not "at 7am")</li>
            <li>• Keep it visible — print and put on your wall</li>
            <li>• Don't aim for perfection — consistency beats intensity</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
