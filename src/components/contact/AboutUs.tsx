import React from "react";
import cms from "../../assets/cms-img (1).jpg";
export interface IAboutUsProps {}
export default function AboutUs(props: IAboutUsProps) {
  return (
    <div className="container mx-auto">
      <div className="">
        <div className="p-3 mx-10">
          <header className="mb-3">
            <h1 className="px-2 text-2xl capitalize font-medium">About us</h1>
          </header>
          <div className="py-4 text-justify">
            <h2 className="px-2 capitalize font-medium">About us</h2>
            <div className="flex flex-wrap">
              {/* Our company */}
              <div className="sm:w-full md:w-1/3 px-4 mb-7">
                <div>
                  <h3 className="capitalize font-medium mb-2">Our company</h3>
                  <div className="text-sm font-light">
                    <p>
                      <strong>
                        Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod
                        tempor incididun.
                      </strong>
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                      Lorem ipsum dolor sit amet conse ctetur adipisicing elit.
                    </p>
                    <ul>
                      <li>Top quality products</li>
                      <li>Best customer service</li>
                      <li>30-days money back guarantee</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Our tearn */}
              <div className="sm:w-full md:w-1/3 px-4 mb-7">
                <div>
                  <h3 className="capitalize font-medium mb-2">Our team</h3>
                  <div className="text-sm font-light">
                    <div className="w-full">
                      <img src={cms} alt="" className="w-full h-full object-contain" />
                    </div>

                    <p>
                      <strong>Lorem set sint occaecat cupidatat non</strong>
                    </p>
                    <p>
                      Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo.
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonials */}
              <div className="sm:w-full md:w-1/3 px-4 mb-7">
                <div>
                  <h3 className="capitalize font-medium mb-2">Testimonials</h3>
                  <div className="text-sm font-light">
                    <div>
                      <p>
                        Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                      </p>
                    </div>
                    <p>
                      <strong>Lorem ipsum dolor sit</strong>
                    </p>
                    <div>
                      <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet conse ctetur
                        adipisicing elit. Lorem ipsum dolor sit amet conse ctetur adipisicing elit,
                        sed do eiusmod.
                      </p>
                    </div>
                    <p>
                      <strong>Ipsum dolor sit</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
