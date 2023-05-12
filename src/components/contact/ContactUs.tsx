import React from "react";
export interface IContactUsProps {

}
export default function ContactUs (props: IContactUsProps) {
return (
    <div className="container">
        <div className=" flex flex-wrap"> 
            {/* Store */}
            <div className="store float-left w-1/4">
                <div className="px-4" >
                    <h4 className="text-2xl font-semibold mb-8">Store Information</h4>
                    <div className="font-light">
                        {/* Map */}
                        <div className="block">
                            <div className="icon float-left w-14">
                                <i className="fas fa-map-marker-alt text-2xl text-slate-400 "></i>
                            </div>
                            <div className="data truncate w-auto">Junno Responsive Prestashop Theme <br/> United States</div>
                        </div>
                        <hr className="my-4"/>
                        {/* Call */}
                        <div className="block">
                            <div className="icon float-left w-14">
                                <i className="fas fa-phone-alt text-2xl text-slate-400"></i>
                            </div>
                            <div className="data truncate w-auto">
                                Call us: 
                                <br />
                                <a href="tel: (+84)123456789">(+84)0123456789</a>
                            </div>
                        </div>
                        <hr className="my-4"/>
                        {/* Mail */}
                        <div className="block">
                            <div className="icon float-left w-14">
                                <i className="fas fa-envelope text-2xl text-slate-400"></i>
                            </div>
                            <div className="data truncate w-auto">
                                Email us:
                                <br />
                                <a href="mailto: abc@gmail.com">abc@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact */}
            <div className="contact float-left w-3/4">
                <div className="px-4">
                    <div>
                        <h3 className="text-2xl font-semibold mb-8">Contact Us</h3>
                    </div>
                    <div  className="font-light">
                         {/* Subject */}
                        <div className="contact-group mb-4 ">
                            <label className="text-left w-1/4">Subject</label>
                            <div className="contact-controll float-left w-1/2 border">
                                <select name="" id="" className="w-full">
                                <option value="" className="" >Customer service</option>
                                <option value="" className="">Webmaster</option> 
                                </select>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="contact-group mb-4">
                            <label className="text-left">Email address</label>
                            <div className="contact-controll float-left w-1/2 border">
                                <input type="email" placeholder="your@email.com" className="w-full" />
                            </div>
                        </div>

                        {/* Attachment */}
                        <div className="contact-group mb-4">
                            <label className="text-left">Attachment</label>
                            <div className="contact-controll float-left w-1/2 border">
                                <input type="file" name="file" className="w-full"/>
                            </div>
                        </div>  

                        {/* Message */}
                        <div className="contact-group mb-4"> 
                            <label className="text-left">Message</label>
                            <div className="float-left w-1/2 border">
                                <textarea name="" id="" placeholder="How can hlep you???" className="w-full"></textarea>
                            </div>
                        </div>

                        {/* Send */}
                        <div className="">
                            <input type="submit" value="Send" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}