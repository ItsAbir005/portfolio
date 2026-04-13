"use client";

import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../lib/motion";

const skills = ["JavaScript", "Python", "React", "Node.js", "Express", "Flask", "MongoDB", "PostgreSQL", "Socket.io", "OAuth", "REST APIs", "Machine Learning", "Deep Learning"];

const achievements = [
    { title: "LeetCode Mastery", detail: "Solved 400+ problems" },
    { title: "LeetCode Rating", detail: "1700+ Rating" }
];

const Skills = () => {
    return (
        <motion.div className="flex flex-col w-full items-center my-12" variants={containerVariants} initial="hidden" whileInView="visible">
            <motion.div className="text-3xl font-bold mb-8" variants={itemVariants}>
                Skills & Expertise
            </motion.div>
            
            <motion.div className="flex flex-wrap justify-center sm:w-2/3 mb-12" variants={containerVariants} initial="hidden" whileInView="visible">
                {skills.map((skill, index) => (
                    <motion.div key={index} variants={itemVariants}>
                        <Button className="mx-1.5 my-1.5 p-3 hover:scale-110 transition-transform cursor-default" size="sm" variant="outline">
                            {skill}
                        </Button>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div className="text-3xl font-bold mb-8" variants={itemVariants}>
                Achievements
            </motion.div>
            
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:w-2/3 w-full px-4" variants={containerVariants} initial="hidden" whileInView="visible">
                {achievements.map((achievement, index) => (
                    <motion.div 
                        key={index} 
                        variants={itemVariants}
                        className="bg-card border border-primary/20 p-6 rounded-xl shadow-lg hover:shadow-primary/10 transition-all flex flex-col items-center text-center group"
                    >
                        <div className="text-primary font-black text-xl mb-2 group-hover:scale-105 transition-transform">
                            {achievement.title}
                        </div>
                        <div className="text-muted-foreground font-medium">
                            {achievement.detail}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default Skills;
