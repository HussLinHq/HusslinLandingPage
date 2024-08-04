 import { useState } from "react";

const FAQAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleAccordion = (index:any) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="accordion">
            <div className="accordion-item">
                <div className="accordion-title bg-[#E1F0FF] font-bold" onClick={() => toggleAccordion(0)}>
                    <h3 className=''>What is Husslin?</h3>
                    <span>{activeIndex === 0 ? '-' : '+'}</span>
                </div>
                {activeIndex === 0 && (
                    <div className="accordion-content ">
                        <p>Husslin is an app that helps you get things done by connecting you with verified artisans for various services.</p>
                    </div>
                )}
            </div>
            <div className="accordion-item ">
                <div className="accordion-title font-bold" onClick={() => toggleAccordion(1)}>
                    <h3>How do I sign up?</h3>
                    <span>{activeIndex === 1 ? '-' : '+'}</span>
                </div>
                {activeIndex === 1 && (
                    <div className="accordion-content">
                        <p>You can sign up for Husslin by downloading the app from the App Store or Google Play Store. Once you&apos;ve downloaded the app, you can sign up using your phone number or email address. After signing up, you can start using Husslin to get things done.</p>
                    </div>
                )}
            </div>
            <div className="accordion-item ">
                <div className="accordion-title font-bold" onClick={() => toggleAccordion(2)}>
                    <h3>How do I use Husslin?</h3>
                    <span>{activeIndex === 2 ? '-' : '+'}</span>
                </div>
                {activeIndex === 2 && (
                    <div className="accordion-content">
                        <p>You can use Husslin by...</p> {/* Add the relevant content */}
                    </div>
                )}
            </div>
        </div>
    );
};

export default FAQAccordion;
