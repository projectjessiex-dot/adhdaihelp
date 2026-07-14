"use client";

import React, { useState } from "react";
import { HeartIcon, BrainIcon, SparkleIcon, SunIcon, CloudIcon, FlameIcon, LeafIcon } from "@/components/Icons";
import ToolIcon from "@/components/ToolIcon";

type Emotion = {
  id: string;
  label: string;
  icon: React.ReactNode;
  color: string;
  suggestions: string[];
};

const emotions: Emotion[] = [
  {
    id: "anxious",
    label: "Anxious",
    icon: <CloudIcon size={24} />,
    color: "var(--orange)",
    suggestions: [
      "Take 5 deep breaths — breathe in for 4 counts, out for 6",
      "Name 5 things you can see, 4 you can touch, 3 you can hear",
      "Write down what's making you anxious (even one word helps)",
      "Remember: this feeling will pass. It's not permanent.",
    ],
  },
  {
    id: "overwhelmed",
    label: "Overwhelmed",
    icon: <BrainIcon size={24} />,
    color: "var(--sage-dark)",
    suggestions: [
      "Pick just ONE thing. Not everything — just one.",
      "Set a timer for 5 minutes and do nothing but exist",
      "Drink some water. Often we mistake overwhelm for thirst.",
      "Permission to pause. You don't have to do everything right now.",
    ],
  },
  {
    id: "frustrated",
    label: "Frustrated",
    icon: <FlameIcon size={24} />,
    color: "var(--red)",
    suggestions: [
      "Step away for 2 minutes. Physical distance helps.",
      "Shake your hands — literally release the tension",
      "Ask yourself: Is this worth my energy right now?",
      "Channel it: squeeze a pillow, go for a quick walk.",
    ],
  },
  {
    id: "sad",
    label: "Sad",
    icon: <HeartIcon size={24} />,
    color: "var(--blue)",
    suggestions: [
      "It's okay to feel sad. Don't push it away.",
      "Put on music you love — even if you don't feel like it",
      "Text someone: 'Having a rough day' — you don't have to explain",
      "Be gentle with yourself. This too shall pass.",
    ],
  },
  {
    id: "stuck",
    label: "Stuck",
    icon: <LeafIcon size={24} />,
    color: "var(--sage)",
    suggestions: [
      "Do something small and physical: stand up, stretch, walk to the window",
      "Write down the problem in 3 words or less",
      "Ask: What's the tiniest next step?",
      "Sometimes stuck is a signal to rest, not push harder.",
    ],
  },
  {
    id: "neutral",
    label: "Okay",
    icon: <SunIcon size={24} />,
    color: "var(--text-muted)",
    suggestions: [
      "Great! Use this window to do something small you've been putting off.",
      "Check in with yourself again in a few hours.",
      "Notice what made this moment okay — patterns matter.",
      "You're doing fine.",
    ],
  },
];

const groundingExercise = [
  "Name 5 things you can see around you",
  "Notice 4 things you can physically feel",
  "Name 3 sounds you can hear",
  "Identify 2 things you can smell",
  "Notice 1 taste in your mouth",
];

export default function EmotionCheckIn() {
  const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null);
  const [intensity, setIntensity] = useState<number>(5);
  const [note, setNote] = useState("");
  const [showResult, setShowResult] = useState(false);

  const currentEmotion = emotions.find((e) => e.id === selectedEmotion);

  const handleSubmit = () => {
    if (selectedEmotion) {
      setShowResult(true);
    }
  };

  const handleReset = () => {
    setSelectedEmotion(null);
    setIntensity(5);
    setNote("");
    setShowResult(false);
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
            Emotion Check-In
          </h1>
          <p className="text-lg leading-relaxed max-w-lg mx-auto" style={{ color: "var(--text-secondary)" }}>
            How are you feeling right now? Name it. Rate it. Get grounded.
          </p>
        </div>

        {!showResult ? (
          <>
            {/* Step 1: Select Emotion */}
            <div className="mb-8">
              <p className="text-sm font-semibold mb-4" style={{ color: "var(--text-primary)" }}>
                1. What emotion is showing up?
              </p>
              <div className="grid grid-cols-3 gap-3">
                {emotions.map((emotion) => (
                  <button
                    key={emotion.id}
                    onClick={() => setSelectedEmotion(emotion.id)}
                    className={`rounded-xl border p-4 flex flex-col items-center gap-2 transition-all ${
                      selectedEmotion === emotion.id ? "ring-2" : ""
                    }`}
                    style={{
                      background: selectedEmotion === emotion.id ? "var(--warm-card)" : "var(--surface-dark-elevated)",
                      borderColor: selectedEmotion === emotion.id ? emotion.color : "rgba(160,157,150,0.15)",
                      ["--tw-ring-color" as string]: emotion.color,
                    }}
                  >
                    <div style={{ color: emotion.color }}>{emotion.icon}</div>
                    <span className="text-sm font-medium" style={{ color: "var(--on-dark)" }}>
                      {emotion.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Intensity */}
            {selectedEmotion && (
              <div className="mb-8">
                <p className="text-sm font-semibold mb-4" style={{ color: "var(--text-primary)" }}>
                  2. How intense is it? (1 = mild, 10 = overwhelming)
                </p>
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>Mild</span>
                  <div className="flex-1 flex gap-1">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                      <button
                        key={n}
                        onClick={() => setIntensity(n)}
                        className="flex-1 h-10 rounded-lg border text-sm font-medium transition-all"
                        style={{
                          background: intensity === n ? (n <= 3 ? "var(--sage)" : n <= 6 ? "var(--orange)" : "var(--red)") : "var(--surface-dark-elevated)",
                          borderColor: intensity === n ? "transparent" : "rgba(160,157,150,0.15)",
                          color: intensity === n ? "#fff" : "var(--on-dark)",
                        }}
                      >
                        {n}
                      </button>
                    ))}
                  </div>
                  <span className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>Intense</span>
                </div>
              </div>
            )}

            {/* Step 3: Optional Note */}
            {selectedEmotion && (
              <div className="mb-8">
                <p className="text-sm font-semibold mb-3" style={{ color: "var(--text-primary)" }}>
                  3. Want to add a word or two? (optional)
                </p>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="What's on your mind?"
                  className="w-full h-24 rounded-xl border p-4 text-sm resize-none"
                  style={{
                    background: "var(--surface-dark-elevated)",
                    borderColor: "rgba(160,157,150,0.15)",
                    color: "var(--on-dark)",
                  }}
                />
              </div>
            )}

            {/* Submit */}
            {selectedEmotion && (
              <div className="text-center">
                <button
                  onClick={handleSubmit}
                  className="px-8 py-3 rounded-lg font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ background: "var(--sage)" }}
                >
                  Check In →
                </button>
              </div>
            )}
          </>
        ) : (
          /* Results */
          <div className="space-y-6">
            {/* Summary */}
            <div className="rounded-2xl border p-6 text-center" style={{ background: "var(--warm-card)", borderColor: "var(--warm-border)" }}>
              <p className="text-sm mb-2" style={{ color: "var(--text-muted)" }}>
                You're feeling
              </p>
              <div className="flex items-center justify-center gap-3 mb-2">
                <span style={{ color: currentEmotion?.color }}>{currentEmotion?.icon}</span>
                <h2 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
                  {currentEmotion?.label}
                </h2>
              </div>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                at intensity {intensity}/10
              </p>
              {note && (
                <p className="mt-4 text-sm italic" style={{ color: "var(--text-secondary)" }}>
                  "{note}"
                </p>
              )}
            </div>

            {/* High intensity grounding */}
            {intensity >= 7 && (
              <div className="rounded-2xl border p-6" style={{ background: "var(--surface-dark-elevated)", borderColor: "var(--orange)" }}>
                <h3 className="font-bold mb-4 flex items-center gap-2" style={{ color: "var(--orange)" }}>
                  <SparkleIcon size={18} />
                  Grounding Exercise
                </h3>
                <p className="text-sm mb-4" style={{ color: "var(--on-dark)" }}>
                  When emotions feel too big, try this 5-4-3-2-1 exercise:
                </p>
                <ol className="space-y-2">
                  {groundingExercise.map((step, i) => (
                    <li key={i} className="flex gap-3 text-sm" style={{ color: "var(--on-dark)" }}>
                      <span className="font-bold" style={{ color: "var(--orange)" }}>{5 - i}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {/* Suggestions */}
            <div className="rounded-2xl border p-6" style={{ background: "var(--warm-card)", borderColor: "var(--warm-border)" }}>
              <h3 className="font-bold mb-4" style={{ color: "var(--text-primary)" }}>
                Suggestions for you
              </h3>
              <ul className="space-y-3">
                {currentEmotion?.suggestions.map((suggestion, i) => (
                  <li key={i} className="flex gap-3 text-sm" style={{ color: "var(--text-secondary)" }}>
                    <span className="text-var(--sage)">•</span>
                    {suggestion}
                  </li>
                ))}
              </ul>
            </div>

            {/* Check in again */}
            <div className="text-center">
              <button
                onClick={handleReset}
                className="text-sm font-medium underline"
                style={{ color: "var(--text-muted)" }}
              >
                Check in again →
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
