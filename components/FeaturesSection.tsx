import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
const wineCurationImage = '/images/feature-wine-curation.png';
const wineSearchImage = '/images/feature-wine-search.png';
const tastingNoteImage = '/images/feature-tasting-note.png';
const wineManagementImage = '/images/feature-wine-management.png';

export function FeaturesSection() {
  const features = [
    {
      icon: "🍷",
      title: "와인 큐레이션",
      description: "당신의 취향과 기록을 반영하여 최적의 와인을 추천드려요!",
      image: wineCurationImage,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "🔍",
      title: "와인 검색",
      description: "어려운 와인을 쉽고 간편하게\n검색하여 정보를 확인하세요.",
      image: wineSearchImage,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "📝",
      title: "테이스팅 노트",
      description: "마신 와인의 맛과 향, 느낌을 기록하며 와인 경험을 더 체계적으로 관리하세요.",
      image: tastingNoteImage,
      gradient: "from-amber-500 to-orange-500"
    },
    {
      icon: "📦",
      title: "보유 와인 관리", 
      description: "소장하고 있는 와인을 체계적으로 관리하고, 언제든지 쉽게 확인할 수 있습니다.",
      image: wineManagementImage,
      gradient: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            드링키지 앱 기능
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            와인 초보자부터 애호가까지,
            <br />
            모든 분들이 와인을 더 쉽고 즐겁게 경험할 수 있도록 다양한 기능을 제공합니다.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: "easeOut"
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 border-0 shadow-lg">
                <div className={`lg:flex ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} items-center h-full`}>
                  {/* 이미지 섹션 */}
                  <div className="lg:w-1/2 p-8 lg:p-12 flex items-center justify-center">
                    <div className="relative">
                      {/* 이미지 - 깔끔한 앱 목업 */}
                      <div className="w-44 h-80">
                        <ImageWithFallback
                          src={feature.image}
                          alt={`${feature.title} 앱 화면`}
                          className="w-full h-full object-contain drop-shadow-2xl"
                        />
                      </div>
                      {/* 부유하는 아이콘 */}
                      <div className={`absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-full flex items-center justify-center text-2xl shadow-lg`}>
                        {feature.icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* 콘텐츠 섹션 */}
                  <div className="lg:w-1/2">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-2xl lg:text-3xl text-gray-900 mb-4">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-lg text-gray-600 leading-relaxed whitespace-pre-line">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}