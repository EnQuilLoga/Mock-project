import React from "react";
export interface IContactUsProps {

}
export default function ContactUs (props: IContactUsProps) {
return (
    <div className="">
        <div className="container flex flex-wrap"> 
            <div className="left">
                <div className="mx-20" >
                    <h4 className="text-2xl font-semibold">Store Information</h4>
                    <div className="mx-20">
                        <div className="flex">
                            <div>
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div>Junno Responsive Prestashop Theme United States</div>
                        </div>
                        <hr/>
                        <div className="flex">
                            <div>
                                <i className="fas fa-phone-alt"></i>
                            </div>
                            <div>
                                Call us: 
                                <br />
                                <a href="tel: (+84)123456789">(+84)0123456789</a>
                            </div>
                        </div>
                        <hr/>
                        <div className="flex">
                            <div>
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div>
                                Email us:
                                <br />
                                <a href="mailto: abc@gmail.com">abc@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="">
                    <div>
                        <h3 className="text-2xl font-semibold">Contact Us</h3>
                    </div>

                    {/* Subject */}
                    <div className="flex">
                        <label htmlFor="">Subject</label>
                        <div>
                            <select name="" id="">
                            <option value="">Customer service</option>
                            <option value="">Webmaster</option>
                            </select>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex">
                        <label htmlFor="">Email address</label>
                        <div>
                            <input type="email" placeholder="your@email.com" />
                        </div>
                    </div>

                    {/* Attachment */}
                    <div className="flex">
                        <label htmlFor="">Attachment</label>
                        <div>
                            <input type="text" />
                            <input type="file" value="" title=" "/>
                        </div>
                    </div>

                    {/* Message */}
                    <div className="flex">
                        <label htmlFor="">Message</label>
                        <div>
                            <textarea name="" id="" placeholder="How can hlep you???"></textarea>
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
)
}