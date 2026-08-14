import { cn } from "@/lib/cn";
import type { AvatarState } from "@/lib/chat/types";

type AIAvatarProps = {
  state: AvatarState;
};

export function AIAvatar({ state }: AIAvatarProps) {
  return (
    <div
      className={cn("avatar-stage relative mx-auto", `avatar-${state}`)}
      aria-hidden
    >
      <svg viewBox="0 0 200 200" className="h-[150px] w-[150px] md:h-[220px] md:w-[220px]">
        <defs>
          <radialGradient id="avatar-field" cx="50%" cy="48%" r="48%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.18" />
            <stop offset="70%" stopColor="#22d3ee" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
          </radialGradient>
          <filter id="avatar-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="2.4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <circle cx="100" cy="100" r="78" fill="url(#avatar-field)" className="avatar-field" />
        <circle
          cx="100"
          cy="100"
          r="72"
          fill="none"
          stroke="#22d3ee"
          strokeOpacity="0.28"
          strokeWidth="1"
          className="avatar-ring"
        />
        <circle
          cx="100"
          cy="100"
          r="62"
          fill="none"
          stroke="#22d3ee"
          strokeOpacity="0.12"
          strokeWidth="0.6"
          strokeDasharray="3 7"
          className="avatar-orbit"
        />

        <path
          d="M58 78 C70 54, 130 54, 142 78"
          fill="none"
          stroke="#22d3ee"
          strokeOpacity="0.22"
          strokeWidth="0.7"
        />
        <path
          d="M64 128 C80 146, 120 146, 136 128"
          fill="none"
          stroke="#22d3ee"
          strokeOpacity="0.16"
          strokeWidth="0.7"
        />

        <g filter="url(#avatar-glow)" className="avatar-eyes">
          <circle cx="78" cy="92" r="4.2" fill="#22d3ee" />
          <circle cx="122" cy="92" r="4.2" fill="#22d3ee" />
        </g>

        <g className="avatar-mouth">
          <path
            d="M88 118 C96 122, 104 122, 112 118"
            fill="none"
            stroke="#22d3ee"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </g>

        <g className="avatar-waveform" stroke="#22d3ee" strokeLinecap="round">
          <line x1="70" y1="162" x2="70" y2="168" strokeWidth="1.2" />
          <line x1="80" y1="158" x2="80" y2="172" strokeWidth="1.2" />
          <line x1="90" y1="160" x2="90" y2="170" strokeWidth="1.2" />
          <line x1="100" y1="156" x2="100" y2="174" strokeWidth="1.2" />
          <line x1="110" y1="160" x2="110" y2="170" strokeWidth="1.2" />
          <line x1="120" y1="158" x2="120" y2="172" strokeWidth="1.2" />
          <line x1="130" y1="162" x2="130" y2="168" strokeWidth="1.2" />
        </g>

        <circle cx="46" cy="70" r="1.2" fill="#22d3ee" className="avatar-particle p1" />
        <circle cx="156" cy="64" r="1" fill="#22d3ee" className="avatar-particle p2" />
        <circle cx="164" cy="118" r="1.1" fill="#22d3ee" className="avatar-particle p3" />
        <circle cx="40" cy="124" r="0.9" fill="#22d3ee" className="avatar-particle p4" />
      </svg>
    </div>
  );
}
