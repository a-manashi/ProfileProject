export function TerminalVisual() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-line bg-[#0a0c0f] shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="size-2.5 rounded-full bg-[#3d444d]" />
        <span className="size-2.5 rounded-full bg-[#3d444d]" />
        <span className="size-2.5 rounded-full bg-[#3d444d]" />
        <p className="ml-2 font-mono text-[11px] tracking-wide text-mute">
          system.architect — inspect
        </p>
      </div>

      <div className="space-y-3 px-4 py-5 font-mono text-[12px] leading-6 text-mute sm:text-[13px]">
        <p>
          <span className="text-accent">abdul@systems</span>
          <span className="text-ink">:~$</span> architect --inspect
        </p>
        <p className="text-terminal/80">analyzing stack ................ done</p>

        <div className="grid grid-cols-[7.5rem_1fr] gap-x-3 gap-y-1 pt-2 text-ink/90">
          <span className="text-mute">backend</span>
          <span>python · django · fastapi</span>
          <span className="text-mute">frontend</span>
          <span>react · next.js</span>
          <span className="text-mute">database</span>
          <span>postgresql · mysql</span>
          <span className="text-mute">cloud</span>
          <span>aws · docker · nginx</span>
          <span className="text-mute">workflow</span>
          <span>ai-assisted</span>
        </div>

        <div className="border-t border-line pt-3">
          <p>
            <span className="text-mute">uptime</span>
            <span className="ml-6 text-ink">10+ years</span>
          </p>
          <p>
            <span className="text-mute">status</span>
            <span className="ml-6 text-terminal">ready</span>
            <span className="cursor-blink ml-1 text-accent">▍</span>
          </p>
        </div>
      </div>
    </div>
  );
}
