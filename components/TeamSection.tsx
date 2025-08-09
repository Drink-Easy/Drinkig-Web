import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
const wiseungjuPhoto = "/images/team-wiseungju.png";
const dayoungPhoto = "/images/team-dayoung.png";
const sangwookPhoto = "/images/team-sangwook.png";
const sieunPhoto = "/images/team-sieun.png";
const yunhwaPhoto = "/images/team-yunhwa.png";
const yesungPhoto = "/images/team-yesung.png";
const chaewoonPhoto = "/images/team-chaewoon.png";
const jungyeonPhoto = "/images/team-jungyeon.png";
const hyeonjuPhoto = "/images/team-hyeonju.png";
const doyeonPhoto = "/images/team-doyeon.png";
const hayoungPhoto = "/images/team-hayoung.png";

export function TeamSection() {
  const teamMembers = [
    {
      name: "위승주",
      position: "Founder",
      image: wiseungjuPhoto
    },
    {
      name: "박정연",
      position: "Backend Lead",
      image: jungyeonPhoto
    },
    {
      name: "윤다영",
      position: "Backend Developer",
      image: dayoungPhoto
    },
    {
      name: "박상욱",
      position: "Backend Developer",
      image: sangwookPhoto
    },
    {
      name: "전채운",
      position: "Project Manager",
      image: chaewoonPhoto
    },
    {
      name: "김도연",
      position: "Frontend Lead",
      image: doyeonPhoto
    },
    {
      name: "이예성",
      position: "Frontend Developer",
      image: yesungPhoto
    },
    {
      name: "이현주",
      position: "Frontend Developer",
      image: hyeonjuPhoto
    },
    {
      name: "천윤화",
      position: "Design Lead",
      image: yunhwaPhoto
    },
    {
      name: "배하영",
      position: "Designer",
      image: hayoungPhoto
    },
    {
      name: "윤시은",
      position: "Designer",
      image: sieunPhoto
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            팀 소개
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            총 11명의 열정적인 팀원들이 함께 드링키지를 만들어가고 있습니다.
          </p>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.05,
                ease: "easeOut"
              }}
              viewport={{ once: true, margin: "-30px" }}
            >
              <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader className="pb-6">
                  <div className="mx-auto mb-4">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto"
                    />
                  </div>
                  <CardTitle className="text-xl mb-2">{member.name}</CardTitle>
                  <CardDescription className="text-purple-600 font-medium">
                    {member.position}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}