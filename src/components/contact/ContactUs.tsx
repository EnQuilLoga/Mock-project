import React from "react";
import "./ContactUsStyle.css"
export interface IContactUsProps {

}
export default function ContactUs (props: IContactUsProps) {
return (
    <div className="">
        <div className=" flex flex-wrap"> 
            {/* Store */}
            <div className="store">
                <div className="px-4" >
                    <h4 className="text-2xl font-semibold">Store Information</h4>
                    <div className="font-light">
                        {/* Map */}
                        <div className="block">
                            <div className="icon">
                                <i className="fas fa-map-marker-alt text-2xl text-slate-400 "></i>
                            </div>
                            <div className="data">Junno Responsive Prestashop Theme <br/> United States</div>
                        </div>
                        <hr/>
                        {/* Call */}
                        <div className="block">
                            <div className="icon">
                                <i className="fas fa-phone-alt text-2xl text-slate-400"></i>
                            </div>
                            <div className="data">
                                Call us: 
                                <br />
                                <a href="tel: (+84)123456789">(+84)0123456789</a>
                            </div>
                        </div>
                        <hr/>
                        {/* Mail */}
                        <div className="block">
                            <div className="icon">
                                <i className="fas fa-envelope text-2xl text-slate-400"></i>
                            </div>
                            <div className="data">
                                Email us:
                                <br />
                                <a href="mailto: abc@gmail.com">abc@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact */}
            <div className="contact">
                <div className="px-4">
                    <div>
                        <h3 className="text-2xl font-semibold">Contact Us</h3>
                    </div>
                    <div  className="font-light">
                         {/* Subject */}
                        <div className="contact-group flex">
                            <label htmlFor="">Subject</label>
                            <div className="contact-controll">
                                <select name="" id="">
                                <option value="">Customer service</option>
                                <option value="">Webmaster</option>
                                </select>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="contact-group flex flex-row">
                            <label htmlFor="">Email address</label>
                            <div className="contact-controll">
                                <input type="email" placeholder="your@email.com" />
                            </div>
                        </div>

                        {/* Attachment */}
                        <div className="contact-group flex flex-row">
                            <label htmlFor="">Attachment</label>
                            <div className="contact-controll">
                                <input type="text" />
                                <input type="file" value="" title=" "/>
                            </div>
                        </div>  

                        {/* Message */}
                        <div className="contact-group flex">
                            <label htmlFor="">Message</label>
                            <div>
                                <textarea name="" id="" placeholder="How can hlep you???" className="w-full"></textarea>
                            </div>
                        </div>

                        {/* Send */}
                        <div className="flex">
                            <input type="submit" value="Send" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}