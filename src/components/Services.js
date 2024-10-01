import React from 'react';
import img from '../images/web.svg'; 
import img2 from '../images/app.svg';
import img3 from '../images/hosting.svg';
import img4 from '../images/consultation.svg';


const Services = () => {

    return (
        <div id="services" className="bg-gray-100 py-12" >
            <section data-aos="zoom-in-down">
                    <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">services</h2>
                        
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-blue-900'></div>
                        </div>
                        <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">We are deeply committed to the growth and success of our clients.</h2>
                    </div>

                    <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            
                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">Patient Demographics
                                    Entry and Charge Entry</h2>
                                    <p className="text-md font-medium">
                                    Every piece of information in the patient demographic form is essential for claim payment. Accuracy in data entry is essential to get claims paid. At SoftVie we enter all demographic, insurance information and charge entry with maximum accuracy to ensure that the claims get paid. Since the Softvie team works during the U.S. night-time you can get these claims sent to the payers much faster by having your data entry completed by the time you start your workday...!
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img2} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">Payment Posting</h2>
                                    <p className="text-md font-medium">
                                    You need efficient payment posting to help your practice keep track of payments, maintain accurate records, and optimize your revenue cycle management. Our experienced team of payment posting specialists ensures that every payment is accurately recorded and posted to the appropriate account. This is a time-consuming task that your expensive on-shore team should not take on. Further, mistakes can lead to payment delays and even denials. With our services, you can rest assured that your payments are being posted quickly and accurately.
                                    Our reporting capability builds a thorough system of checks and balances to ensure the data is accurate and correct. The 4D Global team of experts also work denials proficiently and effectively to ensure you get the most reimbursement.
                                    </p>
                                </div>
                            </div>


                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img3} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Denial
                                    Management</h2>
                                    <p className="text-md font-medium">
                                    Denials happen and need to be worked, but this can get really pricey for your business. Other providers may simply status a denial claim, leaving you in a lurch and frustrated. This is not the experience you will have at Softvie. We will proactively research all claims over 14 days (or 30 days, your choice), create a summary, then collaborate with you on your unique procedure that our team uses to resolve this process in the future. Not everything needs to be outsourced and so we will determine together who on the Softvie team or your team, should work the process. Then, we use this strategy to go after each and every denial with vigor, making sure you get the maximum reimbursement as early as possible. Softvie can help you optimize your revenue cycle management and improve your bottom line.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img3} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Provider
                                    Credentialing</h2>
                                    <p className="text-md font-medium">
                                    Many networks are closed these days, and the process to be credentialed is a complex and ongoing process that requires specialized expertise and knowledge of the healthcare industry and regulatory requirements. This process is an essential part of your revenue cycle management and involves several steps to ensure that you or your providers are properly credentialed and authorized to provide services to patients. Prior to submitting your application, the industry experts at SOFTVIE will do the legwork to make sure applying is worth your while. Once you become eligible, we will fill out your application and manage your CAQH often to ensure you are current with each insurance panel and any changes that are required.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img3} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Credit Balance
                                    Resolution</h2>
                                    <p className="text-md font-medium">
                                    SOFTVIE is intent on helping you maintain a positive reputation and relationship with insurance companies and your patients. To help you do so, we have a system for gathering data on any balances so that your books don’t show a negative balance and you continue to build trust and integrity with your patients and insurance companies. Credit balance resolution is an important part of your revenue cycle management, as it keeps you in compliance with regulatory requirements and your financial records stay accurate and up-to-date...!
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img3} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Eligibility &
                                    Benefits</h2>
                                    <p className="text-md font-medium">
                                    SOFTVIE can help you verify and confirm a patient’s eligibility and insurance coverage for healthcare services. This is an important step in the revenue cycle management process and ensures you receive timely and accurate reimbursement for your services. SOFTVIE team of offshore experts proactively use a tool to check eligibility as quickly as possible, but especially before your patients arrive in your office. This will give you time to proactively reach out to patients to confirm alternative methods of payment or update their insurance benefits.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img3} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">UNDER PAYMENT RECOVERY</h2>
                                    <p className="text-md font-medium">
                                    Underpayment recovery at SOFTVIE refers to the process of identifying and addressing instances where insurance companies or other payers have not reimbursed healthcare providers the full and accurate amount for the services provided. This can happen due to various reasons, such as coding errors, contract discrepancies, or misinterpretation of medical policies. Recovering underpayments is crucial for ensuring that healthcare providers receive the rightful compensation for their services.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img4} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">A/R Follow-Up</h2>
                                    <p className="text-md font-medium">
                                    Timely and accurate payments are critical for your business revenue cycle management, and so the team at SOFTVIE will proactively research on claims that are not paid. We will reviewing claim status reports, communicate with insurance companies or other payers, and investigating any issues with patient eligibility, coding errors, or missing information. You will be kept informed of the status of these claims and any actions being taken to resolve outstanding issues. Doing so will minimize the work for your team, making this more affordable for you and more likely to see timely reimbursement.
                                    </p>
                                </div>
                            </div>                    
                        </div>
                    </div>
            </section>

            <section>
                <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6">
                    <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="zoom-out">
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <div className='text-blue-900 mb-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className='fill-current'><path d="M2 12h2a7.986 7.986 0 0 1 2.337-5.663 7.91 7.91 0 0 1 2.542-1.71 8.12 8.12 0 0 1 6.13-.041A2.488 2.488 0 0 0 17.5 7C18.886 7 20 5.886 20 4.5S18.886 2 17.5 2c-.689 0-1.312.276-1.763.725-2.431-.973-5.223-.958-7.635.059a9.928 9.928 0 0 0-3.18 2.139 9.92 9.92 0 0 0-2.14 3.179A10.005 10.005 0 0 0 2 12zm17.373 3.122c-.401.952-.977 1.808-1.71 2.541s-1.589 1.309-2.542 1.71a8.12 8.12 0 0 1-6.13.041A2.488 2.488 0 0 0 6.5 17C5.114 17 4 18.114 4 19.5S5.114 22 6.5 22c.689 0 1.312-.276 1.763-.725A9.965 9.965 0 0 0 12 22a9.983 9.983 0 0 0 9.217-6.102A9.992 9.992 0 0 0 22 12h-2a7.993 7.993 0 0 1-.627 3.122z"></path><path d="M12 7.462c-2.502 0-4.538 2.036-4.538 4.538S9.498 16.538 12 16.538s4.538-2.036 4.538-4.538S14.502 7.462 12 7.462zm0 7.076c-1.399 0-2.538-1.139-2.538-2.538S10.601 9.462 12 9.462s2.538 1.139 2.538 2.538-1.139 2.538-2.538 2.538z"></path></svg>
                            </div>
                            <h3 className="text-3xl  text-blue-900 
                            font-bold"><span className='font-black'>BILLING COMPANIES</span></h3>
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>
                                Maximize your financial health with SOFTVIE Chennai-based expertise in medical billing so you can right-size the workload of your in-house medical billing team.
                                </p>
                            </div>



                            
                        </div>
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <div className='text-blue-900 mb-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className='fill-current'><path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z"></path></svg>
                            </div>
                            <h3 className="text-3xl  text-blue-900 font-bold"><span className='font-black'>SOFTWARE COMPANIES</span></h3>
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>Increase the profitability of your software company by faster claims processing, fewer rejections, higher reimbursements, and, subsequently, a reduction in your outstanding A/R days. .</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services;