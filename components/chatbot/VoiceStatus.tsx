type VoiceStatusProps = {
  status: string;
  transcript?: string;
};

export function VoiceStatus({ status, transcript }: VoiceStatusProps) {
  if (!status && !transcript) return null;

  return (
    <div className="rounded-lg border border-line bg-canvas px-3 py-2">
      {status ? (
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
          {status}
        </p>
      ) : null}
      {transcript ? (
        <p className="mt-1 text-sm text-ink">&ldquo;{transcript}&rdquo;</p>
      ) : null}
    </div>
  );
}
