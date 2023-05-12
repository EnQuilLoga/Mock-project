import React from "react";
export interface IContactUsProps {

}
export default function ContactUs (props: IContactUsProps) {
return (
    <div>
        <div className="container">
            <div>
                <div>
                    <header className="mb-3">
                        <h1 className="px-2 text-2xl">About Us</h1>
                    </header>
                    <div className="py-4 text-justify">
                        <h2 className="px-2">About Us</h2>
                        <div className="flex flex-row">

                            {/* Our company */}
                            <div className="w-1/3 px-2">
                                <div>
                                    <h3>Our Company</h3>
                                    <p>
                                        <strong>
                                        Lorem ipsum dolor sit amet conse ctetur adipisicing elit, 
                                        sed do eiusmod tempor incididun.
                                        </strong>
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet conse ctetur adipisicing elit, 
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                        Ut enim ad minim veniam. Lorem ipsum dolor sit amet conse ctetur adipisicing elit.
                                    </p>
                                    <ul>
                                        <li>Top quality products</li>
                                        <li>Best customer service</li>
                                        <li>30-days money back guarantee</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Our tearn */}
                            <div className="w-1/3 px-2">
                                <div>
                                    <h3>Our team</h3>
                                    <img src="https://www.kicksonfire.com/wp-content/uploads/2020/08/Air-Jordan-1-1-1.jpeg" alt="Jordan" 
                                        width={370} height={192} className="w-full m-auto h-auto"/>
                                    <p>
                                        <strong>
                                            Lorem set sint occaecat cupidatat non 
                                        </strong>
                                    </p>
                                    <p>
                                        Eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                                    </p>
                                </div>
                            </div>

                            {/* Testimonials */}
                            <div className="w-1/3 px-2">
                                <div>
                                    <h3>Testimonials</h3>
                                    <div>
                                        <p>
                                        Lorem ipsum dolor sit amet conse ctetur adipisicing elit, 
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                        Ut enim ad minim.
                                        </p>
                                    </div>
                                    <p>
                                        <strong>
                                        Lorem ipsum dolor sit
                                        </strong>
                                    </p>
                                    <div>
                                        <p>
                                        Excepteur sint occaecat cupidatat non proident, 
                                        sunt in culpa qui officia deserunt mollit anim id est laborum. 
                                        Lorem ipsum dolor sit amet conse ctetur adipisicing elit. 
                                        Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod.
                                        </p>
                                    </div>
                                    <p>
                                        <strong>
                                            Ipsum dolor sit
                                        </strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}