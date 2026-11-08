import React from "react";
import { useNavigate } from "react-router";
import { GithubIcon } from "~/assets/icons/github";
import { ArrowUpRight, FileText } from "lucide-react";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#eeeeee] bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Brand */}
        <button onClick={() => navigate("/")} className="group flex items-center gap-2.5">
          <span className="text-[15px] font-semibold tracking-tight text-[#171717]">
            Arkadina<span className="text-[#2563eb]"></span>
          </span>
        </button>

        {/* Actions */}
        <nav className="flex items-center gap-2">
          <a
            href="https://github.com/Arkadina"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex size-9 items-center justify-center rounded-lg text-[#737373] transition-all hover:bg-[#f5f5f5] hover:text-[#171717]"
          >
            <GithubIcon size={18} />
          </a>

          <div className="mx-1 h-5 w-px bg-[#eeeeee]" />

          <button
            onClick={() => navigate("/cv.pdf")}
            className="group flex h-9 items-center gap-2 rounded-lg border border-[#e5e5e5] bg-white px-3.5 text-[13px] font-medium text-[#262626] transition-all hover:border-[#d4d4d4] hover:bg-[#fafafa] active:scale-[0.98]"
          >
            <FileText size={15} className="text-[#737373]" />
            Curriculum Vitae
            <ArrowUpRight
              size={14}
              className="text-[#a3a3a3] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
