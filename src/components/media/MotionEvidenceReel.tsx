'use client';

type MotionEvidenceReelProps = {
  labels: string[];
};

export default function MotionEvidenceReel({ labels }: MotionEvidenceReelProps) {
  const steps = labels.slice(0, 3);

  return (
    <div className="motion-reel" aria-hidden="true">
      <div className="motion-reel__stage">
        <span className="motion-reel__beam" />
        <span className="motion-reel__node motion-reel__node--source" />
        <span className="motion-reel__node motion-reel__node--context" />
        <span className="motion-reel__node motion-reel__node--ai" />
        <span className="motion-reel__path motion-reel__path--one" />
        <span className="motion-reel__path motion-reel__path--two" />
        <div className="motion-reel__cards">
          {steps.map((label, index) => (
            <span key={label} style={{ animationDelay: `${index * 520}ms` }}>
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
