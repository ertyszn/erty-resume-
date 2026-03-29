import React from "react"; import { Card, CardContent } from "@/components/ui/card"; import { Button } from "@/components/ui/button"; import { motion } from "framer-motion";

export default function ResumeWebsite() { return ( <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white p-6 md:p-12"> <div className="max-w-6xl mx-auto space-y-12">

{/* HERO */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col md:flex-row md:items-center md:justify-between gap-6"
    >
      <div className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Edeh Linus Daniel
        </h1>
        <p className="text-lg text-blue-400">
          Community Manager • Growth Strategist • Web3 Moderator
        </p>
        <p className="text-gray-400 max-w-xl">
          I build, grow, and manage high-performing Web3 communities across
          Telegram, Discord, and X — turning attention into real adoption.
        </p>

        <div className="flex gap-4">
          <Button className="rounded-2xl">Hire Me</Button>
          <Button variant="outline" className="rounded-2xl">
            View Resume
          </Button>
        </div>
      </div>

      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center text-2xl font-bold">
        EL
      </div>
    </motion.div>

    {/* STATS */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[
        { label: "Communities Managed", value: "6+" },
        { label: "Users Supported", value: "500+" },
        { label: "Platforms", value: "Telegram • Discord • X" },
        { label: "Experience", value: "Web3 Native" }
      ].map((stat, i) => (
        <Card key={i} className="bg-zinc-900 border-none rounded-2xl">
          <CardContent className="p-4">
            <p className="text-xl font-semibold">{stat.value}</p>
            <p className="text-xs text-gray-400">{stat.label}</p>
          </CardContent>
        </Card>
      ))}
    </div>

    {/* ABOUT */}
    <Card className="bg-zinc-900 border-none rounded-2xl">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-3">About</h2>
        <p className="text-gray-400 leading-relaxed">
          Experienced Community Manager and Growth Marketing Strategist
          specializing in Web3 ecosystems. Proven ability to scale
          communities, drive engagement, and provide real-time user support.
          I focus on building trust, increasing retention, and turning
          communities into loyal ecosystems.
        </p>
      </CardContent>
    </Card>

    {/* SKILLS */}
    <Card className="bg-zinc-900 border-none rounded-2xl">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-4">Skills</h2>
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <h3 className="text-blue-400 mb-2">Community</h3>
            <ul className="space-y-1 text-gray-400">
              <li>Telegram & Discord Moderation</li>
              <li>Onboarding & Support</li>
              <li>Conflict Resolution</li>
            </ul>
          </div>
          <div>
            <h3 className="text-blue-400 mb-2">Growth</h3>
            <ul className="space-y-1 text-gray-400">
              <li>Campaign Strategy</li>
              <li>Engagement Systems</li>
              <li>Visibility Optimization</li>
            </ul>
          </div>
          <div>
            <h3 className="text-blue-400 mb-2">Soft Skills</h3>
            <ul className="space-y-1 text-gray-400">
              <li>Communication</li>
              <li>Problem Solving</li>
              <li>Team Collaboration</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>

    {/* EXPERIENCE */}
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Experience</h2>

      {[
        {
          role: "Community Moderator & Chat Support",
          company: "MUDTM",
          impact: "Managed and supported 500+ users, driving engagement and retention."
        },
        {
          role: "Lead Community Support",
          company: "Mahoni Coin",
          impact: "Boosted engagement and maintained active community interactions."
        },
        {
          role: "Community Manager",
          company: "Niko Official",
          impact: "Led communication strategy and improved user experience."
        },
        {
          role: "Community & Growth Contributor",
          company: "Nexu AI",
          impact: "Built community foundation and improved project visibility."
        }
      ].map((job, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="bg-zinc-900 border-none rounded-2xl hover:scale-[1.02] transition">
            <CardContent className="p-5">
              <h3 className="text-lg font-semibold">
                {job.role} — {job.company}
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                {job.impact}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>

    {/* CTA */}
    <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-none rounded-2xl">
      <CardContent className="p-8 text-center space-y-4">
        <h2 className="text-2xl font-semibold">
          Let’s Build Something Big
        </h2>
        <p className="text-sm text-gray-200">
          Open to community manager, moderator, and growth roles in Web3.
        </p>
        <Button className="bg-white text-black rounded-2xl">
          Contact Me
        </Button>
      </CardContent>
    </Card>

    {/* FOOTER */}
    <div className="text-center text-gray-500 text-sm pt-10">
      © {new Date().getFullYear()} Edeh Linus Daniel • Web3 Portfolio
    </div>
  </div>
</div>

); }
