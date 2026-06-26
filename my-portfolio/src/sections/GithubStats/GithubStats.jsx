import { motion } from "framer-motion";
import {
  Star,
  GitFork,
  Users,
  Activity,
  Terminal,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";
import { fetchGithubStats } from "../../utils/github";

export default function GithubStats() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGithubStats().then(data => {
      if (data) setStats(data);
      setLoading(false);
    });
  }, []);

  const displayStats = stats || {
    publicRepos: "50+",
    starredCount: "200+",
    followers: "100+",
    langDistribution: [
      { name: "JavaScript", percent: 45, color: "bg-yellow-400" },
      { name: "Python", percent: 30, color: "bg-blue-500" },
      { name: "HTML/CSS", percent: 15, color: "bg-orange-500" },
      { name: "Others", percent: 10, color: "bg-gray-500" },
    ],
    recentRepos: ["housie-multiplayer", "ai-dsa-instructor", "malwarescope", "mahabharath-ai"]
  };

  return (
    <section className="py-24 px-6 relative" id="github">
      <div className="container mx-auto">
        <div className="glass-card overflow-hidden border-blue/20">
          {/* Dashboard Header */}
          <div className="bg-blue/5 border-b border-white/10 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-blue/10 text-blue">
                <FaGithub className="w-8 h-8" />
              </div>

              <div>
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  GitHub <span className="text-blue">Command Center</span>
                </h2>

                <p className="text-white/40 text-sm font-mono">
                  USER@MASTANVALI9347:~$ {loading ? "loading_stats..." : "fetch_stats --success"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{displayStats.publicRepos}</div>
                <div className="text-[10px] uppercase text-white/30 tracking-widest">
                  Repositories
                </div>
              </div>

              <div className="text-center border-l border-white/10 pl-6">
                <div className="text-2xl font-bold text-white">{loading ? "..." : (stats ? "Real-time" : "Static")}</div>
                <div className="text-[10px] uppercase text-white/30 tracking-widest">
                  Commit Sync
                </div>
              </div>

              <div className="text-center border-l border-white/10 pl-6">
                <div className="text-2xl font-bold text-white">{displayStats.starredCount}</div>
                <div className="text-[10px] uppercase text-white/30 tracking-widest">
                  Stars
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Side */}
            <div className="lg:col-span-4 space-y-8">
              <div className="glass p-6 rounded-2xl border-white/5">
                <h3 className="text-sm font-semibold mb-6 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-blue" />
                  Language Distribution
                </h3>

                <div className="space-y-4">
                  {displayStats.langDistribution.map((lang) => (
                    <div key={lang.name}>
                      <div className="flex justify-between text-xs mb-1.5 text-white/60">
                        <span>{lang.name}</span>
                        <span>{lang.percent}%</span>
                      </div>

                      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{
                            width: `${lang.percent}%`,
                          }}
                          transition={{ duration: 1 }}
                          className={`h-full ${lang.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass p-6 rounded-2xl border-white/5">
                <h3 className="text-sm font-semibold mb-2">
                  Contribution Activity
                </h3>

                <p className="text-2xl font-bold text-blue-400 mb-4">
                  Active Coding
                </p>

                <div className="flex items-end gap-1 h-20">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{
                        height: `${20 + Math.random() * 80}%`,
                      }}
                      transition={{ duration: 0.5 }}
                      className="flex-1 bg-blue-500/40 rounded-t-sm"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              <div className="glass p-6 rounded-2xl border-white/5 overflow-x-auto">
                <h3 className="text-sm font-semibold mb-6">
                  Contribution Visualizer
                </h3>

                <div className="grid grid-cols-[repeat(52,1fr)] gap-1 min-w-175">
                  {Array.from({ length: 364 }).map((_, i) => {
                    const level = Math.floor(Math.random() * 5);

                    const colors = [
                      "bg-white/5",
                      "bg-blue-500/20",
                      "bg-blue-500/40",
                      "bg-blue-500/60",
                      "bg-blue-500/80",
                    ];

                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: i * 0.001 }}
                        className={`aspect-square rounded-sm ${colors[level]}`}
                      />
                    );
                  })}
                </div>

                <div className="mt-4 flex justify-end items-center gap-2 text-[10px] text-white/30">
                  <span>Less</span>

                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-white/5 rounded-sm" />
                    <div className="w-2 h-2 bg-blue-500/20 rounded-sm" />
                    <div className="w-2 h-2 bg-blue-500/40 rounded-sm" />
                    <div className="w-2 h-2 bg-blue-500/60 rounded-sm" />
                    <div className="w-2 h-2 bg-blue-500/80 rounded-sm" />
                  </div>

                  <span>More</span>
                </div>
              </div>

              <div className="glass p-6 rounded-2xl border-white/5 flex-1">
                <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-yellow-400" />
                  Current Active Projects
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {displayStats.recentRepos.map((repo) => (
                    <div
                      key={repo}
                      className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between group cursor-pointer hover:bg-white/10 transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                          <Terminal className="w-4 h-4" />
                        </div>

                        <span className="text-sm font-medium">
                          {repo}
                        </span>
                      </div>

                      <GitFork className="w-4 h-4 text-white/20 group-hover:text-yellow-400 transition-colors" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}