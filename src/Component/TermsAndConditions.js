import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";

const TermsAndConditions = () => {
  const brandName = "Artificial Interface";
  const companyName = "AizOps Private Limited";
  const supportEmail = "support@aizops.com";

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
             
              <div className="card-body p-4 p-lg-5 bg-white">
                
                <PolicySection title="OVERVIEW">
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Greetings and salutations from <span className="fw-semibold text-indigo-600">{brandName}</span>.{' '}
                    <span className="fw-semibold text-indigo-600">{companyName}</span> oversees the management 
                    of our platform. The terms "we," "us," and "our" specifically refer to {companyName}. 
                    This site presents a multitude of information alongside tools and services for your utilization. 
                    Access requires acceptance of our terms, conditions, policies, and notices. Through the act of 
                    visiting our platform, whenever you visit our website or complete a transaction, you engage with 
                    what we define as our "Service." This means you agree to follow our "Terms of Service," also known 
                    as our "Terms." Everything visible on our site falls under these terms which also include additional 
                    conditions accessible through site links. The set regulations require adherence from every site user 
                    without exception. The group encompasses casual browsers alongside potential buyers and sellers as 
                    well as content contributors.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Before you access or use our website, examine these Terms of Service with great care. Your use or 
                    access of any site section constitutes your agreement to these Terms of Service. The website and its 
                    services remain inaccessible to you if you refuse to accept every term and condition outlined in this 
                    agreement. These Terms of Service function as an offer only under specific conditions where acceptance 
                    remains strictly confined to their provisions. The Terms of Service will apply to any new features or 
                    tools introduced to the current store. This page allows users to access and examine the latest Terms of 
                    Service version whenever they choose. Our authority extends to modifying these Terms of Service through 
                    updates posted on our website which may alter any section or replace it entirely. The obligation to 
                    review this page for updates rests upon you at regular intervals. The act of using or accessing the 
                    website after any posted modifications indicates your acceptance of the revised terms.
                  </p>
                </PolicySection>

                <PolicySection title="Online Store Terms">
                  <p className="text-gray-700 leading-relaxed">
                    Immediately after agreeing to these Terms of Service, you hereby declare that you are at least an adult 
                    in your state or province of residence, or in any case at least 18 years of age in your state or province 
                    of residence and any dependents under your care who are below that age have their permission to use this 
                    site. You shall not use our products for any illegal and unauthorized purposes and shall not use the 
                    Service in any manner contrary to any applicable laws in your country/jurisdiction, including without 
                    limitation copyright laws. No worms or viruses or any other disruptive code are to be transmitted by you. 
                    We reserve the right to terminate your Services immediately in case of any intentional or unintentional 
                    violation of any Term.
                  </p>
                </PolicySection>

                <PolicySection title="General Conditions">
                  <p className="text-gray-700 leading-relaxed">
                    We reserve the right to deny service to anyone at any time for any reason. You accept that your content 
                    (not including credit card information) are sent unsecured to third party (a) across various networks; or 
                    (b) in any modifications necessary or appropriate to conform and adapt to technical requirements of 
                    connecting networks or devices. The transfer of credit card data is always encrypted as you have to go over 
                    the network. You further agree that you shall not reproduce, duplicate, or copy or attempt to reproduce or 
                    copy the Service or the greater Website or through which service is supplied by Us in whole or for any 
                    purpose without the express written permission of us. The headings on this agreement are for reference only 
                    and will not bind or limit the scope of any of these Terms.
                  </p>
                </PolicySection>

                <PolicySection title="Accuracy, Completeness, and Timeliness of Information">
                  <p className="text-gray-700 leading-relaxed">
                    Please note that here is no claim to responsibility for inexact or outdated or incomplete information 
                    provided via this site. This site does not have correct, sufficient or up-to-date information and the 
                    content of this site should only be used as a source for general information and not your last check 
                    before finding precise comprehensive verification. This site is solely the projections responsibility of 
                    the user. This information is from the past (historical note). The content within this section of site is 
                    historical and should not be considered current. At our discretion, we may revise the contents of this 
                    website without the need, however, without a trigger of such updates. Which you all agree should be 
                    verified for any updates at our own end.
                  </p>
                </PolicySection>

                <PolicySection title="Modifications to the Service and Prices">
                  <p className="text-gray-700 leading-relaxed">
                    Our products are priced and may change at any time without notice. We may modify or suspend/resume 
                    (or change the features of) the Service at any time without notice. We will not be liable to you or any 
                    third party for any decrease, modification, suspension or discontinuance of the Service.
                  </p>
                </PolicySection>

                <PolicySection title="Products or Services">
                  <p className="text-gray-700 leading-relaxed">
                    Some or all items/product may be available for purchase online through the website. The products or 
                    services are available in very few numbers and are return/exchange only according to our return policy. 
                    As you can tell by the colors and images of our products that show in the online store, we have done our 
                    best to display them accurately. We cannot guarantee the color that displays on your computer monitor as 
                    everyone's monitor has a different calibration. We are entitled, but not obligated to restrict the sale of 
                    our products or Services to any person, geographical region or jurisdiction. We leave this option to exact 
                    circumstance. We are allowed to limit the amounts of products or services we offer. Prices of products or 
                    service description are subject to change without notice and are at our sole discretion. Any product will 
                    be able to be discontinued at our discretion. An offer for any good or service is this site is void in the 
                    State where prohibited. We do not warranty that the quality of any products, services, information or other 
                    material purchased or obtained by you will meet your expectations and that no errors, however wrongful, 
                    occur in our use of Service.
                  </p>
                </PolicySection>

                <PolicySection title="Accuracy of Billing and Account Information">
                  <p className="text-gray-700 leading-relaxed">
                    We reserve the right to refuse any order you place with us. We may, in our sole discretion, restrict or 
                    cancel orders per household, per person, or per order. Such restrictions shall apply to orders made by or 
                    under the same customer account, the same credit card and/or identical billing and/or shipping address. 
                    If we alter or void an order, we may try to contact you by using the email and/or billing address / phone 
                    number on file for your most recent order. We may, however, reserve the right to limit or cancel orders 
                    deemed to be from dealers, resellers or distributors. You agree to only provide current purchase information 
                    (email address and billing info) and other details about an existing account at the time of purchase from 
                    our store. You will keep your account information as well as credit card information current and notify us 
                    immediately if there are any changes. For more information see our Return Policy.
                  </p>
                </PolicySection>

                <PolicySection title="Artificial Intelligence Tools & Features">
                  <p className="text-gray-700 leading-relaxed">
                    Our platform integrates advanced artificial intelligence interfaces to enhance your experience. 
                    These AI tools may be made available through use of our site to provide personalized recommendations, 
                    automated customer support, and intelligent search capabilities. You understand and agree that such tools 
                    are provided "as is" and "as available" and without any guarantees, representations or conditions of any 
                    sort nor endorsement. As to your use of AI-powered tools, we shall not be liable. You use any of the AI 
                    features on the site entirely at your own risk and discretion. You should familiarize yourself with and 
                    agree to the terms upon which these artificial intelligence services operate. We may also be adding new 
                    AI-powered services and/or features through the website in future.
                  </p>
                </PolicySection>

                <PolicySection title="Optional Tools">
                  <p className="text-gray-700 leading-relaxed">
                    Third-party tools may be made available through use of our site without our having any oversight, control 
                    or input with respect to them. You understand and agree that such tools are provided "as is" and "as available" 
                    and without any guarantees, representations or conditions of any sort nor endorsement. As to your use of 
                    optional third-party tools, we shall not be liable. You use any of the optional tools on the site entirely 
                    at your own risk and discretion. You should familiarize yourself with and agree to the terms upon which the 
                    relevant third-party provider or providers make available the tools. We may also be adding new services and/or 
                    features through the website in future.
                  </p>
                </PolicySection>

                <PolicySection title="Third Party Links">
                  <p className="text-gray-700 leading-relaxed">
                    Some content, products, and services you can access through our Service might contain materials from other 
                    companies. Links from outside sources on our site could take you to websites we don't own. We don't check or 
                    judge the content or correctness of these materials, and we can't promise or be held responsible for any 
                    outside materials, websites, or other stuff from other companies. We're not on the hook for any problems tied 
                    to buying or using goods, services, resources, content, or other deals made on outside websites. Take a good 
                    look at the other company's rules and ways of doing things, and make sure you get them before you do any 
                    business with them. If you have any gripes, claims, worries, or questions about products from other companies, 
                    you should talk to them.
                  </p>
                </PolicySection>

                <PolicySection title="User Comments, Feedback, and Other Submissions">
                  <p className="text-gray-700 leading-relaxed">
                    If you send us specific submissions (like contest entries) when we ask, or if you send us creative ideas, 
                    suggestions, proposals, plans, or other stuff without us asking (we'll call all of this 'comments'), you're 
                    saying it's okay for us to edit, copy, publish, share, translate, and use these comments in any way we want, 
                    at any time, in any medium. We don't have to (1) keep your comments secret; (2) pay you for them; or (3) reply 
                    to them. We can, but don't have to check, edit, or take down content that we think is against the law, offensive, 
                    threatening, untrue, hurtful, porn, gross, or not okay in some other way, or that steps on someone's intellectual 
                    property or breaks these Terms of Service. You're promising that your comments won't step on any third party's 
                    rights, including copyright, trademark, privacy, personality, or other personal or property rights. You also 
                    promise that your comments won't contain any offensive, abusive, or obscene content, or that they won't contain 
                    any malware or computer viruses that could interfere with the functionality of the service or any linked websites. 
                    You are not permitted to use a fictitious email address, pose as someone else, or otherwise mislead us or other 
                    parties about where any comments are coming from. The veracity of any remarks you make is entirely your 
                    responsibility. Any remarks that you or any third party submit are not our responsibility, and we do not assume 
                    any duty.
                  </p>
                </PolicySection>

                <PolicySection title="Personal Data">
                  <p className="text-gray-700 leading-relaxed">
                    The information shared by you through our store could be covered by our Privacy Policy in specific terms and 
                    conditions about how we will handle the information. Please have a look at our{' '}
                    <a href="/privacy-policy" className="text-indigo-600 hover:underline">
                      Privacy Policy
                    </a>{' '}
                    page.
                  </p>
                </PolicySection>

                <PolicySection title="Errors, Inaccuracies, and Omissions">
                  <p className="text-gray-700 leading-relaxed">
                    There might be instances where the website or Service might contain errors, mistakes, and omissions regarding 
                    product and pricing information, discounts and offers, shipping prices and delivery times, as well as the stock 
                    levels. We are authorized to fix such errors, write wrongs, and make modifications without prior notice. This 
                    will include modifying information or voiding the order placed if ever wrong information is found in or through 
                    our Service or associated websites (even after an order has been placed). The information in or through our 
                    Service or associated websites needs not be updated, revised, or explained unless the applicable laws require 
                    us to do so. This includes price information. Just because you can see an update or refresh date on our Service 
                    or related websites doesn't mean we've changed or updated everything there.
                  </p>
                </PolicySection>

                <PolicySection title="Prohibited Uses">
                  <p className="text-gray-700 leading-relaxed">
                    These Terms of Service prohibit uses of the site or its content: (a) for any purpose that is unlawful; (b) for 
                    soliciting illegal acts; (c) for violations of international law, federal or state regulations, or local 
                    ordinances; (d) for infringement of our or others' intellectual property rights; (e) for using methods of 
                    harassment, abuse, insult, harm, defamation, slander, disparagement, intimidation, or discrimination against 
                    any sex, sexual orientation, religion, ethnicity, race, age, national origin, or disability; (f) for false or 
                    misleading submission; (g) for uploading or transmitting viruses or any other type of malicious code that will 
                    or that may be used in any way that will affect the functionality or operation of the Service or of any related 
                    website, other websites, or the Internet; (h) to collect or track the personal information of others; (i) to spam, 
                    phish, pharm, pretext, spider, crawl, or scrape; (j) for any obscene or immoral purpose; or (k) to interfere with 
                    or circumvent the security features of the Service or any related website, other websites, or the Internet. 
                    Termination of the use of the Service or any related website for violating any of the prohibited uses is reserved.
                  </p>
                </PolicySection>

                <PolicySection title="Disclaimer of Warranties; Limitation of Liability">
                  <p className="text-gray-700 leading-relaxed">
                    Our service usage comes with no guarantees or representations from us regarding continuous operation, timeliness, 
                    security, or error-free performance. The service outcomes you may achieve through use remain unwarranted for 
                    accuracy and reliability. You confirm your acceptance that occasionally we might suspend the service for undefined 
                    durations or terminate the service without any prior notification to you. Your personal risk fully encompasses both 
                    your service usage and any failures to access it. All products and services you receive through the service remain 
                    in their current state without modifications and availability for your use without any guarantees or conditions 
                    from us unless explicitly stated otherwise, including all implied assurances of merchantability, quality, suitability 
                    for specific purposes, durability, title, and noninfringement. Under no circumstances shall {companyName} along with 
                    its directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers and 
                    licensors bear responsibility for any form of injury or damage including direct or indirect losses and incidental 
                    damages as well as punitive and special damages plus consequential damages of any type such as lost profits or revenue 
                    along with lost savings and data loss including replacement costs or similar damages regardless of whether these arise 
                    from contractual obligations or tortious actions including negligence alongside strict liability or other legal bases 
                    connected to your utilization of our services or products obtained through the service nor for any claims linked to 
                    your service usage. Certain states or jurisdictions prohibit the exclusion or limitation of liability for consequential 
                    or incidental damages, therefore within those areas our liability shall reach only to the legally allowed maximum.
                  </p>
                </PolicySection>

                <PolicySection title="Indemnification">
                  <p className="text-gray-700 leading-relaxed">
                    You promise to protect {companyName} and all related entities. This includes our main company, smaller branches, 
                    partners, leaders, agents, and employees. They must be safe from any claims or demands that arise because you 
                    didn't follow these Terms of Service, related documents, or any laws. If there is a claim, you agree to cover the 
                    costs, including lawyer fees.
                  </p>
                </PolicySection>

                <PolicySection title="Severability">
                  <p className="text-gray-700 leading-relaxed">
                    If any part of these Terms of Service is found to be not legal or invalid, that part can still be enforced as much 
                    as possible under the law. The part that cannot be enforced will be removed, but this will not affect the rest of 
                    the Terms. The remaining parts will continue to be valid and enforceable.
                  </p>
                </PolicySection>

                <PolicySection title="Termination">
                  <p className="text-gray-700 leading-relaxed">
                    The duties and debts that were made before the agreement ended will still apply even after it's over. These Terms 
                    of Service will stay in effect until either you or we decide to end them. If you want to end these Terms of Service, 
                    you can do so at any time by telling us you no longer want to use our Services or by simply stopping the use of our 
                    site. If we think you haven't followed any part of these Terms of Service, we can also end this agreement at any time 
                    without telling you beforehand. You will still need to pay whatever you owe up until the day the agreement ends. 
                    Additionally, we might stop you from accessing our Services or any parts of them.
                  </p>
                </PolicySection>

                <PolicySection title="Entire Agreement">
                  <p className="text-gray-700 leading-relaxed">
                    If we don't use or enforce any right or rule mentioned in these Terms of Service, it doesn't mean we're giving up 
                    that right or rule. These Terms of Service, and any policies or rules that we post on this site about the Service, 
                    make up the complete agreement and understanding between you and us. They replace any agreements, talks, and 
                    suggestions we had before, whether we spoke or wrote them down. This includes any earlier versions of these Terms 
                    of Service. If there's something unclear in these Terms of Service, it won't be automatically held against the side 
                    who wrote it.
                  </p>
                </PolicySection>

                <PolicySection title="Governing Law">
                  <p className="text-gray-700 leading-relaxed">
                    These Terms of Service, along with any other agreements we use to offer you Services, are governed by the laws of 
                    India. This means that everything we do is in line with how things work legally in India.
                  </p>
                </PolicySection>

                <PolicySection title="Changes to Terms of Service">
                  <p className="text-gray-700 leading-relaxed">
                    You can always find the most up-to-date version of the Terms of Service on this page. We can update, change, or 
                    replace any part of these terms at any time, and we'll post these updates on our website. It's important for you 
                    to check our website regularly to see if anything has changed. If you keep using our website or the Service after 
                    we've made changes, it means you agree to the new terms. Your responsibility is to stay informed by checking for 
                    updates.
                  </p>
                </PolicySection>

                <PolicySection title="Artificial Intelligence & Machine Learning Services">
                  <p className="text-gray-700 leading-relaxed">
                    Our platform leverages cutting-edge artificial intelligence and machine learning technologies to deliver intelligent 
                    features including predictive analytics, natural language processing, and automated decision-making tools. These AI 
                    systems continuously learn and improve to provide you with more accurate and personalized experiences. By using our 
                    AI-powered services, you acknowledge that:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-2 space-y-1">
                    <li>AI-generated recommendations are suggestions only and not guarantees</li>
                    <li>You maintain responsibility for decisions made based on AI outputs</li>
                    <li>Our AI models are trained on diverse datasets to minimize bias</li>
                    <li>We regularly audit our AI systems for fairness and accuracy</li>
                    <li>You can opt out of AI-powered features by contacting our support team</li>
                  </ul>
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

/**
 * Helper component for consistent section styling
 */
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

export default TermsAndConditions;