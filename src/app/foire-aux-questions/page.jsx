'use client'
import FooterSection from "@/components/landing-page/FooterSection";
import HomeNavbar from "@/components/landing-page/HomeNavbar";
import { faqCategories } from "@/datas/faq";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function FAQ() {

  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <>
      <div className="min-h-screen bg-[url('/assets/images/map-pattern.svg')] bg-repeat bg-center bg-contain">
        <HomeNavbar />

        <div className="text-center mb-16 mt-16">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900">
            Notre Foire aux
            <br />
            <span className="text-4xl sm:text-6xl text-[#FF7401] h-[70px] bg-[#ff9d4c]/20 rounded-xl px-4">Questions</span>
          </h2>
        </div>

        <div className="max-w-7xl mx-auto bg-white border-2 border-solid border-[#F4F1EE] rounded-lg p-8 mb-32">
          {faqCategories.map((category, index) => (
            <div key={index} className="mb-10">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{category.title}</h3>
              <div className="space-y-4">
                {category.items.map((item) => (
                  <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleFAQ(item.id)}
                      className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
                    >
                      <span className="font-medium text-gray-900">{item.question}</span>
                      {openFAQ === item.id ? (
                        <FiChevronUp className="w-5 h-5 text-gray-500" />
                      ) : (
                        <FiChevronDown className="w-5 h-5 text-gray-500" />
                      )}
                    </button>

                    {openFAQ === item.id && (
                      <div className="px-6 py-4 bg-white border-t border-gray-200">
                        <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <FooterSection />
      </div>
    </>
  );
}