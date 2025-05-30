'use client';

import { motion } from 'framer-motion';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface Project {
  id: number;
  rank: number;
  project: string;
  overall: number;
  idea: number;
  tech: number;
  sophistication: number;
  presentation: number;
  summary: string;
}

export default function Home() {
  const { data, error } = useSWR('/api/leaderboard', fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen p-8 md:p-16"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="playfair text-5xl md:text-6xl font-normal text-black mb-4">
            HackTrack
          </h1>
          <p className="text-lg text-[#333] font-light">
            Shortlist hackathon YouTube videos with summaries, automated scores, and rankings
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl shadow-md p-6"
        >
          <div className="overflow-x-auto">
            <table className="leaderboard-table w-full">
              <thead>
                <tr className="text-left border-b">
                  <th className="px-4 py-2">Rank</th>
                  <th className="px-4 py-2">Project</th>
                  <th className="px-4 py-2">Overall</th>
                  <th className="px-4 py-2">Idea</th>
                  <th className="px-4 py-2">Tech</th>
                  <th className="px-4 py-2">Sophistication</th>
                  <th className="px-4 py-2">Presentation</th>
                  <th className="px-4 py-2">Summary</th>
                </tr>
              </thead>
              <tbody>
                {data.map((project: Project) => (
                  <tr key={project.id} className="border-b last:border-b-0">
                    <td data-label="Rank" className="px-4 py-2">{project.rank}</td>
                    <td data-label="Project" className="px-4 py-2 font-medium">{project.project}</td>
                    <td data-label="Overall" className="px-4 py-2">{project.overall}</td>
                    <td data-label="Idea" className="px-4 py-2">{project.idea}</td>
                    <td data-label="Tech" className="px-4 py-2">{project.tech}</td>
                    <td data-label="Sophistication" className="px-4 py-2">{project.sophistication}</td>
                    <td data-label="Presentation" className="px-4 py-2">{project.presentation}</td>
                    <td data-label="Summary" className="px-4 py-2 text-sm">{project.summary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </motion.main>
  );
}
