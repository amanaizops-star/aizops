import React from 'react';
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const PrivacyPolicy = () => {
  const brandName = "Artificial Interface";
  const supportEmail = "support@aizops.com";

  const effectiveDate = "August 2024";

 
  const PolicySection = ({ title, children }) => {
    return (
      <section className="mb-5">
        <h3 className="h5 fw-bold text-black mb-3 pb-1 border-bottom border-indigo-200">
          {title}
        </h3>
        {children}
      </section>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
              <div className="card-body p-4 p-lg-5 bg-white">
                <section className="mb-5">
                  <p className="text-gray-700 leading-relaxed">
                    <span className="fw-semibold">{brandName}</span> {" "}
                    ("we," "our," or "us") very much values the confidentiality and privacy 
                    of your personal information. This Privacy Policy, effective from{" "}
                    {effectiveDate}, covers how the information is collected, used, and 
                    disclosed whenever you visit our website or when you make any purchase.
                  </p>
                </section>

                <PolicySection title="Information We Collect">
                  <p className="text-gray-700 leading-relaxed">
                    If you please grant us the request, we can, at some intervals, send you 
                    emails notifying you about the store, its new stock, or any relevant 
                    changes. However, we may need to gather some information, not limited to, 
                    your name and email for the purposes of buying or selling. Furthermore, 
                    the system automatically collects your IP address whenever you access our 
                    site. That allows us to know the system and the browser that is being used.
                  </p>
                </PolicySection>

                <PolicySection title="Consent">
                  <h4 className="h6 fw-semibold text-black mb-2">How is consent obtained?</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    When you give us personal details to perform any tasks such as completing 
                    a transaction, validating your credit card, making an order, managing a 
                    delivery, or returning an item, you are consenting to collection and use 
                    for that particular purpose. Simply put, your cell number serves as your 
                    unique identifier, which, as part of license management, is kept in our 
                    system. We may use that number to occasionally contact you with helpful 
                    information on using our products. If you wish to have your phone number 
                    unsaved, you can stop using the app and notify{" "}
                    <a href={`mailto:${supportEmail}`} className="text-indigo-600 hover:underline">
                      {supportEmail}
                    </a>{" "}
                    that you would like to have it removed. We will delete your number from 
                    our data within 72 working hours and acknowledge the notice.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    We will either directly ask for your affirmative consent or give you the 
                    option to decline if we ever ask for your information for a purpose other 
                    than the one listed, like marketing products to you.
                  </p>

                  <h4 className="h6 fw-semibold text-black mb-2">How do I withdraw my consent?</h4>
                  <p className="text-gray-700 leading-relaxed">
                    You can email us at{" "}
                    <a href={`mailto:${supportEmail}`} className="text-indigo-600 hover:underline">
                      {supportEmail}
                    </a>{" "}
                    to revoke your consent for contact or for the ongoing collection, use, 
                    and/or disclosure of information if you change your mind after opting in.
                  </p>
                </PolicySection>

                <PolicySection title="Disclosure">
                  <p className="text-gray-700 leading-relaxed">
                    We may disclose your personal information if required to do so by law, 
                    or in the event you breach our Terms of Service.
                  </p>
                </PolicySection>

            

                <PolicySection title="Third-party sellers & Artificial Intelligence Services">
                  <p className="text-gray-700 leading-relaxed">
                    Generally care about collecting, using, and disclosing only that information 
                    necessary to offer services to us. However, certain third-party services such 
                    as payment gateways, and other payment processors have their own privacy 
                    policies regarding the information we provide them for your purchase-related 
                    transactions. We advise you to read their privacy policies to see how your 
                    personal information will be treated by these providers.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-3">
                    Bear in mind that some providers may be located in, or have facilities in, a 
                    different jurisdiction from yours, or ours. If you initiate any transaction 
                    involving the services of a third-party service provider, your information 
                    may be subjected to the applicable laws of the jurisdiction(s) where that 
                    service provider or its facilities are located. Once any of your information 
                    leaves our website, or is redirected from our website onto the third-party 
                    website or application, this Privacy Policy and the Terms of Service for our 
                    website cease to be applicable.
                  </p>
                </PolicySection>

                <PolicySection title="Artificial Intelligence Features">
                  <p className="text-gray-700 leading-relaxed">
                    Our platform utilizes advanced artificial intelligence interfaces to power 
                    certain features and enhance your user experience. All interactions, data 
                    processing, and functionalities driven by artificial intelligence are 
                    facilitated through our proprietary AI systems. For any inquiries specifically 
                    related to the AI-powered features on our platform, you may contact our 
                    support team at{" "}
                    <a href={`mailto:${supportEmail}`} className="text-indigo-600 hover:underline">
                      {supportEmail}
                    </a>.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-3">
                    The artificial intelligence components are designed to provide personalized 
                    recommendations, automated customer support, and enhanced search capabilities. 
                    These features process data in accordance with this privacy policy and are 
                    continuously monitored to ensure compliance with data protection standards.
                  </p>
                </PolicySection>

                
                <PolicySection title="Security">
                  <p className="text-gray-700 leading-relaxed">
                    Taking reasonable precautions and following the best practices of the industry, 
                    we are very well able to confirm that your personal information does not get 
                    lost, misused, accessed, disclosed, altered or destroyed in any inappropriate way.
                  </p>
                </PolicySection>

               
                <PolicySection title="Cookies">
                  <p className="text-gray-700 leading-relaxed">
                    Cookies are used to keep your user session going. It does not identify you on 
                    any other website.
                  </p>
                </PolicySection>

                
                <PolicySection title="Age of Consent">
                  <p className="text-gray-700 leading-relaxed">
                    You are of legal age in your country or state of residence by using this site, 
                    or you are of the age of majority in your state or province of residence and 
                    you have given us permission to enable any of your dependent minors to use 
                    this site.
                  </p>
                </PolicySection>

                
                <PolicySection title="Amendments Made to this Privacy Policy">
                  <p className="text-gray-700 leading-relaxed">
                    We may change this Privacy Policy at any time, so do well to review it often. 
                    Such changes and clarifications will take effect immediately upon their posting 
                    on our website. If we make changes to this policy in such a way, we shall leave 
                    a notice here, informing you the things, which we collect, how we use it, and 
                    under what circumstance if any, we would use and/or disclose it. Your information 
                    could then be passed onto the new owners if they buy the store or merge with 
                    another company so that we can continue selling products to you.
                  </p>
                </PolicySection>

           

               
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default PrivacyPolicy;