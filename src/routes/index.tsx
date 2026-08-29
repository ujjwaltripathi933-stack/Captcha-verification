import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Shield,
  Plus,
  RefreshCw,
  Check,
  ChevronRight,
  Lock,
  LayoutGrid,
  Wallet,
  User,
  Gem,
  Signal,
  Wifi,
  BatteryFull,
} from "lucide-react";
import bg from "@/assets/crypto-bg.jpg";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Verify to Earn Gems | Veloop Rewards" },
      {
        name: "description",
        content:
          "Complete CAPTCHA verification to claim your gem reward in the Veloop crypto rewards app.",
      },
      { property: "og:title", content: "Verify to Earn Gems | Veloop Rewards" },
      {
        property: "og:description",
        content: "Complete CAPTCHA verification to claim your gem reward.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const OPTIONS = ["H2H89U", "A2HB9U", "H2HB9U", "H2H8YU"];

function Captcha() {
  return (
    <svg viewBox="0 0 320 92" className="h-full w-full" role="img" aria-label="CAPTCHA code H2HB9U">
      <defs>
        <linearGradient id="capbg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f1eefc" />
        </linearGradient>
      </defs>
      <rect width="320" height="92" fill="url(#capbg)" />
      {Array.from({ length: 14 }).map((_, i) => (
        <path
          key={`w${i}`}
          d={`M0 ${8 + i * 6} C 60 ${2 + i * 6}, 120 ${16 + i * 6}, 190 ${6 + i * 6} S 300 ${14 + i * 6}, 320 ${9 + i * 6}`}
          stroke="#c9c2e8"
          strokeWidth="0.7"
          fill="none"
          opacity="0.75"
        />
      ))}
      {Array.from({ length: 5 }).map((_, i) => (
        <line
          key={`l${i}`}
          x1={4 + i * 17}
          y1={80 - i * 13}
          x2={300 - i * 25}
          y2={10 + i * 15}
          stroke="#8d84b8"
          strokeWidth="0.9"
          opacity="0.55"
        />
      ))}
      {Array.from({ length: 90 }).map((_, i) => (
        <circle
          key={`d${i}`}
          cx={(i * 37) % 318}
          cy={(i * 61) % 90}
          r={0.6}
          fill="#5d5580"
          opacity="0.4"
        />
      ))}
      <g fill="#0d0c14" fontFamily="Georgia, 'Times New Roman', serif" fontSize="58" fontWeight="700">
        {"H2HB9U".split("").map((ch, i) => (
          <text
            key={i}
            x={22 + i * 47}
            y={66}
            transform={`rotate(${[-9, 6, -4, 9, -7, 5][i]} ${30 + i * 44} 58) skewX(${[6, -8, 4, -5, 7, -6][i]})`}
          >
            {ch}
          </text>
        ))}
      </g>
      <path
        d="M10 62 C 80 40, 150 76, 230 48 S 300 60, 316 44"
        stroke="#1b1a26"
        strokeWidth="1.4"
        fill="none"
        opacity="0.6"
      />
    </svg>
  );
}

function Index() {
  const [selected, setSelected] = useState("H2HB9U");

  return (
    <main className="flex min-h-screen w-full justify-center bg-ink">
      <div className="relative h-[850px] w-[390px] overflow-hidden bg-ink">
        <img
          src={bg}
          alt=""
          aria-hidden="true"
          width={784}
          height={1712}
          className="pointer-events-none absolute inset-0 h-full w-full scale-[1.1] translate-y-[9%] object-cover opacity-95"
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_60%_at_50%_0%,transparent_10%,oklch(0.05_0.03_275/0.55)_60%,oklch(0.04_0.02_275/0.9)_100%)]" />

        <div className="relative flex h-full flex-col px-5 pt-3">
          {/* Status bar */}
          <div className="flex items-center justify-between text-foreground">
            <span className="text-[15px] font-semibold tracking-tight text-white">9:41</span>
            <div className="flex items-center gap-1.5 text-white">
              <Signal size={15} strokeWidth={2.5} />
              <Wifi size={15} strokeWidth={2.5} />
              <BatteryFull size={19} strokeWidth={2} />
            </div>
          </div>

          {/* Pills */}
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-md">
              <Shield size={13} className="text-mint" strokeWidth={2.6} />
              <span className="text-[11px] font-medium text-white/90">Secure Verification</span>
              <span className="h-1.5 w-1.5 rounded-full bg-mint shadow-[0_0_8px_2px_oklch(0.75_0.16_165/0.8)]" />
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 py-1.5 pl-3 pr-1.5 backdrop-blur-md">
              <Gem
                size={14}
                className="text-neon-violet drop-shadow-[0_0_6px_oklch(0.62_0.25_300/0.9)]"
                fill="currentColor"
              />
              <span className="text-[12px] font-semibold text-white">12,450</span>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10">
                <Plus size={11} className="text-white" strokeWidth={2.6} />
              </span>
            </div>
          </div>

          {/* Heading */}
          <div className="mt-[122px] text-center">
            <h1 className="text-gradient-heading text-[29px] font-extrabold leading-tight tracking-tight drop-shadow-[0_0_22px_oklch(0.55_0.2_280/0.55)]">
              Verify to Earn Gems
            </h1>
            <p className="mt-1.5 text-[12.5px] text-white/70">
              Complete verification to claim your reward
            </p>
          </div>

          {/* Card */}
          <section className="mx-auto mt-4 w-[300px] rounded-[23px] bg-card-soft p-[18px] shadow-[0_25px_60px_-15px_oklch(0.4_0.2_290/0.55)]">
            <div className="flex items-center justify-center gap-1.5">
              <Shield size={14} className="text-neon-violet" strokeWidth={2.5} />
              <h2 className="text-[14.5px] font-bold text-ink">CAPTCHA Verification</h2>
            </div>
            <p className="mt-1 text-center text-[10.5px] text-ink/50">
              Please select the correct code shown below
            </p>

            <div className="relative mt-3">
              <div className="h-[74px] overflow-hidden rounded-[10px] border border-black/5">
                <Captcha />
              </div>
              <span className="absolute -bottom-2.5 -right-1.5 flex h-[26px] w-[26px] items-center justify-center rounded-full bg-[oklch(0.72_0.16_165)] shadow-[0_4px_14px_oklch(0.72_0.16_165/0.6)]">
                <Check size={14} className="text-white" strokeWidth={3} />
              </span>
            </div>

            <div className="mt-4 flex items-center justify-center gap-1.5">
              <RefreshCw size={11} className="text-ink/40" strokeWidth={2.5} />
              <span className="text-[10.5px] text-ink/45">Refresh CAPTCHA</span>
            </div>

            <p className="mt-3.5 text-[11px] font-bold text-ink">Select the matching code</p>

            <div className="mt-2 grid grid-cols-2 gap-2.5">
              {OPTIONS.map((code) => {
                const active = code === selected;
                return (
                  <button
                    key={code}
                    onClick={() => setSelected(code)}
                    className={
                      active
                        ? "relative flex h-[42px] items-center justify-center gap-1.5 rounded-[11px] border-2 border-[oklch(0.6_0.22_300)] bg-[oklch(0.96_0.03_305)] text-[12.5px] font-bold text-ink shadow-[0_0_14px_oklch(0.6_0.22_300/0.35)]"
                        : "flex h-[42px] items-center justify-center rounded-[11px] border border-black/5 bg-[oklch(0.945_0.004_285)] text-[12.5px] font-bold text-ink"
                    }
                  >
                    {code}
                    {active && (
                      <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[oklch(0.6_0.22_300)]">
                        <Check size={11} className="text-white" strokeWidth={3.2} />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <button className="btn-cta-gradient mt-3.5 flex h-[46px] w-full items-center rounded-[13px] px-3.5">
              <Gem size={16} className="text-white" fill="currentColor" />
              <span className="flex-1 text-center text-[14px] font-bold text-white">
                Verify &amp; Claim Gems
              </span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                <ChevronRight size={14} className="text-white" strokeWidth={3} />
              </span>
            </button>

            <div className="mt-3.5 flex items-center justify-center gap-1.5">
              <Lock size={10} className="text-ink/40" strokeWidth={2.5} />
              <span className="text-[9.5px] text-ink/45">
                Your verification is secure and encrypted
              </span>
            </div>
          </section>
        </div>

        {/* Bottom nav */}
        <nav className="absolute inset-x-0 bottom-0 h-[94px] rounded-t-[26px] border-t border-white/10 bg-[oklch(0.09_0.03_275/0.85)] backdrop-blur-xl">
          <div className="grid h-full grid-cols-5 items-center px-2 pb-5">
            <NavItem icon={<LayoutGrid size={19} strokeWidth={2} />} label="Dashboard" />
            <NavItem
              icon={<Gem size={19} fill="currentColor" strokeWidth={2} />}
              label="Earn"
              active
            />
            <div />
            <NavItem icon={<Wallet size={19} strokeWidth={2} />} label="Wallet" />
            <NavItem icon={<User size={19} strokeWidth={2} />} label="Profile" />
          </div>

          <div className="absolute left-1/2 top-[26px] -translate-x-1/2 -translate-y-1/2">
            <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[oklch(0.09_0.03_275/0.9)] shadow-[0_0_34px_oklch(0.55_0.22_295/0.65)]">
              <div className="flex h-[62px] w-[62px] items-center justify-center rounded-full bg-[linear-gradient(150deg,oklch(0.72_0.18_235),oklch(0.55_0.24_300))] p-[3px]">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-[oklch(0.1_0.05_282)] p-[3px]">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-[radial-gradient(120%_120%_at_30%_20%,oklch(0.68_0.24_300),oklch(0.34_0.16_295))] shadow-[inset_0_1px_0_oklch(1_0_0/0.45),inset_0_-3px_8px_oklch(0.18_0.09_290/0.8)]">
                    <span className="text-[24px] font-extrabold leading-none text-white drop-shadow-[0_1px_4px_oklch(0.2_0.1_290/0.9)]">
                      V
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </main>
  );
}

function NavItem({
  icon,
  label,
  active,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <button className="flex flex-col items-center gap-1">
      <span
        className={
          active
            ? "text-neon-violet drop-shadow-[0_0_10px_oklch(0.62_0.25_300/0.9)]"
            : "text-white/55"
        }
      >
        {icon}
      </span>
      <span className={active ? "text-[9.5px] font-semibold text-white" : "text-[9.5px] text-white/55"}>
        {label}
      </span>
      {active && (
        <span className="h-[3px] w-5 rounded-full bg-neon-violet shadow-[0_0_8px_oklch(0.62_0.25_300/0.9)]" />
      )}
    </button>
  );
}
