import React from "react";
import Card from "../components/Card";
import {
  RiInstagramFill,
  RiArticleLine,
  RiBarChartBoxLine,
  RiImageEditFill,
  RiVideoAddLine,
  RiHashtag,
  RiAdvertisementLine,
  RiCustomerService2Fill
} from "@remixicon/react";

export default function Service() {
  const services = [
    { 
      icon: <RiInstagramFill />, 
      title: "Instagram Account Management", 
      description: "We manage and optimize your Instagram profile, ensuring growth and engagement." 
    },
    { 
      icon: <RiArticleLine />, 
      title: "Content/Script Writing", 
      description: "Engaging scripts & content tailored for your Instagram and social media needs." 
    },
    { 
      icon: <RiBarChartBoxLine />, 
      title: "Account Analysis", 
      description: "Analyze your account’s performance and provide actionable insights for improvement." 
    },
    { 
      icon: <RiImageEditFill />, 
      title: "Post Creation", 
      description: "Design high-quality posts & graphics that capture your audience’s attention." 
    },
    { 
      icon: <RiVideoAddLine />, 
      title: "Reels & Video Editing", 
      description: "Create engaging reels & video edits that increase reach and engagement." 
    },
    { 
      icon: <RiHashtag />, 
      title: "Hashtag Research", 
      description: "Find the best-performing hashtags to maximize your post’s visibility." 
    },
    { 
      icon: <RiAdvertisementLine />, 
      title: "Instagram Ads Management", 
      description: "Run and optimize Instagram ad campaigns for better conversions." 
    },
    { 
      icon: <RiCustomerService2Fill />, 
      title: "Customer Engagement", 
      description: "Reply to comments, DMs, and build strong relationships with your audience." 
    }
  ];

  return (
    <div id="services" className="min-h-screen bg-gray-100 flex flex-col items-center py-12">
      {/* Branding Heading */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-black tracking-wide" style={{ fontFamily: "'Tillana', sans-serif", color: "#000" }}>
        #बाजार
      </h1>
      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
         Our <span className="text-pink-500">Services</span>
      </h1>

      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 hover:cursor-pointer gap-6 px-6 md:px-12 lg:px-24">
        {services.map((service, index) => (
          <Card 
            key={index} 
            icon={service.icon} 
            title={service.title} 
            description={service.description} 
          />
        ))}
      </div>
    </div>
  );
}
