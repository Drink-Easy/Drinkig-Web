import { Card, CardHeader, CardTitle } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
const workshopImage = "/images/history-workshop.jpg";
const demodayImage = "/images/history-demoday.png";
const launchImage = "/images/history-launch.png";
const ideathonImage = "/images/history-ideathon.jpg";
const startupImage = "/images/history-startup.png";
import { motion } from "motion/react";

export function HistorySection() {
  const milestones = [
    {
      shortDate: "24.5",
      title: "UMC 아이디어톤 1등",
      image: ideathonImage
    },
    {
      shortDate: "24.8",
      title: "UMC 데모데이 참가",
      image: demodayImage
    },
    {
      shortDate: "25.3",
      title: "iOS 앱스토어 런칭",
      image: launchImage
    },
    {
      shortDate: "25.5",
      title: "홍익대학교 창업경진대회 우수상",
      image: startupImage
    },
    {
      shortDate: "25.7",
      title: "드링키지 팀 춘천 워크샵",
      image: workshopImage
    }
  ];

  return (
    <section id="history" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            우리 팀의 추억
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            드링키지가 어떻게 시작되고 성장해왔는지 함께 살펴보세요.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-purple-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div 
                  key={index} 
                  className="relative flex items-start"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <motion.div 
                    className="flex-shrink-0 w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center relative z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1 + 0.3,
                      type: "spring",
                      stiffness: 150
                    }}
                    viewport={{ once: true }}
                  >
                    <span className="text-white font-bold text-sm">{milestone.shortDate}</span>
                  </motion.div>
                  
                  <div className="ml-8 flex-1">
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <div className="md:flex">
                        <div className="md:w-1/3">
                          <ImageWithFallback
                            src={milestone.image}
                            alt={milestone.title}
                            className="w-full h-48 md:h-full object-cover object-left"
                          />
                        </div>
                        <div className="md:w-2/3">
                          <CardHeader>
                            <CardTitle className="text-xl">{milestone.title}</CardTitle>
                          </CardHeader>
                        </div>
                      </div>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}