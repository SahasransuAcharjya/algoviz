// algoviz-frontend/components/AnimationPlayer.tsx
import React, { useState, useEffect } from 'react';

interface AnimationStep {
  type: string;
  data: any;
}

interface AnimationPlayerProps {
  animations: AnimationStep[];
}

export default function AnimationPlayer({ animations }: AnimationPlayerProps) {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (animations.length === 0) return;

    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % animations.length);
    }, 1500); // adjust delay for each animation step

    return () => clearInterval(interval);
  }, [animations]);

  if (animations.length === 0)
    return <p>No animations available for this lesson.</p>;

  const step = animations[currentStep];

  // Render animation frame based on step type and data.
  // This is a stub - replace with actual rendering logic for your animation type.
  return (
    <div className="p-4 border rounded bg-gray-100">
      <p>Step {currentStep + 1} of {animations.length}</p>
      <pre className="whitespace-pre-wrap text-sm">{JSON.stringify(step, null, 2)}</pre>
    </div>
  );
}
